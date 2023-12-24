import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export default authMiddleware({
  publicRoutes: ['/api/uploadthing', '/'],
  afterAuth(auth, req) {
    // if (auth.userId && auth.isPublicRoute) {
    //   let path = `/dashboard`;

    //   const newUrl = new URL(path, req.url);
    //   return NextResponse.redirect(newUrl);
    // }

    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({
        returnBackUrl: req.url,
      });
    }
  },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
