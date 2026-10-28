import test from "node:test";
import assert from "node:assert/strict";
import { checkRateLimit, getClientKey } from "../src/lib/rate-limit.js";

test("rate limiter allows five requests then blocks the sixth", () => {
  const key = `test-${Date.now()}-${Math.random()}`;
  for (let index = 0; index < 5; index += 1) {
    assert.equal(checkRateLimit(key).allowed, true);
  }
  const blocked = checkRateLimit(key);
  assert.equal(blocked.allowed, false);
  assert.ok(blocked.retryAfter > 0);
});

test("rate limiter uses separate buckets per scope", () => {
  const suffix = `${Date.now()}-${Math.random()}`;
  for (let index = 0; index < 5; index += 1) {
    checkRateLimit(`contact:${suffix}`);
  }
  assert.equal(checkRateLimit(`contact:${suffix}`).allowed, false);
  assert.equal(checkRateLimit(`quote:${suffix}`).allowed, true);
});

test("client key prefers the first forwarded IP", () => {
  const request = new Request("https://example.com/api/contact", {
    headers: { "x-forwarded-for": "203.0.113.4, 10.0.0.1" },
  });
  assert.equal(getClientKey(request, "contact"), "contact:203.0.113.4");
});
