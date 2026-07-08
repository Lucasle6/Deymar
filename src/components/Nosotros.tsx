import { motion } from "motion/react";
import { about, social } from "../data/site";

export default function Nosotros() {
  return (
    <section id="about" className="about">
      <h2 className="heading">{about.kicker}</h2>

      <div className="about__row">
        <motion.div
          className="about__image"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img src={about.image} alt="Proyecto Deymar" />
        </motion.div>

        <motion.div
          className="about__info"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h3>{about.title}</h3>
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="about__icons">
            <a href={social.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href={social.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
