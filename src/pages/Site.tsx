import { useSearchParams } from "react-router-dom";
import Contacto from "../components/Contacto";
import Nosotros from "../components/Nosotros";
import Proyectos from "../components/Proyectos";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";
import Slider from "../components/Slider";
import { rotatingWords } from "../data/site";
import "./Site.css";

/*
  The full one-page site. The intro passes ?focus=arquitectura|
  interiorismo; we use it only to seed which word the hero shows first.
*/
export default function Site() {
  const [params] = useSearchParams();
  const focus = params.get("focus");
  const initialWord = Math.max(
    0,
    rotatingWords.findIndex((w) => w.toLowerCase() === focus),
  );

  return (
    <div className="site">
      <SiteNav />
      <Slider initialWord={initialWord} />
      <Nosotros />
      <Proyectos />
      <Contacto />
      <SiteFooter />
    </div>
  );
}
