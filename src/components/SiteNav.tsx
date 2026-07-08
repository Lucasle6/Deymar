import { useState } from "react";

const links = [
  { label: "Inicio", href: "#slider" },
  { label: "Nosotros", href: "#about" },
  { label: "Proyectos", href: "#project" },
  { label: "Contacto", href: "#contact" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <a href="#slider" className="site-nav__logo">
        <img src="/Deymar/img/logo-web.png" alt="Deymar" height={34} />
      </a>

      <nav className="site-nav__links">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="site-nav__toggle"
        aria-label="Menú"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <nav className="site-nav__drawer">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
