import Link from 'next/link';
export default function NotFound() {
  return (
    <section className="ctr min-h-[60vh] py-24">
      <p className="tag tag-gold">404 — Page not found</p>
      <h1 className="sh">
        Let’s get you back
        <br />
        <em>on the right path.</em>
      </h1>
      <p className="sp">
        This page may have moved. Explore our services or return to the homepage.
      </p>
      <Link href="/" className="btn btn-gold">
        Back to home
      </Link>
    </section>
  );
}
