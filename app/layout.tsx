import type { Metadata, Viewport } from "next";
import { Nunito, Rubik } from "next/font/google";
import { LANG_STORAGE_KEY, SITE, SITE_URL } from "@/shared/content/site";
import { LanguageProvider } from "@/shared/i18n/LanguageProvider";
import { MotionProvider } from "@/shared/ui/MotionProvider";
import "./globals.css";

// Буквы Ұ и ұ находятся в наборе cyrillic, остальные казахские буквы в cyrillic-ext.
const rubik = Rubik({
  subsets: ["cyrillic", "cyrillic-ext", "latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-rubik",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["cyrillic", "cyrillic-ext", "latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const title = "Алинур — детский сад в Алматы";
const description =
  "Частный детский сад «Алинур» в Алматы, улица Музбел, 57. Дети от 2 до 5 лет, 2 группы, воспитание и обучение на казахском языке, пятиразовое питание. Пн–Пт 07:00–18:30. Телефон: +7 702 968 55 55.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: SITE.brand,
  alternates: { canonical: "/" },
  keywords: ["Алинур", "балабақша Алматы", "детский сад Алматы", "частный детский сад", "Музбел 57"],
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE.brand,
    title,
    description,
    locale: "kk_KZ",
    alternateLocale: ["ru_RU"],
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#85C7E8",
  colorScheme: "only light",
};

// Выполняется до отрисовки: скрывает текст, если сохранён русский язык, чтобы не было мигания.
const langScript = `try{if(localStorage.getItem(${JSON.stringify(
  LANG_STORAGE_KEY,
)})==="ru"){var d=document.documentElement;d.lang="ru";d.setAttribute("data-lang-pending","")}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kk" className={`${rubik.variable} ${nunito.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: langScript }} />
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <LanguageProvider>
          <MotionProvider>{children}</MotionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
