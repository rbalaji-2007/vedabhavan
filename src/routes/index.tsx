import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BookOpen, Flame, Newspaper, ChevronLeft, ChevronRight } from "lucide-react";
import { PageShell, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroRecitation from "@/assets/hero-recitation.jpg";
import heroHomam from "@/assets/hero-homam.jpg";
import heroTemple from "@/assets/hero-temple.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vedashramam — Veda Patasala & Spiritual Centre, Pondicherry" },
      {
        name: "description",
        content:
          "Welcome to Vedashramam: a charitable Sabha and a residential Veda Patasala in Pondicherry, training the next generation of Vedic scholars in the guru-shishya parampara.",
      },
      { property: "og:title", content: "Welcome to Vedashramam" },
      {
        property: "og:description",
        content: "Sanatana Dharma Prachara, Veda Patasala, Spiritual Centre — Pondicherry.",
      },
    ],
  }),
  component: Home,
});

const SLIDES = [
  {
    image: heroRecitation,
    title: "Welcome to Vedashramam",
    subtitle: "Sanatana Dharma Prachara, Veda Patasala, Spiritual Centre",
    cta: { label: "About the Patasala", to: "/veda-patasala" },
  },
  {
    image: heroHomam,
    title: "Activities & Celebrations",
    subtitle: "Veda Parayanam, Homams, Navarathri and Ramanavami observances",
    cta: { label: "View Programme", to: "/activities" },
  },
  {
    image: heroTemple,
    title: "Support Vedashramam",
    subtitle: "Vidyadanam and Annadanam for our students and acharyas",
    cta: { label: "Donate Now", to: "/donate" },
  },
] as const;

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[92vh] min-h-[540px] overflow-hidden">
      {SLIDES.map((s, idx) => (
        <div
          key={s.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
          aria-hidden={idx !== i}
        >
          <img
            src={s.image}
            alt=""
            className="h-full w-full object-cover"
            loading={idx === 0 ? "eager" : "lazy"}
          />
          <div className="veil absolute inset-0" />
        </div>
      ))}

      <div className="container-page relative flex h-full items-center justify-center text-center">
        <div key={i} className="max-w-3xl animate-fade-up">
          <h1 className="font-display text-4xl leading-tight text-primary-foreground sm:text-6xl">
            {SLIDES[i].title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm text-primary-foreground/85 sm:text-lg">
            {SLIDES[i].subtitle}
          </p>
          <Link
            to={SLIDES[i].cta.to}
            className="mt-9 inline-flex rounded-md bg-primary px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-maroon"
          >
            {SLIDES[i].cta.label}
          </Link>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => setI((v) => (v - 1 + SLIDES.length) % SLIDES.length)}
        className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-primary-foreground/15 sm:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => setI((v) => (v + 1) % SLIDES.length)}
        className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-primary-foreground/15 sm:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {SLIDES.map((s, idx) => (
          <button
            key={s.title}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? "w-8 bg-gold" : "w-3 bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

const PILLARS = [
  {
    icon: Flame,
    title: "Vedashramam Sabha",
    to: "/sabha",
    body: "A charitable trust dedicated to rendering service in religious and spiritual activities, and to the preservation of the ancient tradition of oral Vedic recitation under the guru-shishya parampara.",
  },
  {
    icon: BookOpen,
    title: "Gurukula Veda Patasala",
    to: "/veda-patasala",
    body: "A traditional residential Gurukulam training students in Vedic chanting, Sanskrit, and ritual knowledge, under the guidance of our acharyas and Managing Trustee, Sri Rajasasthrigal.",
  },
  {
    icon: Newspaper,
    title: "Veda Vani",
    to: "/veda-vani",
    body: "Follow our journal for the latest on activities at Vedashramam, articles and stotrams on Sanatana Dharma, and puja vidhanams.",
  },
];

const POSTS = [
  {
    image: heroHomam,
    category: "Activities & Events",
    title: "Navarathri & Ramanavami Celebrations",
    excerpt:
      "Srimad Ramayana Moola Parayanam, Navavarana Pooja and daily poojas and homams from 7:00 AM to 11:00 AM, with Deeparadhana and Mantrapushpam each evening.",
  },
  {
    image: heroRecitation,
    category: "Patasala",
    title: "Annual Day Celebrations of the Patasala",
    excerpt:
      "A single-day showcase of student progress, recitation demonstrations and community gathering, from 9:00 AM onwards.",
  },
  {
    image: heroTemple,
    category: "Articles",
    title: "Why Veda Samrakshanam Matters",
    excerpt:
      "Learning through daily recitation, memorisation and direct oral transmission from acharya to student — not textbooks alone.",
  },
];

function Home() {
  return (
    <PageShell transparentHeader>
      <Hero />

      <Sloka
        devanagari="ॐ सह नाववतु। सह नौ भुनक्तु। सह वीर्यं करवावहै। ॐ शान्तिः शान्तिः शान्तिः॥"
        transliteration="Om Saha Nau Avatu, Saha Nau Bhunaktu, Saha Viryam Karavavahai. Om Shantih Shantih Shantih."
        meaning="Taittiriya Upanishad — “May we be protected together, nourished together; may we strive together with vigour; may our learning be filled with brilliance; may there be no ill-will between us.”"
      />

      <section className="container-page py-20">
        <SectionHeading title="Welcome to Vedashramam" eyebrow="Sanatana Dharma Prachara · Veda Patasala · Spiritual Centre" />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <Link
              key={p.title}
              to={p.to}
              className="surface-card surface-card-hover flex flex-col p-8 text-center"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent">
                <p.icon className="h-6 w-6 text-primary" />
              </span>
              <h3 className="mt-6 font-display text-xl text-maroon">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <span className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Read more
              </span>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-3xl space-y-5 text-center text-[0.95rem] leading-relaxed text-foreground/85">
          <p>
            Vedashramam is home to two connected institutions: a Sabha dedicated to preserving and promoting
            Vedic and spiritual tradition, and a residential Veda Patasala (Gurukulam) training the next
            generation of Vedic scholars in the traditional guru-shishya system — from Pondicherry.
          </p>
          <p>
            The Sabha promotes Sanatana Dharma, supports the preservation of oral Vedic recitation, and
            sustains the Patasala’s residential education programme — covering student boarding, acharya
            support and facility upkeep.
          </p>
          <Link
            to="/veda-patasala"
            className="inline-flex rounded-md border border-primary px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Know more about the Veda Patasala
          </Link>
        </div>
      </section>

      <section className="mandala-bg border-y border-border py-20">
        <div className="container-page">
          <SectionHeading title="Recent from Veda Vani" eyebrow="Articles, stotrams and event write-ups" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {POSTS.map((post) => (
              <article key={post.title} className="surface-card surface-card-hover overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                  width={1920}
                  height={1088}
                />
                <div className="p-6">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-primary">
                    {post.category}
                  </p>
                  <h3 className="mt-3 font-display text-lg leading-snug text-maroon">{post.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/veda-vani"
              className="inline-flex rounded-md bg-primary px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-maroon"
            >
              Visit Veda Vani
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-maroon py-20 text-maroon-foreground">
        <div className="container-page text-center">
          <p className="font-display text-2xl text-gold">सर्वे भवन्तु सुखिनः</p>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl">Support Vedashramam</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-maroon-foreground/80">
            As a trust, Vedashramam depends on the generosity of well-wishers to sustain the Sabha’s activities
            and the Veda Patasala’s residential education. Support can take the form of Vidyadanam (sponsoring a
            student’s education) or Annadanam (sponsoring meals).
          </p>
          <Link
            to="/donate"
            className="mt-9 inline-flex rounded-md bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Donate Now
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
