import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function base64urlDecode(str: string): string {
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) {
    base64 += '=';
  }
  return atob(base64);
}

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Protect all /admin routes except /admin/login
  if (path.startsWith('/admin') && path !== '/admin/login') {
    const sessionCookie = request.cookies.get('admin_session')?.value;

    if (!sessionCookie) {
      const redirectUrl = new URL(`${request.nextUrl.basePath || ''}/admin/login`, request.url);
      return NextResponse.redirect(redirectUrl);
    }

    try {
      const parts = sessionCookie.split('.');
      if (parts.length === 3) {
        const payloadStr = base64urlDecode(parts[1]);
        const payload = JSON.parse(payloadStr);
        if (payload.exp < Math.floor(Date.now() / 1000)) {
          const redirectUrl = new URL(`${request.nextUrl.basePath || ''}/admin/login`, request.url);
          const response = NextResponse.redirect(redirectUrl);
          response.cookies.delete('admin_session');
          return response;
        }
      } else {
        const redirectUrl = new URL(`${request.nextUrl.basePath || ''}/admin/login`, request.url);
        const response = NextResponse.redirect(redirectUrl);
        response.cookies.delete('admin_session');
        return response;
      }
    } catch (e) {
      const redirectUrl = new URL(`${request.nextUrl.basePath || ''}/admin/login`, request.url);
      const response = NextResponse.redirect(redirectUrl);
      response.cookies.delete('admin_session');
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
