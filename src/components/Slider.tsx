import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { rotatingWords, sliderImages } from "../data/site";

/*
  The hero: cross-fading image slideshow with a rotating word on top.
  The original did this with 9 hidden radio inputs + a setInterval and a
  separate text carousel; in React it's two timers driving two indices.
*/
export default function Slider({ initialWord = 0 }: { initialWord?: number }) {
  const reduceMotion = useReducedMotion();
  const [img, setImg] = useState(0);
  const [word, setWord] = useState(initialWord % rotatingWords.length);

  useEffect(() => {
    if (reduceMotion) return;
    const imgTimer = setInterval(
      () => setImg((i) => (i + 1) % sliderImages.length),
      5000,
    );
    const wordTimer = setInterval(
      () => setWord((w) => (w + 1) % rotatingWords.length),
      3000,
    );
    return () => {
      clearInterval(imgTimer);
      clearInterval(wordTimer);
    };
  }, [reduceMotion]);

  return (
    <section id="slider" className="slider">
      <AnimatePresence>
        <motion.div
          key={img}
          className="slider__frame"
          style={{ backgroundImage: `url("${sliderImages[img]}")` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      <div className="slider__veil" />

      <div className="slider__text">
        <AnimatePresence mode="wait">
          <motion.h2
            key={word}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.5 }}
          >
            {rotatingWords[word]}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* dots reflect the current image */}
      <div className="slider__dots">
        {sliderImages.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Imagen ${i + 1}`}
            className={i === img ? "is-active" : undefined}
            onClick={() => setImg(i)}
          />
        ))}
      </div>
    </section>
  );
}
