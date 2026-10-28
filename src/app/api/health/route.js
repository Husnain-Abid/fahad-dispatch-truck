export const dynamic = "force-dynamic";

export function GET() {
  return Response.json({
    ok: true,
    service: "prime-nation-haul",
    storage: "none",
    timestamp: new Date().toISOString(),
  });
}
