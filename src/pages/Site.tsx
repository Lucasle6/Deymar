import { Link, useSearchParams } from "react-router-dom";

/*
  Placeholder for now — the full one-page site (slider, Nosotros,
  Proyectos, Contacto, footer) lands here in the next lesson.
*/
export default function Site() {
  const [params] = useSearchParams();
  const focus = params.get("focus") ?? "";

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        gap: "1rem",
        textAlign: "center",
      }}
    >
      <div>
        <p
          style={{
            fontFamily: "var(--font-body)",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "var(--muted)",
            fontSize: "0.8rem",
          }}
        >
          Deymar
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            margin: "0.5rem 0 1.5rem",
          }}
        >
          {focus || "Sitio"}
        </h1>
        <Link
          to="/"
          style={{
            fontFamily: "var(--font-body)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent)",
            fontSize: "0.85rem",
          }}
        >
          &larr; Volver a la intro
        </Link>
      </div>
    </main>
  );
}
