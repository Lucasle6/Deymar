import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import "./Intro.css";

/*
  The split-screen entry the user designed: two vertical halves,
  Arquitectura (left) and Interiorismo (right). Each is a dimmed image
  that, on hover, fades in to full color and grows — the hovered half
  widens while the other yields. Clicking a half enters the site with
  that focus. All the hover motion is CSS (cheap, GPU-friendly); Motion
  only handles the one-time entrance.
*/

type Half = {
  key: string;
  label: string;
  image: string;
  focus: string;
};

const halves: Half[] = [
  {
    key: "arq",
    label: "Arquitectura",
    image: "/Deymar/img/intro-arquitectura.webp",
    focus: "arquitectura",
  },
  {
    key: "int",
    label: "Interiorismo",
    image: "/Deymar/img/intro-interiorismo.webp",
    focus: "interiorismo",
  },
];

export default function Intro() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="intro">
      {halves.map((half, i) => (
        <motion.div
          key={half.key}
          className="intro-half"
          initial={reduceMotion ? false : { opacity: 0, y: i === 0 ? 40 : -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 + i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Link
            to={`/sitio?focus=${half.focus}`}
            className="intro-link"
            aria-label={`Entrar a ${half.label}`}
          >
            {/* separate element so it can scale independently of the half */}
            <div
              className="intro-bg"
              style={{ backgroundImage: `url("${half.image}")` }}
            />
            <div className="intro-veil" />
            <div className="intro-label">
              <span className="intro-kicker">Deymar</span>
              <h1>{half.label}</h1>
              <span className="intro-enter">Entrar &rarr;</span>
            </div>
          </Link>
        </motion.div>
      ))}

      {/* center wordmark sitting on the seam */}
      <span aria-hidden className="intro-brand">
        DEYMAR
      </span>
    </div>
  );
}
