// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// export default createMiddleware(routing);

// export const config = {
//   // Match all pathnames except for
//   // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
//   // - … the ones containing a dot (e.g. `favicon.ico`)
//   // matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
//   matcher: ["/((?!api/|trpc/|_next/|_vercel/|.*\\..*).*)"],
// };

import createMiddleware from "next-intl/middleware";
import { locales, routing } from "./i18n/routing";
import { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

function detectLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return routing.defaultLocale;

  const preferredLocales = acceptLanguage
    .split(",")
    .map(lang => lang.split(";")[0].trim().toLowerCase());

  const matchedLocale = preferredLocales.find(lang =>
    locales.includes(lang as typeof locales[number])
  );

  return matchedLocale || routing.defaultLocale;
}

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files and API routes
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/_vercel") ||
    pathname.startsWith("/trpc") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  // Check if the pathname starts with any of the supported locales
  const pathnameHasLocale = locales.some(locale =>
    pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If no locale is found in the path, detect and redirect
  if (!pathnameHasLocale) {
    const detectedLocale = detectLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${detectedLocale}${pathname}`;
    return Response.redirect(url);
  }

  // Let next-intl handle the rest
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api/|trpc/|_next/|_vercel/|.*\\..*).*)"],
};

