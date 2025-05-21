// app/api/set-locale/route.ts
import { COOKIE_LOCALE_KEY } from '@/constants/locale';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const locale = req.nextUrl.searchParams.get('locale') || 'en';

  const response = NextResponse.redirect(req.headers.get('referer') || '/');
  response.cookies.set(COOKIE_LOCALE_KEY, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 30, // 30 días
    sameSite: 'lax',
  });

  return response;
}
