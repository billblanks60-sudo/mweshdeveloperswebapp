import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { createSessionToken } from '@/lib/auth';

const socialSchema = z.object({
  provider: z.enum(['google', 'github', 'microsoft']),
  email: z.string().email(),
  name: z.string().min(2),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = socialSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: 'Invalid social sign-in details.' },
        { status: 400 },
      );
    }

    const { provider, email, name } = parsed.data;
    const normalizedEmail = email.trim().toLowerCase();

    let user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!user) {
      const passwordHash = await bcrypt.hash(`social-${provider}-${Date.now()}`, 10);
      user = await prisma.user.create({
        data: {
          name,
          email: normalizedEmail,
          passwordHash,
          company: 'Mwesh Developers Global',
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`,
          provider,
          role: 'Client',
        },
      });
    }

    const token = await createSessionToken(user.id);
    const response = NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        company: user.company,
        role: user.role,
        avatar: user.avatar,
        createdAt: user.createdAt,
      },
    });

    response.cookies.set('mwesh_session', token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error('Social auth error:', error);
    return NextResponse.json(
      { message: 'Social sign-in failed. Please try again.' },
      { status: 500 },
    );
  }
}
