import { footer, social } from "../data/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__row">
        <div className="site-footer__col">
          <img src="/Deymar/img/logo-positivo.png" alt="Deymar" height={44} />
          {footer.emails.map((e) => (
            <p key={e}>{e}</p>
          ))}
        </div>

        <div className="site-footer__col">
          <h2>Nuestra ubicación</h2>
          <div className="site-footer__list">
            {footer.locations.map((loc) => (
              <span key={loc}>{loc}</span>
            ))}
          </div>
        </div>

        <div className="site-footer__col">
          <h2>Síguenos</h2>
          <div className="site-footer__list">
            <a href={social.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href={social.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="site-footer__end">
        <span className="site-footer__brand">DEYMAR</span>
        <span className="site-footer__credit">
          © {new Date().getFullYear()} — Todos los derechos reservados
        </span>
      </div>
    </footer>
  );
}
