import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({
  children,
  transparentHeader = false,
}: {
  children: ReactNode;
  transparentHeader?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader transparent={transparentHeader} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageBanner({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative flex h-[52vh] min-h-[340px] items-center justify-center overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="veil absolute inset-0" />
      <div className="container-page relative text-center animate-fade-up">
        <h1 className="font-display text-4xl text-primary-foreground sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-sm text-primary-foreground/85 sm:text-base">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({
  title,
  eyebrow,
  align = "center",
}: {
  title: string;
  eyebrow?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <h2 className="font-display text-3xl text-maroon sm:text-4xl">{title}</h2>
      {eyebrow && <p className="mt-2 text-sm uppercase tracking-[0.16em] text-muted-foreground">{eyebrow}</p>}
      <div className={`mt-5 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-px w-12 bg-border" />
        <span className="h-2 w-2 rotate-45 bg-gold" />
        <span className="h-px w-12 bg-border" />
      </div>
    </div>
  );
}

export function Sloka({
  devanagari,
  transliteration,
  meaning,
}: {
  devanagari: string;
  transliteration: string;
  meaning: string;
}) {
  return (
    <div className="mandala-bg border-y border-border py-12">
      <div className="container-page max-w-3xl text-center">
        <p className="font-display text-xl leading-relaxed text-maroon sm:text-2xl">{devanagari}</p>
        <p className="mt-4 text-sm italic text-muted-foreground">{transliteration}</p>
        <p className="mt-2 text-sm text-foreground/80">{meaning}</p>
      </div>
    </div>
  );
}
