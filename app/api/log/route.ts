import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const ip = req.headers.get("x-forwarded-for") ?? req.headers.get("x-real-ip") ?? "unknown";
  const ua = req.headers.get("user-agent") ?? "unknown";
  const ts = new Date().toISOString();

  console.log(`[YAKOO] ${ts} | IP: ${ip} | UA: ${ua.slice(0, 60)} | ${JSON.stringify(body)}`);

  return NextResponse.json({ ok: true });
}
