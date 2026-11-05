import type { SiteMedia } from "@/shared/lib/media-types";
import { MobileHeader } from "./components/MobileHeader";
import { MobileHero } from "./components/MobileHero";
import { MobileAbout } from "./components/MobileAbout";
import { MobileInfo } from "./components/MobileInfo";
import { MobileGroups } from "./components/MobileGroups";
import { MobileMeals } from "./components/MobileMeals";
import { MobileGallery } from "./components/MobileGallery";
import { MobileDocuments } from "./components/MobileDocuments";
import { MobileContact } from "./components/MobileContact";
import { MobileFooter } from "./components/MobileFooter";

export function MobileSite({ media }: { media: SiteMedia }) {
  return (
    <>
      <MobileHeader />
      <main>
        <MobileHero image={media.hero} />
        <MobileAbout image={media.gallery[0]?.src ?? null} second={media.second} />
        <MobileInfo />
        <MobileGroups />
        <MobileMeals />
        <MobileGallery />
        <MobileDocuments />
        <MobileContact />
      </main>
      <MobileFooter />
    </>
  );
}
