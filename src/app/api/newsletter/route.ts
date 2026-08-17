import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

const newsletterSchema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: 'Please provide a valid email address.' },
        { status: 400 },
      );
    }

    const email = parsed.data.email.trim().toLowerCase();

    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { message: 'This email is already subscribed to the daily newsletter.' },
        { status: 409 },
      );
    }

    await prisma.newsletterSubscriber.create({
      data: { email },
    });

    return NextResponse.json({
      message: 'Thank you! You are now subscribed to our daily newsletter.',
    });
  } catch (error) {
    console.error('Newsletter error:', error);
    return NextResponse.json(
      { message: 'Unable to subscribe right now. Please try again later.' },
      { status: 500 },
    );
  }
}
