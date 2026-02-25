import { auth } from "@/auth";
import { NextResponse } from "next/server";

export const proxy = auth((req) => {
  if (!req.auth) {
    return NextResponse.redirect(new URL("/i/flow/login", req.url));
  }
});

export const config = {
  matcher: ["/compose/tweet", "/home", "/search", "/explore", "/messages"],
};
