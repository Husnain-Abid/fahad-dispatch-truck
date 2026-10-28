export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(isoDate) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${isoDate}T12:00:00Z`));
  } catch {
    return isoDate;
  }
}

export function currentYear() {
  return new Date().getFullYear();
}

export function buildQuoteHref(serviceName) {
  if (!serviceName) return "/get-a-quote";
  return `/get-a-quote?service=${encodeURIComponent(serviceName)}`;
}
