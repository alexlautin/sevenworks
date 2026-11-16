import Link from "next/link";

export function Logo({ href = "/", className = "", compact = false }: { href?: string; className?: string; compact?: boolean }) {
  return (
    <Link href={href} className={`group inline-flex items-center gap-2 ${className}`} aria-label="SevenWorks home">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary font-display text-lg font-semibold text-on-primary transition group-hover:rotate-[-4deg]">
        7
      </span>
      <span className={`font-display text-xl font-semibold tracking-tight ${compact ? "hidden sm:inline" : ""}`}>SevenWorks</span>
    </Link>
  );
}
