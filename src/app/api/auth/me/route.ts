import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifySessionToken } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const token = cookies().get('mwesh_session')?.value;

    if (!token) {
      return NextResponse.json({ user: null }, { status: 200 });
    }

    const userId = await verifySessionToken(token);
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
        company: true,
        role: true,
        avatar: true,
        createdAt: true,
        emailVerified: true,
        isAdmin: true,
        lastLogin: true,
      },
    });

    if (!user) {
      return NextResponse.json({ user: null }, { status: 200 });
    }

    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ user: null }, { status: 200 });
  }
}
