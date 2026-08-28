import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroHomam from "@/assets/hero-homam.jpg";

export const Route = createFileRoute("/managing-trustee")({
  head: () => ({
    meta: [
      { title: "Sri Rajasasthrigal, Managing Trustee — Vedashramam" },
      {
        name: "description",
        content:
          "Sri Rajasasthrigal serves as Managing Trustee of Vedashramam, guiding the spiritual and administrative direction of the Sabha and the Veda Patasala.",
      },
      { property: "og:title", content: "Sri Rajasasthrigal, Managing Trustee" },
      {
        property: "og:description",
        content: "Guiding the Sabha and the Veda Patasala at Vedashramam, Pondicherry.",
      },
    ],
  }),
  component: TrusteePage,
});

function TrusteePage() {
  return (
    <PageShell transparentHeader>
      <PageBanner title="Managing Trustee" subtitle="Sri Rajasasthrigal" image={heroHomam} />

      <Sloka
        devanagari="गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः।"
        transliteration="Gurur Brahma Gurur Vishnuh Gurur Devo Maheshwarah."
        meaning="The Guru is Brahma, Vishnu and Maheshwara; the Guru is the Supreme Reality itself."
      />

      <section className="container-page py-20">
        <SectionHeading title="Sri Rajasasthrigal" eyebrow="Managing Trustee" />
        <div className="mx-auto mt-12 max-w-3xl space-y-5 text-[0.95rem] leading-relaxed text-foreground/85">
          <p>
            Sri Rajasasthrigal serves as the Managing Trustee of Vedashramam, guiding both the spiritual and
            administrative direction of the Sabha and the Veda Patasala — overseeing the acharyas, the students’
            progress, and the trust’s broader mission.
          </p>
        </div>

        <div className="mandala-bg mx-auto mt-14 max-w-3xl rounded-lg border border-border p-8 text-center">
          <h3 className="font-display text-xl text-maroon">ஸ்ரீ ராஜசாஸ்திரிகள், நிர்வாக அறங்காவலர்</h3>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80">
            ஸ்ரீ ராஜசாஸ்திரிகள் வேதாஶ்ரமத்தின் நிர்வாக அறங்காவலராகப் பணியாற்றி, சபை மற்றும் வேத
            பாடசாலையின் ஆன்மீக மற்றும் நிர்வாக திசைகளை வழிநடத்துகிறார்.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
