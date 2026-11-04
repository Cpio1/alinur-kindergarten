import type { SiteMedia } from "@/shared/lib/media-types";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Info } from "./components/Info";
import { Groups } from "./components/Groups";
import { Meals } from "./components/Meals";
import { Gallery } from "./components/Gallery";
import { Documents } from "./components/Documents";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function DesktopSite({ media }: { media: SiteMedia }) {
  return (
    <>
      <Header />
      <main>
        <Hero image={media.hero} />
        <About image={media.gallery[0]?.src ?? null} second={media.second} />
        <Info />
        <Groups />
        <Meals />
        <Gallery images={media.gallery} />
        <Documents />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
