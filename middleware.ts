import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  const authCookie = request.cookies.get('admin_auth');
  if (authCookie?.value === 'true') {
    return NextResponse.next();
  }

  const password = request.nextUrl.searchParams.get('password');
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return NextResponse.next();
  }

  if (password === adminPassword) {
    const response = NextResponse.redirect(
      new URL('/admin/index.html', request.url)
    );
    response.cookies.set('admin_auth', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
    return response;
  }

  return new NextResponse(
    `<!DOCTYPE html>
<html dir="rtl" lang="he">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>כניסה לניהול</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Heebo', sans-serif; background: #fcfcf7; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
    .login { background: white; border: 1px solid #E0DFDC; border-radius: 24px; padding: 2rem; max-width: 360px; width: 90%; text-align: center; }
    h1 { font-size: 1.25rem; margin-bottom: 1rem; color: #3c3c3c; }
    input { width: 100%; padding: 0.75rem 1rem; border: 1px solid #E0DFDC; border-radius: 12px; font-size: 1rem; margin-bottom: 1rem; direction: ltr; }
    button { width: 100%; padding: 0.75rem; background: #3c3c3c; color: white; border: none; border-radius: 12px; font-size: 1rem; cursor: pointer; }
    button:hover { background: #555; }
  </style>
</head>
<body>
  <div class="login">
    <h1>כניסה לניהול האתר</h1>
    <form method="GET" action="/admin">
      <input type="password" name="password" placeholder="סיסמה" autofocus required />
      <button type="submit">כניסה</button>
    </form>
  </div>
</body>
</html>`,
    {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    }
  );
}

export const config = {
  matcher: ['/admin/:path*'],
};
