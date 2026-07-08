// All content from the original Deymar site, as typed data.

export const social = {
  facebook:
    "https://www.facebook.com/profile.php?id=100065428982544&mibextid=ZbWKwL",
  instagram:
    "https://instagram.com/deymar_interiores?igshid=MmJiY2I4NDBkZg==",
};

export const contact = {
  location: "Vallarta, México",
  email: "deymar_arquitectura@hotmail.com",
  phone: "(+52) 331-599-6191",
};

// hero slider frames (optimized WebP under public/img/slider)
export const sliderImages = Array.from(
  { length: 9 },
  (_, i) => `/Deymar/img/slider/slid${i + 1}.webp`,
);

// the rotating word over the hero
export const rotatingWords = [
  "Arquitectura",
  "Interiorismo",
  "Proyectos",
  "Construcción",
];

export const about = {
  kicker: "Nosotros",
  title: "Tu opción de Arquitectura en Vallarta",
  image: "/Deymar/img/about.webp",
  paragraphs: [
    "Somos un despacho de Arquitectura e Interiorismo en donde diseñamos soluciones integrales, convirtiendo las necesidades de nuestros clientes en oportunidades de diseño y experiencias personalizadas para desarrollar un proyecto único.",
    "16 años de trayectoria desarrollando lo que nos apasiona como son proyectos, construcción e interiorismo de residencias, comercios, condominios, uso mixto, etc. Esto respalda nuestra trayectoria.",
    "No solo buscamos un estilo que nos distinga, también buscamos fusionar colores, texturas, materiales e ideas que diferencien cada obra. Cada proyecto tiene su historia y su entorno que la hace única; en Deymar aprovechamos esto para maximizar el potencial de cada espacio en todos los sentidos, desde su conceptualización hasta el proyecto final.",
  ],
};

export type Project = {
  name: string;
  image: string;
  caption: string;
};

export const projects: Project[] = [
  {
    name: "Casa Mariposa",
    image: "/Deymar/img/projects/mariposa.webp",
    caption:
      "Este proyecto residencial fue creado pensando en una arquitectura donde el interior y el exterior se relacionan, incluyendo volúmenes y vanos que permiten esta comunicación; también se integraron la piedra, madera, palapa y acero, entre otros materiales característicos de la zona.",
  },
  {
    name: "Casa Cove",
    image: "/Deymar/img/projects/cove.webp",
    caption:
      "Una casa con mezcla de estilo balinés y mexicano, construida con un toque de distinción y majestuosidad en un terreno con características especiales, que tiene como atractivo un acantilado frente al mar.",
  },
  {
    name: "Villa Rosetta",
    image: "/Deymar/img/projects/roseta.webp",
    caption:
      "Deymar resaltó el ingreso de esta residencia con una puerta antigua y un espejo de agua que, en conjunto con los volúmenes que integran esta construcción, le dan carácter.",
  },
  {
    name: "Casa Stella",
    image: "/Deymar/img/projects/stella.webp",
    caption:
      "Este proyecto residencial fue creado pensando en una arquitectura donde el interior y el exterior se relacionan, incluyendo volúmenes y vanos que permiten esta comunicación; también se integraron la piedra, madera, palapa y acero, entre otros materiales característicos de la zona.",
  },
];

export const footer = {
  emails: ["deymar_arquitectura@hotmail.com", "deymar_interiorismo@hotmail.com"],
  locations: ["Puerto Vallarta", "Sayulita", "Punta de Mita"],
};
