/* eslint-disable import/order */
import { getProfile } from '@/services/profile';
import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

const authRoutes = ['/sign-in', '/sign-up'];
const roleBasedRoutes = {
      USER: [/^\/dashboard(\/.*)?$/, /^\/create-gift(\/.*)?$/],
      ADMIN: [/^\/dashboard(\/.*)?$/, /^\/create-gift(\/.*)?$/],
      // add more role here if needed
};

type TRole = keyof typeof roleBasedRoutes;

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
      const { pathname } = request.nextUrl;

      // Get the current user from the session
      const { data: user } = await getProfile();

      if (!user) {
            // Allow unauthenticated access to auth routes
            if (authRoutes.includes(pathname)) {
                  return NextResponse.next();
            } else {
                  // Redirect unauthenticated users to login
                  return NextResponse.redirect(new URL(`/sign-in?redirect=${pathname}`, request.url));
            }
      }

      const role = user.role as TRole;

      // Check role-based access
      if (role && roleBasedRoutes[role]) {
            const allowedRoutes = roleBasedRoutes[role];

            const hasAccess = allowedRoutes.some((route) => (typeof route === 'string' ? pathname === route : pathname.match(route)));

            if (hasAccess) {
                  return NextResponse.next();
            }
      }

      // Default redirect if access is denied
      return NextResponse.redirect(new URL('/', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
      matcher: ['/dashboard/:path*', '/create-gift/:path*', '/sign-in', '/sign-up'],
};
