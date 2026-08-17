import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true });

  response.cookies.set('mwesh_session', '', {
    httpOnly: true,
    path: '/',
    maxAge: 0,
    expires: new Date(0),
  });

  return response;
}
