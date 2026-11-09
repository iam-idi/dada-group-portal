import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import TeamHero from "@/components/team/TeamHero";
import TeamMemberProfile from "@/components/team/TeamMemberProfile";
import { teamMembers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Team — Dada Group",
  description:
    "Meet the engineers, geoscientists and surveyors leading Dada Group's mining, construction and agriculture businesses across Nigeria, Russia and China.",
};

export default function TeamPage() {
  return (
    <>
      <Nav />
      <main>
        <TeamHero />
        {teamMembers.map((member, i) => (
          <TeamMemberProfile
            key={member.id}
            member={member}
            theme={i % 2 === 0 ? "dark" : "light"}
            index={i}
          />
        ))}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
