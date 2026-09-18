'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
const items = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/insights', 'Insights'],
  ['/contact', 'Contact'],
];
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    function escape(e: KeyboardEvent) {
      if (e.key === 'Escape' && open) {
        setOpen(false);
        button.current?.focus();
      }
    }
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [open]);
  return (
    <header className="site-header">
      <nav className="ctr header-inner" aria-label="Main navigation">
        <Link href="/" className="brand" aria-label="MarSan Global home">
          <Image src="/assets/logo.png.webp" alt="" width={38} height={38} priority />
          <span>
            MarSan<em>Global</em>
          </span>
        </Link>
        <div className="desktop-links">
          {items.map(([url, label]) => (
            <Link
              key={url}
              href={url}
              aria-current={
                pathname === url || (url !== '/' && pathname.startsWith(url + '/'))
                  ? 'page'
                  : undefined
              }
            >
              {label}
            </Link>
          ))}
        </div>
        <Link href="/contact" className="header-cta">
          Strategy Call <span aria-hidden="true">↗</span>
        </Link>
        <button
          ref={button}
          className="menu-button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'} <span aria-hidden="true">{open ? '×' : '☰'}</span>
        </button>
      </nav>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!open}
        className="mobile-links"
      >
        {items.map(([url, label]) => (
          <Link
            key={url}
            href={url}
            onClick={() => setOpen(false)}
            aria-current={pathname === url ? 'page' : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
