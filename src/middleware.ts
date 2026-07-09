import { NextRequest, NextResponse } from "next/server";

// Password-gates the /admin competitive-analysis vault with HTTP Basic Auth.
// Credentials come from env vars (ADMIN_USER defaults to "prism"); the browser
// shows a native username/password prompt. Not linked from anywhere public.
export function middleware(req: NextRequest) {
  const USER = process.env.ADMIN_USER || "prism";
  const PASS = process.env.ADMIN_PASSWORD || "";

  const header = req.headers.get("authorization");
  if (PASS && header?.startsWith("Basic ")) {
    try {
      const decoded = atob(header.slice(6));
      const sep = decoded.indexOf(":");
      const user = decoded.slice(0, sep);
      const pass = decoded.slice(sep + 1);
      if (user === USER && pass === PASS) {
        return NextResponse.next();
      }
    } catch {
      // fall through to 401
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Prism Admin", charset="UTF-8"' },
  });
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
