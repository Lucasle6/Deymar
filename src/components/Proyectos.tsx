import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects } from "../data/site";

/*
  Fade carousel of the studio's projects — the modern replacement for
  the original Bootstrap carousel. One index, prev/next + dots, each
  slide cross-fades. Caption text is preserved verbatim from the data.
*/
export default function Proyectos() {
  const [i, setI] = useState(0);
  const go = (dir: number) =>
    setI((cur) => (cur + dir + projects.length) % projects.length);
  const project = projects[i];

  return (
    <section id="project" className="project">
      <h2 className="heading">Proyectos</h2>

      <div className="project__stage">
        <AnimatePresence mode="wait">
          <motion.figure
            key={project.name}
            className="project__slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={project.image} alt={project.name} />
            <figcaption className="project__caption">
              <h5>{project.name}</h5>
              <p>{project.caption}</p>
            </figcaption>
          </motion.figure>
        </AnimatePresence>

        <button
          type="button"
          className="project__nav project__nav--prev"
          aria-label="Anterior"
          onClick={() => go(-1)}
        >
          &larr;
        </button>
        <button
          type="button"
          className="project__nav project__nav--next"
          aria-label="Siguiente"
          onClick={() => go(1)}
        >
          &rarr;
        </button>

        <div className="project__dots">
          {projects.map((p, idx) => (
            <button
              key={p.name}
              type="button"
              aria-label={p.name}
              className={idx === i ? "is-active" : undefined}
              onClick={() => setI(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
