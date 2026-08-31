"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#techstack", label: "Tech Stack" },
  { href: "#projects", label: "Selected Work" },
  { href: "#journey", label: "My Journey" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between px-5 py-5 md:px-10 md:py-7">
        <a
          href="#top"
          className="font-sans text-sm font-bold uppercase tracking-[0.12em] text-accent-vermilion md:text-base"
        >
          Nina Weber
        </a>

        {/* Desktop links */}
        <div className="hidden items-center font-serif text-ink md:flex md:gap-9 md:text-2xl">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap transition-opacity hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
          className="text-accent-vermilion transition-opacity hover:opacity-60 md:hidden"
        >
          <Menu className="size-7" />
        </button>
      </nav>

      {/* Mobile full-screen overlay menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        hidden={!open}
        className="fixed inset-0 z-50 flex flex-col bg-accent-vermilion text-accent-foreground md:hidden"
      >
        <div className="flex items-center justify-between px-5 py-5">
          <span className="font-sans text-sm font-bold uppercase tracking-[0.12em]">
            Nina Weber
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="transition-opacity hover:opacity-60"
          >
            <X className="size-7" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-6 px-5 pb-16">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="display-serif text-5xl transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
