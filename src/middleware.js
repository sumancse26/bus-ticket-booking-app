import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
export async function middleware(req, res) {
  const cookieList = req.cookies;
  const token = cookieList.get("token")?.value;

  const reqHeaders = new Headers(req.headers);
  const reqToken = reqHeaders.get("token");

  if (req.nextUrl.pathname.startsWith("/api/login") && token) {
    reqHeaders.set("token", `${token}`);

    return NextResponse.next({
      request: { headers: reqHeaders },
    });
  }

  if (
    (req.nextUrl.pathname.startsWith("/api/private") ||
      req.nextUrl.pathname.startsWith("/api/dashboard")) &&
    !reqToken
  ) {
    return NextResponse.json({
      success: false,
      message: "Unauthorized user",
    });
  }

  if (
    (req.nextUrl.pathname.startsWith("/api/private") ||
      req.nextUrl.pathname.startsWith("/api/dashboard")) &&
    reqToken
  ) {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const decodedToken = await jwtVerify(reqToken, secret);
    reqHeaders.set("email", `${decodedToken.payload.email}`);
    return NextResponse.next({
      request: { headers: reqHeaders },
    });
  }

  return NextResponse.next();
}
