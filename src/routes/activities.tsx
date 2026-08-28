import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroHomam from "@/assets/hero-homam.jpg";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Activities & Events — Vedashramam" },
      {
        name: "description",
        content:
          "Named celebrations at Vedashramam with detailed daily programmes: Navarathri, Ramanavami, Annual Day of the Patasala, and Jayanthi observances.",
      },
      { property: "og:title", content: "Activities & Events — Vedashramam" },
      {
        property: "og:description",
        content: "Veda Parayanam, homams, Navavarana Pooja, Deeparadhana and Mantrapushpam.",
      },
    ],
  }),
  component: ActivitiesPage,
});

const PROGRAMME = [
  {
    time: "7:00 AM – 11:00 AM",
    activity: "Srimad Ramayana Moola Parayanam, Navavarana Pooja, daily Poojas & Homams",
  },
  { time: "Evening", activity: "Deeparadhana & Mantrapushpam" },
];

const EVENTS = [
  {
    title: "Acharya Jayanthi Celebrations",
    body: "A multi-day observance of the Jayanthi of our guiding acharya, with Veda Parayanam, Kamyartha Homams and allied rituals across the programme.",
    note: "Dates and the full daily programme for the coming year will be announced here.",
  },
  {
    title: "Annual Day of the Patasala",
    body: "A single-day showcase of student progress, recitation demonstrations and community gathering, from 9:00 AM onwards.",
    note: "The annual date will be fixed as the Patasala calendar is set.",
  },
  {
    title: "Navarathri & Ramanavami Celebrations",
    body: "The full festival programme observed at the Ashramam, with parayanam and pooja through the morning and Deeparadhana each evening.",
    note: "Exact date ranges for the current year will be published ahead of the festival.",
  },
];

function ActivitiesPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Activities & Events"
        subtitle="Celebrations observed at Vedashramam through the year"
        image={heroHomam}
      />

      <Sloka
        devanagari="सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।"
        transliteration="Sarve Bhavantu Sukhinah, Sarve Santu Niramayah."
        meaning="Traditional peace verse — “May all be happy, may all be free from illness, may all see auspiciousness, may none suffer.”"
      />

      <section className="container-page py-20">
        <SectionHeading title="Our Celebrations" eyebrow="Named observances with a daily programme" />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {EVENTS.map((e) => (
            <article key={e.title} className="surface-card surface-card-hover flex flex-col p-7">
              <h3 className="font-display text-xl text-maroon">{e.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
              <p className="mt-5 border-t border-border pt-4 text-xs text-primary">{e.note}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-3xl">
          <h3 className="font-display text-2xl text-maroon">Navarathri & Ramanavami — daily programme</h3>
          <div className="mt-6 overflow-hidden rounded-lg border border-border">
            {PROGRAMME.map((p, i) => (
              <div
                key={p.time}
                className={`grid grid-cols-1 gap-1 p-5 sm:grid-cols-[220px_1fr] ${
                  i % 2 === 0 ? "bg-card" : "bg-muted"
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{p.time}</span>
                <span className="text-sm text-foreground/85">{p.activity}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mandala-bg mx-auto mt-16 max-w-3xl rounded-lg border border-border p-8 text-center">
          <h3 className="font-display text-xl text-maroon">நடவடிக்கைகளும் நிகழ்வுகளும்</h3>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80">
            காலை 7:00 – 11:00: ஸ்ரீமத் ராமாயண மூல பாராயணம், நவாவரண பூஜை, தினசரி பூஜைகள் &amp;
            ஹோமங்கள். மாலை: தீபாராதனை &amp; மந்திரபுஷ்பம்.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
