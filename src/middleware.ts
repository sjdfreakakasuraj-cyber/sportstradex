import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of paths that require authentication
const protectedPaths = ['/dashboard', '/profile', '/settings'];

// List of paths that are public (don't require authentication)
const publicPaths = ['/', '/login', '/signup', '/courses', '/experts', '/pocketmoney', '/affiliate', '/reviews', '/contact'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the path is protected
  const isProtectedPath = protectedPaths.some(path => pathname.startsWith(path));
  
  // Check if the path is public
  const isPublicPath = publicPaths.some(path => pathname === path);
  
  // Get the auth token from cookies
  const authToken = request.cookies.get('authToken');
  
  // If trying to access a protected path without authentication, redirect to login
  if (isProtectedPath && !authToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // If logged in user tries to access login/signup pages, redirect to home
  if ((pathname === '/login' || pathname === '/signup') && authToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  // Continue with the request
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};