import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(request: NextRequest) {
  const token = await getToken({ req: request });

  if (!token) {
    return NextResponse.redirect(new URL("/i/flow/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/compose/tweet", "/home", "/search", "/explore", "/messages"],
};
