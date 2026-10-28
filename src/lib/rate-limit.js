// Simple in-memory rate limiter.
//
// This protects a single Node.js instance from rapid repeated submissions.
// Production deployments on serverless or multi-instance hosting should add a
// distributed limiter (for example Upstash Redis, Vercel KV, or a gateway-level
// rule) because in-memory counters are not shared between instances.

const buckets = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_BUCKETS = 5000;

export function checkRateLimit(key) {
  const now = Date.now();
  const bucketKey = key || "unknown";
  const existing = buckets.get(bucketKey);

  if (buckets.size > MAX_BUCKETS) {
    for (const [entryKey, entry] of buckets.entries()) {
      if (entry.resetAt < now) buckets.delete(entryKey);
    }
    if (buckets.size > MAX_BUCKETS) buckets.clear();
  }

  if (!existing || existing.resetAt < now) {
    buckets.set(bucketKey, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, remaining: MAX_REQUESTS - 1, retryAfter: 0 };
  }

  existing.count += 1;

  if (existing.count > MAX_REQUESTS) {
    return {
      allowed: false,
      remaining: 0,
      retryAfter: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  return {
    allowed: true,
    remaining: MAX_REQUESTS - existing.count,
    retryAfter: 0,
  };
}

export function getClientKey(request, scope) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip =
    (forwarded ? forwarded.split(",")[0].trim() : "") ||
    request.headers.get("x-real-ip") ||
    "unknown";
  return `${scope}:${ip}`;
}
