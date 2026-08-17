import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { createSessionToken } from '@/lib/auth';

const signupSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  phone: z.string().optional().or(z.literal('')),
  company: z.string().optional().or(z.literal('')),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = signupSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: 'Please provide a valid name, email, and password.' },
        { status: 400 },
      );
    }

    const { name, email, password, phone, company } = parsed.data;
    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: 'An account with this email already exists.' },
        { status: 409 },
      );
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email: normalizedEmail,
        phone: phone || null,
        company: company || 'Mwesh Developers Global',
        passwordHash,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`,
      },
    });

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
        emailVerified: user.emailVerified,
        isAdmin: user.isAdmin,
        lastLogin: user.lastLogin,
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
    console.error('Signup API error:', error);
    return NextResponse.json(
      { message: 'Signup failed. Please try again.' },
      { status: 500 },
    );
  }
}
