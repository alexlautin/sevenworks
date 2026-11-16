import Link from "next/link";

// Text wordmark. `compact` uses a smaller size for tight headers on phones.
export function Logo({ href = "/", className = "", compact = false }: { href?: string; className?: string; compact?: boolean }) {
  return (
    <Link
      href={href}
      aria-label="SevenWorks home"
      className={`inline-flex items-baseline font-semibold tracking-[-0.04em] text-ink transition hover:opacity-80 ${
        compact ? "text-lg sm:text-xl" : "text-xl"
      } ${className}`}
    >
      sevenworks
      <span className="ml-px text-accent-ink" aria-hidden>
        .
      </span>
    </Link>
  );
}
