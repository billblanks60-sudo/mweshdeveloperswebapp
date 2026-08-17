import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

const verifySchema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = verifySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: 'Please provide a valid email address.' },
        { status: 400 },
      );
    }

    const normalizedEmail = parsed.data.email.trim().toLowerCase();
    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!user) {
      return NextResponse.json(
        { message: 'No account found for this email.' },
        { status: 404 },
      );
    }

    await prisma.user.update({
      where: { id: user.id },
      data: { emailVerified: true },
    });

    return NextResponse.json({
      message: 'Email verified successfully.',
    });
  } catch (error) {
    console.error('Email verification error:', error);
    return NextResponse.json(
      { message: 'Unable to verify email right now.' },
      { status: 500 },
    );
  }
}
