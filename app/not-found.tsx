import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-sky-soft px-6 text-center">
      <p className="font-display text-7xl font-extrabold">404</p>
      <h1 className="mt-3 text-2xl font-bold">Бет табылмады · Страница не найдена</h1>
      <Link href="/" className="btn btn-ink mt-6">
        Басты бетке · На главную
      </Link>
    </main>
  );
}
