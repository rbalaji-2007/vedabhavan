import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, UtensilsCrossed, Building2 } from "lucide-react";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroTemple from "@/assets/hero-temple.jpg";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate Now — Support Vedashramam" },
      {
        name: "description",
        content:
          "Support Vedashramam through Vidyadanam and Annadanam — sustaining student boarding, acharya support and facility upkeep at the Veda Patasala.",
      },
      { property: "og:title", content: "Donate Now — Support Vedashramam" },
      {
        property: "og:description",
        content: "Vidyadanam and Annadanam for the students and acharyas of the Veda Patasala.",
      },
    ],
  }),
  component: DonatePage,
});

const WAYS = [
  {
    icon: BookOpen,
    title: "Vidyadanam",
    body: "Sponsor a student’s Vedic education for a month or a year — covering instruction, boarding and study materials.",
  },
  {
    icon: UtensilsCrossed,
    title: "Annadanam",
    body: "Sponsor meals for the resident students and acharyas on a day of your choosing, or on an occasion in your family.",
  },
  {
    icon: Building2,
    title: "General Support",
    body: "Contribute towards acharya support and the upkeep of the Ashramam’s facilities and the Sabha’s activities.",
  },
];

function DonatePage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Donate Now"
        subtitle="Loka Samastha Sukhino Bhavantu"
        image={heroTemple}
      />

      <Sloka
        devanagari="असतो मा सद्गमय। तमसो मा ज्योतिर्गमय। मृत्योर्मा अमृतं गमय॥"
        transliteration="Asato Ma Sadgamaya, Tamaso Ma Jyotirgamaya, Mrityor Ma Amritam Gamaya."
        meaning="Brihadaranyaka Upanishad — “Lead me from the unreal to the real, from darkness to light, from death to immortality.”"
      />

      <section className="container-page py-20">
        <SectionHeading title="Support Vedashramam" eyebrow="Vidyadanam · Annadanam · General Support" />

        <p className="mx-auto mt-12 max-w-3xl text-center text-[0.95rem] leading-relaxed text-foreground/85">
          As a trust, Vedashramam depends on the generosity of well-wishers to sustain the Sabha’s activities and
          the Veda Patasala’s residential education — covering student boarding, acharya support and facility
          upkeep.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {WAYS.map((w) => (
            <div key={w.title} className="surface-card surface-card-hover p-8 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent">
                <w.icon className="h-6 w-6 text-primary" />
              </span>
              <h3 className="mt-6 font-display text-xl text-maroon">{w.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
            </div>
          ))}
        </div>

        <div className="mandala-bg mx-auto mt-16 max-w-3xl rounded-lg border border-border p-8 text-center shadow-soft">
          <h3 className="font-display text-2xl text-maroon">Bank Transfer &amp; Payment Details</h3>
          <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            வங்கி விவரங்கள் &amp; நன்கொடை விவரங்கள்
          </p>

          <div className="mt-6 text-left grid gap-4 rounded-md border border-border bg-card p-6 text-sm">
            <div className="flex justify-between border-b border-border/60 pb-2">
              <span className="text-muted-foreground">Account Name:</span>
              <span className="font-semibold text-foreground">Vedashramam Sabha</span>
            </div>
            <div className="flex justify-between border-b border-border/60 pb-2">
              <span className="text-muted-foreground">Bank &amp; Branch:</span>
              <span className="font-semibold text-foreground">Puducherry Branch</span>
            </div>
            <div className="flex justify-between border-b border-border/60 pb-2">
              <span className="text-muted-foreground">Account No / IFSC:</span>
              <span className="font-semibold text-foreground">[To be published upon gateway finalisation]</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">UPI ID:</span>
              <span className="font-semibold text-foreground">vedashramam@upi (Placeholder)</span>
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-foreground/80">
            For online gateway contributions or specific sponsorship inquiries (Vidyadanam / Annadanam), please write to us directly. Tax receipts under Section 80G will be issued upon verification.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex rounded-md bg-primary px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-maroon"
            >
              Contact Us to Donate / தொடர்புகொள்ள
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <span>Donations governed by our:</span>
            <Link to="/terms" className="text-primary underline-offset-2 hover:underline">
              Terms &amp; Conditions
            </Link>
            <span>•</span>
            <Link to="/privacy" className="text-primary underline-offset-2 hover:underline">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/cancellation" className="text-primary underline-offset-2 hover:underline">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
