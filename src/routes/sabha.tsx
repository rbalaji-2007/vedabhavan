import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroTemple from "@/assets/hero-temple.jpg";

export const Route = createFileRoute("/sabha")({
  head: () => ({
    meta: [
      { title: "About the Sabha — Vedashramam" },
      {
        name: "description",
        content:
          "Vedashramam Sabha is a non-profit charitable trust promoting Sanatana Dharma and preserving oral Vedic recitation under the guru-shishya parampara.",
      },
      { property: "og:title", content: "About the Sabha — Vedashramam" },
      {
        property: "og:description",
        content: "A non-profit charitable trust rendering service in religious and spiritual activities.",
      },
    ],
  }),
  component: SabhaPage,
});

const OBJECTIVES = [
  "Promotion of Sanatana Dharma and spiritual and religious activity in the community.",
  "Preservation of the oral Vedic recitation tradition under the guru-shishya parampara.",
  "Sustained support for the residential Veda Patasala, its students and its acharyas.",
];

function SabhaPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Sabha"
        subtitle="A charitable trust in the service of Sanatana Dharma"
        image={heroTemple}
      />

      <Sloka
        devanagari="विद्या ददाति विनयं विनयाद्याति पात्रताम्।"
        transliteration="Vidya Dadati Vinayam, Vinayat Yati Patratam."
        meaning="Traditional subhashita — “Knowledge gives humility; from humility comes true worthiness.”"
      />

      <section className="container-page py-20">
        <SectionHeading title="About the Sabha" eyebrow="The Trust" />
        <div className="mx-auto mt-12 max-w-3xl space-y-5 text-[0.95rem] leading-relaxed text-foreground/85">
          <p>
            Vedashramam Sabha is a non-profit charitable trust dedicated to rendering service in religious and
            spiritual activities — promoting Sanatana Dharma, supporting the preservation of oral Vedic
            recitation, and sustaining the Veda Patasala’s residential education programme.
          </p>
          <p>
            The Sabha and the Veda Patasala operate as two connected wings under one institutional home: the
            Sabha carries the charitable and religious activity, while the Patasala carries the residential
            teaching of the Vedas in the traditional Gurukula system.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h3 className="font-display text-2xl text-maroon">Objectives</h3>
          <ul className="mt-6 space-y-4">
            {OBJECTIVES.map((o) => (
              <li key={o} className="surface-card flex gap-4 p-5">
                <span className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-gold" />
                <span className="text-sm leading-relaxed text-foreground/85">{o}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mandala-bg mx-auto mt-16 max-w-3xl rounded-lg border border-border p-8 text-center">
          <h3 className="font-display text-xl text-maroon">சபை பற்றி</h3>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80">
            சபை என்பது சமய மற்றும் ஆன்மீக நடவடிக்கைகளில் சேவை செய்வதற்காக அர்ப்பணிக்கப்பட்ட ஒரு இலாப
            நோக்கற்ற தொண்டு அறக்கட்டளையாகும் — சநாதன தர்மத்தை மேம்படுத்துதல், வாய்மொழி வேத பாராயண
            மரபின் பாதுகாப்பை ஆதரித்தல், மற்றும் வேத பாடசாலையின் வதிவிடக் கல்வித் திட்டத்தை
            நிலைநிறுத்துதல்.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
