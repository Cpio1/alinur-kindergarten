"use client";

import { useSyncExternalStore } from "react";
import type { SiteMedia } from "@/shared/lib/media-types";
import { DesktopSite } from "@/website/DesktopSite";
import { MobileSite } from "@/mobile-website/MobileSite";
import { WhatsAppFab } from "./WhatsAppFab";

const DESKTOP_QUERY = "(min-width: 68.75rem)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(DESKTOP_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/**
 * Сервер отдаёт оба интерфейса, а видимый выбирает CSS, поэтому верстка не мигает.
 * После гидратации лишний интерфейс удаляется из DOM: на странице остаётся один набор элементов.
 */
export function ViewportSwitch({ media }: { media: SiteMedia }) {
  const mode = useSyncExternalStore<"desktop" | "mobile" | null>(
    subscribe,
    () => (window.matchMedia(DESKTOP_QUERY).matches ? "desktop" : "mobile"),
    () => null,
  );

  return (
    <>
      {mode !== "mobile" && (
        <div className="hidden desk:block">
          <DesktopSite media={media} />
        </div>
      )}
      {mode !== "desktop" && (
        <div className="desk:hidden">
          <MobileSite media={media} />
        </div>
      )}
      <WhatsAppFab />
    </>
  );
}
