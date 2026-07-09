import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { label: "Inicio", id: "slider" },
  { label: "Nosotros", id: "about" },
  { label: "Proyectos", id: "project" },
  { label: "Contacto", id: "contact" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  /*
    We're inside a HashRouter, so the URL hash (#/sitio) belongs to the
    router — a plain <a href="#about"> would be read as the route /about
    and land on a blank page. Instead we scroll to the section
    programmatically (smooth via scroll-behavior in index.css) without
    ever touching the router's hash.
  */
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }

  return (
    <header className="site-nav">
      {/* logo returns to the split-screen intro (route "/"), not a hash */}
      <Link to="/" className="site-nav__logo" aria-label="Volver a la portada">
        <img src="/Deymar/img/logo-web.png" alt="Deymar" height={34} />
      </Link>

      <nav className="site-nav__links">
        {links.map((l) => (
          <button key={l.id} type="button" onClick={() => scrollTo(l.id)}>
            {l.label}
          </button>
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
            <button key={l.id} type="button" onClick={() => scrollTo(l.id)}>
              {l.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
