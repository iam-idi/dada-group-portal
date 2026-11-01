import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Gem, HardHat, Sprout } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BusinessHero from "@/components/business/BusinessHero";
import BusinessOverview from "@/components/business/BusinessOverview";
import BusinessHighlights from "@/components/business/BusinessHighlights";
import BusinessGallery from "@/components/business/BusinessGallery";
import BusinessCTA from "@/components/business/BusinessCTA";
import BusinessCrossLinks from "@/components/business/BusinessCrossLinks";
import { subsidiaries } from "@/lib/data";

const icons = {
  mining: Gem,
  civil: HardHat,
  agriculture: Sprout,
};

export function generateStaticParams() {
  return subsidiaries.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = subsidiaries.find((s) => s.id === slug);
  if (!data) return {};

  return {
    title: `${data.name} — Dada Group`,
    description: data.description,
  };
}

export default async function BusinessPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = subsidiaries.find((s) => s.id === slug);

  if (!data) {
    notFound();
  }

  const Icon = icons[data.id as keyof typeof icons];

  return (
    <>
      <Nav />
      <main>
        <BusinessHero data={data} icon={Icon} />
        <BusinessOverview data={data} />
        <BusinessHighlights data={data} />
        <BusinessGallery data={data} />
        <BusinessCTA data={data} />
        <BusinessCrossLinks currentId={data.id} />
      </main>
      <Footer />
    </>
  );
}
