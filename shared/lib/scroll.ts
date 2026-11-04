/** Плавный переход к секции. Отступ под шапку задан через scroll-margin-top в CSS. */
export function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  window.history.replaceState(null, "", id === "home" ? window.location.pathname : `#${id}`);
}

export function handleAnchorClick(event: React.MouseEvent, id: string) {
  event.preventDefault();
  scrollToSection(id);
}
