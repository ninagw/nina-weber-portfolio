import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { Journey } from "@/components/journey";
import { ContactFooter } from "@/components/contact-footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Journey />
      <ContactFooter />
    </main>
  );
}
