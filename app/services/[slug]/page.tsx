import { notFound } from "next/navigation";
import ServicePage from "@/components/shared/ServicePage";
import { services } from "../../../data/services";


type Params = { slug: keyof typeof services };

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const svc = services[params.slug];
  if (!svc) return {};
  return {
    title: svc.title,
    description: svc.subtitle,
    openGraph: { title: svc.title, description: svc.subtitle },
    twitter: { card: "summary_large_image", title: svc.title, description: svc.subtitle },
  };
}

export default function Page({ params }: { params: Params }) {
  const svc = services[params.slug];
  if (!svc) return notFound();

  return (
    <ServicePage
      title={svc.title}
      subtitle={svc.subtitle}
      packages={svc.packages}
      faq={svc.faq}
      currentSlug={params.slug}
    />
  );
}
