import { contact } from "../data/site";

export default function Contacto() {
  return (
    <section id="contact" className="contact">
      <h2 className="heading">Contáctanos</h2>

      <div className="contact__boxes">
        <div className="contact__box">
          <span className="contact__pin">◈</span>
          <h3>{contact.location}</h3>
        </div>
        <div className="contact__box">
          <span className="contact__pin">✉</span>
          <h3>{contact.email}</h3>
        </div>
        <div className="contact__box">
          <span className="contact__pin">☎</span>
          <h3>{contact.phone}</h3>
        </div>
      </div>

      {/*
        The original form had no backend (a bare <form action="">). We
        keep the same fields but wire submit to a mailto so it actually
        does something — no server needed on GitHub Pages.
      */}
      <form
        className="contact__form"
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          const nombre = `${data.get("nombre") ?? ""} ${data.get("apellido") ?? ""}`.trim();
          const subject = encodeURIComponent(`Contacto web — ${nombre}`);
          const body = encodeURIComponent(
            `${data.get("mensaje") ?? ""}\n\n— ${nombre} (${data.get("email") ?? ""})`,
          );
          window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
        }}
      >
        <div className="contact__names">
          <input name="nombre" type="text" placeholder="Nombre" required />
          <input name="apellido" type="text" placeholder="Apellido" />
        </div>
        <input name="email" type="email" placeholder="e-mail" required />
        <textarea
          name="mensaje"
          rows={8}
          placeholder="Ingrese aquí su mensaje"
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
