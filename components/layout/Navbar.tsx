"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navigation } from "@/config/site";
import ProjectInquiry from "./ProjectInquiry";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onFocus = (event: FocusEvent) => {
      if (
        !nav.current?.contains(event.target as Node) &&
        event.target !== toggle.current
      )
        setOpen(false);
    };
    const resize = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };
    window.addEventListener("keydown", keydown);
    document.addEventListener("focusin", onFocus);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("keydown", keydown);
      document.removeEventListener("focusin", onFocus);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="Strother Built Construction home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/strother-built-logo.png"
            alt="Strother Built Construction"
            width={600}
            height={125}
            sizes="(max-width: 374px) 185px, (max-width: 767px) 220px, (max-width: 959px) 250px, (max-width: 1199px) 240px, 275px"
          />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-cta">
          <ProjectInquiry compact />
        </div>
        <button
          className="menu-toggle"
          type="button"
          ref={toggle}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
      </div>
      <nav
        ref={nav}
        id="mobile-nav"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {navigation.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            <span className="nav-number">0{index + 1}</span>
            {item.label}
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
        <Link
          className="button button-primary"
          href="/contact"
          onClick={() => setOpen(false)}
        >
          Start Your Project <span aria-hidden="true">→</span>
        </Link>
        <p>Residential remodeling · Greater Des Moines</p>
      </nav>
    </header>
  );
}
