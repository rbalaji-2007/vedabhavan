import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
};

const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Sabha", to: "/sabha" },
  { label: "Veda Patasala", to: "/veda-patasala" },
  { label: "Managing Trustee", to: "/managing-trustee" },
  { label: "Activities", to: "/activities" },
  { label: "Gallery", to: "/gallery" },
  { label: "Veda Vani", to: "/veda-vani" },
  { label: "Contact Us", to: "/contact" },
];

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !transparent || scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logoMark} alt="Vedashramam emblem" width={44} height={44} className="h-11 w-11" />
          <span className="leading-tight">
            <span
              className={cn(
                "block font-display text-xl tracking-wide",
                solid ? "text-maroon" : "text-primary-foreground",
              )}
            >
              Vedashramam
            </span>
            <span
              className={cn(
                "block text-[0.62rem] uppercase tracking-[0.22em]",
                solid ? "text-muted-foreground" : "text-primary-foreground/80",
              )}
            >
              Pondicherry
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "rounded-md px-3 py-2 text-[0.78rem] font-medium uppercase tracking-[0.09em] transition-colors",
                solid
                  ? "text-foreground hover:bg-accent hover:text-accent-foreground"
                  : "text-primary-foreground/90 hover:bg-primary-foreground/10 hover:text-primary-foreground",
              )}
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/donate"
            className="ml-2 rounded-md bg-primary px-4 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.09em] text-primary-foreground transition-colors hover:bg-maroon"
          >
            Donate Now
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden",
            solid ? "text-foreground hover:bg-accent" : "text-primary-foreground hover:bg-primary-foreground/10",
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col py-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm uppercase tracking-[0.09em] text-foreground hover:bg-accent"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.09em] text-primary-foreground"
            >
              Donate Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export { ChevronDown };
