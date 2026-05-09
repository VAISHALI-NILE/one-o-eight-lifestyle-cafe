import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      <span className="font-bodoni text-8xl text-outline-variant mb-8">404</span>
      <h1 className="font-bodoni text-3xl md:text-4xl text-on-surface mb-4">
        This page has wandered off
      </h1>
      <p className="text-on-surface-variant mb-12 max-w-sm font-work">
        The page you&apos;re looking for doesn&apos;t exist or has been moved to
        a new address.
      </p>
      <Link
        href="/"
        className="bg-primary text-on-primary px-10 py-4 font-work text-xs font-semibold tracking-widest uppercase hover:bg-on-surface-variant transition-colors"
      >
        Return Home
      </Link>
    </main>
  );
}
