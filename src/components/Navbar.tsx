"use client";

import { useState } from "react";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "HOBBIES", href: "#hobbies" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-vault-bg/90 backdrop-blur-md border-b border-vault-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <a
            href="#"
            className="font-mono text-vault-blue-glow font-bold tracking-widest text-sm"
          >
            {">"} ANDY.EXE
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-wider text-vault-text-dim hover:text-vault-blue-glow transition-colors"
              >
                [{link.label}]
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-vault-text-dim hover:text-vault-blue-glow"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-vault-border bg-vault-bg/95 backdrop-blur-md">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-xs tracking-wider text-vault-text-dim hover:text-vault-blue-glow transition-colors py-1"
              >
                {">"} {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
