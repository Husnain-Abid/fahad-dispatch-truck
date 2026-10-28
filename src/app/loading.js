export default function Loading() {
  return (
    <div className="min-h-[70svh] bg-offwhite pt-32" role="status" aria-live="polite">
      <span className="sr-only">Loading page content</span>
      <div className="shell">
        <div className="h-3 w-28 bg-navy/10" />
        <div className="mt-6 h-10 w-full max-w-xl bg-navy/10" />
        <div className="mt-3 h-10 w-2/3 max-w-md bg-navy/[0.07]" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="h-40 border border-navy/10 bg-white" />
          ))}
        </div>
      </div>
    </div>
  );
}
