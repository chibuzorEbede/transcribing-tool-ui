export function isMobile(userAgent) {
  return /android.+mobile|ip(hone|[oa]d)/i.test(userAgent);
}
