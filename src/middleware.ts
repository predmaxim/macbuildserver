import {NextRequest} from 'next/server';

export async function middleware(request: NextRequest) {
  // const session = request.cookies.get('session')?.value;
  // if (session && request.nextUrl.pathname.startsWith('/login')) {
  //   return Response.redirect(new URL('/', request.url));
  // }
  // if (session && request.nextUrl.pathname.startsWith('/registration')) {
  //   return Response.redirect(new URL('/profile', request.url));
  // }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\\\.png$).*)']
};
