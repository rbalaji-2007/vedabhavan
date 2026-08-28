import { createFileRoute } from "@tanstack/react-router";
import PrivacyPage from "@/pages/Privacy";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Vedashramam, Pondicherry" },
      {
        name: "description",
        content:
          "Privacy policy of Vedashramam — information collection for donations and admissions, data protection, and RBI-compliant payment processing.",
      },
      { property: "og:title", content: "Privacy Policy — Vedashramam" },
      {
        property: "og:description",
        content: "Data protection guidelines, 80G receipt compliance, and secure payment handling.",
      },
    ],
  }),
  component: PrivacyPage,
});
