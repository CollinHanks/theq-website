// lib/rate-limit.ts
// Simple in-memory rate limiter

interface RateLimitStore {
  [key: string]: {
    count: number
    resetTime: number
  }
}

const store: RateLimitStore = {}

export function rateLimit(identifier: string, limit: number = 5, windowMs: number = 60000) {
  const now = Date.now()
  const key = identifier

  // Clean up old entries
  if (store[key] && store[key].resetTime < now) {
    delete store[key]
  }

  // Initialize if not exists
  if (!store[key]) {
    store[key] = {
      count: 0,
      resetTime: now + windowMs
    }
  }

  // Increment count
  store[key].count++

  // Check if exceeded
  const exceeded = store[key].count > limit
  const remaining = Math.max(0, limit - store[key].count)
  const resetTime = store[key].resetTime

  return {
    success: !exceeded,
    remaining,
    resetTime,
    retryAfter: exceeded ? Math.ceil((resetTime - now) / 1000) : 0
  }
}

export function getClientIdentifier(request: Request): string {
  // Try to get IP from headers
  const forwardedFor = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')

  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }

  if (realIp) {
    return realIp
  }

  return 'unknown'
}