import { notFound } from "next/navigation";
import ServicePage from "@/components/shared/ServicePage";
import { services } from "../../../data/services";

type Params = { slug: keyof typeof services };

export function generateStaticParams() {
  return (Object.keys(services) as Array<keyof typeof services>).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;                 // 👈 Next 15: params is a Promise
  const svc = services[slug];
  if (!svc) return {};
  return {
    title: svc.title,
    description: svc.subtitle,
    openGraph: { title: svc.title, description: svc.subtitle },
    twitter: { card: "summary_large_image", title: svc.title, description: svc.subtitle },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;                 // 👈 await it here too
  const svc = services[slug];
  if (!svc) notFound();

  return (
    <ServicePage
      title={svc.title}
      subtitle={svc.subtitle}
      packages={svc.packages}
      faq={svc.faq}
      currentSlug={slug}
    />
  );
}
