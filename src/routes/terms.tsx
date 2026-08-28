import { createFileRoute } from "@tanstack/react-router";
import TermsPage from "@/pages/Terms";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Vedashramam, Pondicherry" },
      {
        name: "description",
        content:
          "Terms and conditions for Vedashramam Sabha and Veda Patasala, Pondicherry — trust objectives, donations, intellectual property, and jurisdiction.",
      },
      { property: "og:title", content: "Terms & Conditions — Vedashramam" },
      {
        property: "og:description",
        content: "Institutional directives, donation terms, and legal jurisdiction of Vedashramam Sabha.",
      },
    ],
  }),
  component: TermsPage,
});
