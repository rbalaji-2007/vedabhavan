import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroRecitation from "@/assets/hero-recitation.jpg";

export const Route = createFileRoute("/veda-patasala")({
  head: () => ({
    meta: [
      { title: "Veda Patasala — Vedashramam Gurukulam, Pondicherry" },
      {
        name: "description",
        content:
          "A traditional residential Gurukulam training students in Vedic chanting, Sanskrit and ritual knowledge through daily adhyayanam and oral transmission.",
      },
      { property: "og:title", content: "Veda Patasala — Vedashramam" },
      {
        property: "og:description",
        content: "Residential Gurukulam training students in the traditional guru-shishya system.",
      },
    ],
  }),
  component: PatasalaPage,
});

const ROUTINE = [
  { time: "Early morning", activity: "Sandhyavandanam and daily adhyayanam" },
  { time: "Morning", activity: "Veda recitation and memorisation under the acharya" },
  { time: "Midday", activity: "Bhojanam and rest" },
  { time: "Afternoon", activity: "Sanskrit, ritual instruction and revision" },
  { time: "Evening", activity: "Sandhyavandanam, Deeparadhana and group parayanam" },
];

function PatasalaPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Veda Patasala"
        subtitle="A residential Gurukulam in the guru-shishya parampara"
        image={heroRecitation}
      />

      <Sloka
        devanagari="सा विद्या या विमुक्तये।"
        transliteration="Sa Vidya Ya Vimuktaye."
        meaning="Vishnu Purana — “That alone is true knowledge which liberates.”"
      />

      <section className="container-page py-20">
        <SectionHeading title="About the Veda Patasala" eyebrow="Gurukulam" />
        <div className="mx-auto mt-12 max-w-3xl space-y-5 text-[0.95rem] leading-relaxed text-foreground/85">
          <p>
            Our Veda Patasala trains resident students in the traditional Gurukula system — learning through
            daily recitation (adhyayanam), memorisation, and direct oral transmission from acharya to student,
            not textbooks alone.
          </p>
          <p>
            Students live within the Ashramam, following the disciplines of daily sandhyavandanam, parayanam and
            service, under the guidance of our acharyas and the Managing Trustee, Sri Rajasasthrigal.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h3 className="font-display text-2xl text-maroon">A day in the Patasala</h3>
          <div className="mt-6 overflow-hidden rounded-lg border border-border">
            {ROUTINE.map((r, i) => (
              <div
                key={r.time}
                className={`grid grid-cols-1 gap-1 p-5 sm:grid-cols-[200px_1fr] ${
                  i % 2 === 0 ? "bg-card" : "bg-muted"
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{r.time}</span>
                <span className="text-sm text-foreground/85">{r.activity}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-sm text-muted-foreground">
            For admissions and student life enquiries, please write to us.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-md bg-primary px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-maroon"
          >
            Enquire about Admissions
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
