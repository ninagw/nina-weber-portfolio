'use client'

import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'Info' },
  { href: '#work', label: 'Selected Work' },
  { href: '#contact', label: 'Contact' },
]

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between px-5 py-5 md:px-10 md:py-7" aria-label="Main navigation">
        <a href="#top" onClick={closeMenu} className="font-sans text-sm font-bold uppercase tracking-[0.12em] text-accent-vermilion md:text-base">
          Nina G.W.
        </a>

        <div className="hidden items-center gap-9 font-serif text-2xl text-ink md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-opacity hover:opacity-60">
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="relative z-50 flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.12em] text-ink md:hidden"
        >
          <span>{isOpen ? 'Close' : 'Menu'}</span>
          <span aria-hidden="true" className="flex w-5 flex-col gap-1">
            <span className={`block h-px w-full bg-ink transition-transform ${isOpen ? 'translate-y-[3px] rotate-45' : ''}`} />
            <span className={`block h-px w-full bg-ink transition-transform ${isOpen ? '-translate-y-[3px] -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        className={`fixed inset-0 flex min-h-screen flex-col justify-end bg-background px-5 pb-12 pt-28 transition-[opacity,visibility] duration-300 md:hidden ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        <p className="mb-8 font-sans text-xs font-bold uppercase tracking-[0.15em] text-accent-vermilion">Navigate</p>
        <div className="flex flex-col items-start font-serif text-6xl leading-[0.95] text-ink">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu} className="border-b border-ink/15 py-3 transition-colors hover:text-accent-vermilion">
              {link.label}
            </a>
          ))}
        </div>
        <p className="mt-10 max-w-[16rem] font-sans text-sm leading-relaxed text-ink/60">A web developer making thoughtful things for the browser.</p>
      </div>
    </header>
  )
}

export default SiteNav
