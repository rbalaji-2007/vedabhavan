import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";

export function SiteFooter() {
  return (
    <footer className="bg-maroon text-maroon-foreground">
      <div className="container-page grid gap-10 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoMark} alt="" width={40} height={40} className="h-10 w-10" loading="lazy" />
            <span className="font-display text-2xl">Vedashramam</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-maroon-foreground/75">
            Sanatana Dharma Prachara, Veda Patasala and Spiritual Centre — home to a charitable Sabha and a
            residential Gurukulam in the guru-shishya parampara.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-gold">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-maroon-foreground/80">
            {[
              { label: "About the Sabha", to: "/sabha" },
              { label: "Veda Patasala", to: "/veda-patasala" },
              { label: "Managing Trustee", to: "/managing-trustee" },
              { label: "Activities & Events", to: "/activities" },
              { label: "Gallery", to: "/gallery" },
              { label: "Veda Vani", to: "/veda-vani" },
              { label: "Donate Now", to: "/donate" },
              { label: "Contact Us", to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-gold">Reach Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-maroon-foreground/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>Vedashramam, Pondicherry</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>Phone to be published</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>Email to be published</span>
            </li>
          </ul>
          <p className="mt-6 font-display text-base text-gold">
            लोकाः समस्ताः सुखिनो भवन्तु
          </p>
        </div>
      </div>

      <div className="border-t border-maroon-foreground/15">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-maroon-foreground/65 sm:flex-row">
          <p>© {new Date().getFullYear()} Vedashramam. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/terms" className="hover:text-gold">
              Terms &amp; Conditions
            </Link>
            <Link to="/privacy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link to="/cancellation" className="hover:text-gold">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
