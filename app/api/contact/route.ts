import { NextRequest, NextResponse } from "next/server";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzxa9FLxCyq0QT65RKjfT4pZtJQPucw_HNQ78eieIKZGvCb5v7lG6_omIrNga3VEMs2/exec";

export async function POST(request: NextRequest) {
  const data = await request.json();

  await fetch(
    SCRIPT_URL +
      "?" +
      new URLSearchParams({
        firstName: data.firstName ?? "",
        lastName: data.lastName ?? "",
        email: data.email ?? "",
        phone: data.phone ?? "",
        subject: data.subject ?? "",
        message: data.message ?? "",
      })
  );

  return NextResponse.json({ success: true });
}
