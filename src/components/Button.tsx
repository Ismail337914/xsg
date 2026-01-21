import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-150";

  const styles: Record<Variant, string> = {
    primary:
      "bg-foreground text-background hover:bg-accent-2 hover:text-background border border-transparent shadow-sm hover:shadow focus-visible:shadow-sm",
    secondary:
      "bg-transparent text-foreground border border-border hover:border-accent hover:bg-surface-2",
  };

  const isExternal = href.startsWith("http");
  const common = `${base} ${styles[variant]} ${className}`;

  if (isExternal) {
    return (
      <a className={common} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={common} href={href}>
      {children}
    </Link>
  );
}

