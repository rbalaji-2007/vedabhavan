import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading } from "@/components/site/PageShell";
import heroRecitation from "@/assets/hero-recitation.jpg";
import heroHomam from "@/assets/hero-homam.jpg";
import heroTemple from "@/assets/hero-temple.jpg";

export const Route = createFileRoute("/veda-vani")({
  head: () => ({
    meta: [
      { title: "Veda Vani — Journal of Vedashramam" },
      {
        name: "description",
        content:
          "Veda Vani: articles, event write-ups, stotrams and puja vidhanam guides from Vedashramam, Pondicherry.",
      },
      { property: "og:title", content: "Veda Vani — Journal of Vedashramam" },
      {
        property: "og:description",
        content: "Articles, stotrams, event write-ups and puja vidhanam guides.",
      },
    ],
  }),
  component: BlogPage,
});

const CATEGORIES = ["Activities & Events", "Articles", "Stotrams"];

const POSTS = [
  {
    image: heroHomam,
    category: "Activities & Events",
    title: "Navarathri & Ramanavami Celebrations",
    excerpt:
      "The full daily programme observed at the Ashramam — Srimad Ramayana Moola Parayanam and Navavarana Pooja through the morning, Deeparadhana and Mantrapushpam each evening.",
  },
  {
    image: heroRecitation,
    category: "Articles",
    title: "The Gurukula Method of Learning",
    excerpt:
      "Why oral transmission from acharya to student — daily recitation and memorisation — remains the heart of Vedic education.",
  },
  {
    image: heroTemple,
    category: "Stotrams",
    title: "Stotrams for Daily Recitation",
    excerpt:
      "A growing collection of stotrams and puja vidhanams, with text and guidance for householders observing them at home.",
  },
];

function BlogPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Veda Vani"
        subtitle="Articles, event write-ups, stotrams and puja vidhanam guides"
        image={heroRecitation}
      />

      <section className="container-page py-20">
        <SectionHeading title="From the Journal" eyebrow="Voice of the Vedas" />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-accent px-4 py-1.5 text-xs uppercase tracking-[0.12em] text-accent-foreground"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {POSTS.map((p) => (
            <article key={p.title} className="surface-card surface-card-hover overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1920}
                height={1088}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-primary">
                  {p.category}
                </p>
                <h3 className="mt-3 font-display text-lg leading-snug text-maroon">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
