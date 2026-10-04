"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "es" | "en";

/* Real contact — confirmed in the business doc */
export const CONTACT = {
  phoneDisplay: "(562) 361-3469",
  phoneHref: "tel:+15623613469",
  // NOTE: WhatsApp number is "por confirmar si es el mismo"; defaults to the shop phone.
  whatsapp: "15623613469",
  address: "9511 Laurel St., Los Angeles, CA 90002",
  mapHref: "https://maps.google.com/?q=9511+Laurel+St,+Los+Angeles,+CA+90002",
};

export function waHref(text: string) {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
}

type Dict = typeof es;

const es = {
  nav: {
    home: "Inicio",
    services: "Servicios",
    work: "Trabajos",
    how: "Proceso",
    contact: "Contacto",
    call: "Márcanos",
    langLabel: "English",
  },
  hero: {
    badge: "Carrocería · Pintura · Soldadura · Fabricación",
    locChip: "LA",
    locText: "9511 Laurel St., Los Ángeles",
    h1: "Tu camión completo, un solo taller.",
    h1a: "Llega golpeada.",
    h1b: "Sale pintada.",
    h1c: "Una sola parada.",
    sub: "Hojalatería, pintura, soldadura y fabricación de caja. Lo dejas una vez y te lo llevas terminado.",
    cta: "Márcanos",
    whatsapp: "WhatsApp",
    waMsg: "Hola MR. CAT, tengo un camión y les quiero mandar unas fotos.",
    note: "El camión parado está costando dinero. Movámonos.",
    loc: "Los Ángeles, CA · Español e inglés",
    strip: ["Una sola parada", "Español e inglés", "Antes y después documentado"],
    partnersLabel: "Unidades que atendemos",
    partners: ["Isuzu", "Hino", "Box Trucks", "Dumps", "Lift Gates"],
  },
  start: {
    badge: "Cómo trabajamos",
    heading: "Lo traes. Te lo entregamos.",
    body: "Nos marcas y nos dices qué trae. Lo revisamos contigo en el taller. Te decimos qué y cuándo. Te lo entregamos con fotos del antes y el después.",
    cta: "Márcanos",
    img: "/images/cab-masked-process.jpg",
    alt: "Cabina enmascarillada en proceso dentro del taller MR. CAT",
  },
  process: {
    label: "Proceso",
    heading: "Del teléfono a la entrega",
    sub: "Sin vueltas. Dejas la unidad una vez y la recoges terminada.",
    steps: [
      {
        t: "Nos marcas o mandas foto",
        d: "Por teléfono o WhatsApp nos dices qué trae la unidad.",
        img: "/images/cab-damage-before.jpg",
        alt: "Cabina golpeada, foto que manda el cliente",
      },
      {
        t: "Revisamos contigo",
        d: "Vemos la unidad enfrente de ti. Sin adivinanzas.",
        img: "/images/cab-sanded-before.jpg",
        alt: "Cabina lijada en revisión",
      },
      {
        t: "Te decimos qué y cuándo",
        d: "Alcance y tiempo claros antes de empezar.",
        img: "/images/cab-masked-process.jpg",
        alt: "Cabina enmascarillada lista para el plan de trabajo",
      },
      {
        t: "Trabajamos la unidad",
        d: "Resane, enmascarillado, pintura o soldadura. El oficio bien hecho.",
        img: "/images/cab-paint-golden.jpg",
        alt: "Cabina en proceso de pintura",
      },
      {
        t: "Te la entregamos",
        d: "Terminada y con fotos del antes y el después.",
        img: "/images/cab-painted-after.jpg",
        alt: "Cabina pintada lisa y pareja, entregada",
      },
    ],
  },
  chess: {
    badge: "Trabajos",
    heading: "Así llegó. Así salió.",
    rows: [
      {
        t: "Cabina golpeada, cabina pareja.",
        d: "Llega con el techo despostillado, pintura levantada y óxido en las costuras. Lijamos, resanamos y enmascarillamos antes de pintar. Por eso no se ve parchado a los seis meses.",
        cta: "Ver más trabajos",
        before: "/images/cab-sanded-before.jpg",
        after: "/images/cab-painted-after.jpg",
        altB: "Cabina lijada y resanada antes de pintar",
        altA: "Cabina pintada lisa y pareja",
      },
      {
        t: "Del chasis desnudo a la caja montada.",
        d: "Cortamos, soldamos y fabricamos. Desmontamos la caja, trabajamos el chasis y montamos la nueva. Todo aquí mismo, sin que andes de taller en taller.",
        cta: "Ver el proceso",
        before: "/images/chassis-bare-before.jpg",
        after: "/images/dump-body-after.jpg",
        altB: "Chasis desnudo sin caja",
        altA: "Caja nueva montada y lista",
      },
    ],
  },
  grid: {
    badge: "Servicios",
    heading: "Cuatro cosas, bien hechas.",
    items: [
      {
        icon: "spray",
        t: "Pintura y modificación de cabinas",
        d: "Lijado, resane y enmascarillado completo antes de pintar. Acabado parejo, no parchado.",
      },
      {
        icon: "truck",
        t: "Reparación de box trucks",
        d: "Golpes, óxido en costuras, postes y techo. Te la dejamos lisa.",
      },
      {
        icon: "door",
        t: "Puertas roll-up",
        d: "¿Ya no sube? La reparamos para que vuelvas a cargar sin batallar.",
      },
      {
        icon: "flame",
        t: "Soldadura y modificaciones",
        d: "Cortamos, soldamos y fabricamos. También montamos caja sobre chasis.",
      },
    ],
  },
  reviews: {
    badge: "Reseñas",
    heading: "Lo que dicen.",
    placeholder: "[PENDIENTE: reseña real de Google]",
    namePlaceholder: "[PENDIENTE: nombre]",
    rolePlaceholder: "[PENDIENTE: unidad / flota]",
  },
  photos: {
    badge: "Galería",
    heading: "Más del taller.",
    sub: "Unidades reales que pasaron por aquí. Haz clic para ver en grande.",
    items: [
      { src: "/images/hero-freightliner-after.jpg", cap: "Freightliner pintada roja y dorada" },
      { src: "/images/cab-paint-golden.jpg", cap: "Cabina dorada enmascarillada" },
      { src: "/images/dump-blue-after.jpg", cap: "Dump azul terminado" },
      { src: "/images/boxtruck-hino-after.jpg", cap: "Box truck Hino reparado" },
      { src: "/images/npr-dump-after.jpg", cap: "Isuzu NPR con caja dump" },
      { src: "/images/cab-masked-process.jpg", cap: "Enmascarillado en proceso" },
      { src: "/images/npr-clean-after.jpg", cap: "Isuzu NPR blanco terminado" },
      { src: "/images/freightliner-before.jpg", cap: "Freightliner antes del trabajo" },
      { src: "/images/boxtruck-front-before.jpg", cap: "Frente de box truck golpeado" },
      { src: "/images/cab-paint-before.jpg", cap: "Cabina antes de pintar" },
      { src: "/images/flatbed-strip-before.jpg", cap: "Plataforma en desmontaje" },
    ],
  },
  faq: {
    label: "Preguntas",
    heading: "Preguntas frecuentes",
    items: [
      {
        q: "¿Qué camiones atienden?",
        a: "Camión comercial mediano: box trucks, dumps, cajas, cabinas y chasis. Carrocería, pintura, soldadura y fabricación de caja.",
      },
      {
        q: "¿Hacen mecánica?",
        a: "No. No hacemos motor, transmisión, frenos ni eléctrico, ni autos particulares. Nos dedicamos a carrocería, pintura, soldadura y fabricación.",
      },
      {
        q: "¿Atienden en español e inglés?",
        a: "Sí. Te atendemos en español e inglés, de troquero a troquero.",
      },
      {
        q: "¿Trabajan con flotas?",
        a: "Sí. Atendemos unidades de flota comercial y documentamos cada trabajo con fotos de antes y después para tu reporte.",
      },
      {
        q: "¿Dónde están y cómo los contacto?",
        a: "En 9511 Laurel St., Los Angeles, CA 90002. Márcanos o mándanos foto por WhatsApp al (562) 361-3469.",
      },
      {
        q: "¿Dan factura, garantía o servicio móvil?",
        a: "[PENDIENTE: confirmar con el taller]",
      },
    ],
  },
  value: {
    label: "Por qué MR. CAT",
    heading: "Tu camión parado no está descompuesto. Está perdiendo dinero.",
    body: "Aquí no te mandamos de hojalatero a pintor a soldador. Dejas la unidad una vez y la recoges terminada.",
    pillars: [
      {
        t: "Una sola parada",
        d: "Hojalatería, masilla, resane, enmascarillado y pintura. Todo bajo un mismo techo.",
      },
      {
        t: "Te decimos la verdad",
        d: "Si no conviene hacerlo, te lo decimos de frente. Sin atole con el dedo.",
      },
      {
        t: "El oficio antes que el atajo",
        d: "Se lija y se resana bien. Por eso no se ve parchado a los seis meses.",
      },
    ],
  },
  services: {
    label: "Lo que hacemos",
    heading: "Trabajo de camión, todos los días.",
    sub: "Camión comercial mediano: box trucks, dumps, cajas, cabinas y chasis.",
    items: [
      {
        t: "Pintura y modificación de cabinas",
        d: "Cab truck mods & paint. Color parejo, sin sombras ni parches.",
        img: "/images/cab-paint-golden.jpg",
        alt: "Cabina enmascarillada y pintada en MR. CAT",
      },
      {
        t: "Reparación de box trucks",
        d: "Paneles, costuras y frentes. Que la caja vuelva a verse de trabajo.",
        img: "/images/boxtruck-hino-after.jpg",
        alt: "Box truck reparado y terminado",
      },
      {
        t: "Puertas roll-up",
        d: "Roll-up door repair. Que suba y baje como debe.",
        img: "/images/dump-blue-after.jpg",
        alt: "Unidad con caja terminada",
      },
      {
        t: "Soldadura, fabricación y montaje de caja",
        d: "Cortamos, soldamos y montamos caja sobre chasis desnudo.",
        img: "/images/chassis-bare-before.jpg",
        alt: "Chasis desnudo listo para fabricación de caja",
      },
    ],
  },
  gallery: {
    label: "Así llegó. Así salió.",
    heading: "El trabajo habla solo.",
    sub: "Documentamos cada unidad con fotos de antes y después.",
    before: "Antes",
    after: "Después",
    pairs: [
      {
        before: "/images/freightliner-before.jpg",
        after: "/images/hero-freightliner-after.jpg",
        cap: "Cabina Freightliner",
        altB: "Freightliner con pintura levantada antes del trabajo",
        altA: "Freightliner pintada roja y dorada, terminada",
      },
      {
        before: "/images/cab-damage-before.jpg",
        after: "/images/cab-painted-after.jpg",
        cap: "Esquina de cabina",
        altB: "Esquina de cabina golpeada",
        altA: "Cabina pintada lisa y pareja",
      },
      {
        before: "/images/chassis-bare-before.jpg",
        after: "/images/dump-body-after.jpg",
        cap: "Caja sobre chasis",
        altB: "Chasis desnudo sin caja",
        altA: "Caja nueva montada y lista",
      },
      {
        before: "/images/cab-sanded-before.jpg",
        after: "/images/npr-clean-after.jpg",
        cap: "Carrocería Isuzu NPR",
        altB: "Cabina lijada con resane antes de pintar",
        altA: "Cabina Isuzu NPR blanca terminada",
      },
    ],
  },
  proof: {
    label: "Confianza de flotas",
    heading: "Atendemos unidades de flota comercial.",
    body: "Incluyendo unidades de 1-800-GOT-JUNK, franquicia nacional de junk removal.",
    fleet:
      "¿Manejas una flota? Documentamos cada trabajo con fotos de antes y después para tu reporte. Te tratamos como quien sabe de camiones.",
    imgs: [
      { src: "/images/gotjunk-fleet-1.jpg", alt: "Unidad de flota 1-800-GOT-JUNK atendida en MR. CAT" },
      { src: "/images/gotjunk-fleet-2.jpg", alt: "Camión dump de 1-800-GOT-JUNK terminado" },
      { src: "/images/npr-dump-after.jpg", alt: "Isuzu NPR con caja dump terminada" },
    ],
  },
  honesty: {
    label: "Claro de una vez",
    heading: "Lo que sí hacemos. Y lo que no.",
    yesTitle: "Sí hacemos",
    noTitle: "No hacemos",
    yes: [
      "Carrocería y hojalatería",
      "Pintura de cabinas, cajas y dumps",
      "Reparación de box trucks",
      "Puertas roll-up",
      "Soldadura y modificaciones",
      "Fabricación y montaje de caja sobre chasis",
    ],
    no: [
      "Mecánica: motor, transmisión, frenos, eléctrico",
      "Autos particulares y pickups personales",
      "No somos dealer ni centro de marca",
      "No vendemos camiones ni refacciones al mostrador",
    ],
    note: "Decirte lo que no hacemos te ahorra tiempo. Y el tiempo es lo que te cuesta.",
  },
  contact: {
    label: "Contáctanos",
    heading: "Tráelo y lo vemos.",
    ctaSub: "Entre más rápido lo revisamos, más rápido vuelve a la calle. Márcanos o mándanos foto por WhatsApp.",
    directions: "Cómo llegar",
    body: "Márcanos o mándanos foto por WhatsApp con lo que trae tu camión. Revisamos la unidad enfrente de ti y te decimos alcance y tiempo. Y lo cumplimos.",
    callLabel: "Teléfono",
    waLabel: "WhatsApp",
    addrLabel: "Taller",
    langNote: "Te atendemos en español e inglés.",
    formTitle: "Mándanos los detalles",
    formNote: "Llena esto y se abre WhatsApp con tu mensaje listo.",
    fName: "Nombre",
    fPhone: "Teléfono",
    fUnit: "Unidad (ej. Isuzu NPR, box truck 24 ft)",
    fMsg: "¿Qué trae tu camión?",
    fSend: "Enviar por WhatsApp",
    waTemplate: (n: string, p: string, u: string, m: string) =>
      `Hola MR. CAT. Soy ${n || "(nombre)"}. Tel: ${p || "(teléfono)"}. Unidad: ${u || "(unidad)"}. ${m || ""}`.trim(),
  },
  footer: {
    tagline: "Carrocería, pintura, soldadura y fabricación de camiones. La unidad completa en un solo lugar.",
    langNote: "Español e inglés",
    rights: "Todos los derechos reservados.",
    legal: "© 2026 MR. CAT Truck Repairs. Todos los derechos reservados.",
    links: ["Privacidad", "Términos", "Contacto"],
    builtWith: "Hecho con Claude Web Builder por",
  },
};

const en: Dict = {
  nav: {
    home: "Home",
    services: "Services",
    work: "Work",
    how: "Process",
    contact: "Contact",
    call: "Call us",
    langLabel: "Español",
  },
  hero: {
    badge: "Body · Paint · Welding · Fabrication",
    locChip: "LA",
    locText: "9511 Laurel St., Los Angeles",
    h1: "Your whole truck, one shop.",
    h1a: "Rolls in beat up.",
    h1b: "Rolls out painted.",
    h1c: "One stop.",
    sub: "Bodywork, paint, welding and bed fabrication. Drop it once and pick it up done.",
    cta: "Call us",
    whatsapp: "WhatsApp",
    waMsg: "Hi MR. CAT, I've got a truck and want to send you some photos.",
    note: "A truck that's down is costing money. Let's move.",
    loc: "Los Angeles, CA · Spanish & English",
    strip: ["One stop", "Spanish & English", "Before & after documented"],
    partnersLabel: "Units we service",
    partners: ["Isuzu", "Hino", "Box Trucks", "Dumps", "Lift Gates"],
  },
  start: {
    badge: "How we work",
    heading: "You bring it. We hand it back.",
    body: "Call us and tell us what it's got. We check the unit with you at the shop. We tell you what and when. You get it back with before and after photos.",
    cta: "Call us",
    img: "/images/cab-masked-process.jpg",
    alt: "Masked cab in process inside the MR. CAT shop",
  },
  process: {
    label: "Process",
    heading: "From the call to the handoff",
    sub: "No runaround. Drop the unit once and pick it up done.",
    steps: [
      {
        t: "Call or send a photo",
        d: "Tell us what the unit's got by phone or WhatsApp.",
        img: "/images/cab-damage-before.jpg",
        alt: "Beat-up cab, the photo a customer sends",
      },
      {
        t: "We check it with you",
        d: "We look at the unit with you there. No guessing.",
        img: "/images/cab-sanded-before.jpg",
        alt: "Sanded cab under review",
      },
      {
        t: "We tell you what and when",
        d: "Clear scope and timeline before we start.",
        img: "/images/cab-masked-process.jpg",
        alt: "Masked cab ready for the work plan",
      },
      {
        t: "We work the unit",
        d: "Filler, masking, paint or welding. The craft done right.",
        img: "/images/cab-paint-golden.jpg",
        alt: "Cab in the painting process",
      },
      {
        t: "We hand it back",
        d: "Finished, with before and after photos.",
        img: "/images/cab-painted-after.jpg",
        alt: "Cab painted smooth and even, handed back",
      },
    ],
  },
  chess: {
    badge: "Work",
    heading: "Rolled in. Rolled out.",
    rows: [
      {
        t: "Beat-up cab, even cab.",
        d: "It rolls in with a chipped roof, lifted paint and rust in the seams. We sand, fill and mask before paint. That's why it doesn't look patched in six months.",
        cta: "See more work",
        before: "/images/cab-sanded-before.jpg",
        after: "/images/cab-painted-after.jpg",
        altB: "Cab sanded and filled before paint",
        altA: "Cab painted smooth and even",
      },
      {
        t: "From bare chassis to mounted bed.",
        d: "We cut, weld and fabricate. We pull the bed, work the chassis and mount the new one. All right here, no running shop to shop.",
        cta: "See the process",
        before: "/images/chassis-bare-before.jpg",
        after: "/images/dump-body-after.jpg",
        altB: "Bare chassis with no bed",
        altA: "New bed mounted and ready",
      },
    ],
  },
  grid: {
    badge: "Services",
    heading: "Four things, done right.",
    items: [
      {
        icon: "spray",
        t: "Cab paint & mods",
        d: "Full sanding, filler and masking before paint. Even finish, not patched.",
      },
      {
        icon: "truck",
        t: "Box truck repair",
        d: "Dents, rust in the seams, posts and roof. We leave it smooth.",
      },
      {
        icon: "door",
        t: "Roll-up doors",
        d: "Won't go up? We fix it so you can load without a fight.",
      },
      {
        icon: "flame",
        t: "Welding & mods",
        d: "We cut, weld and fabricate. We also mount beds on chassis.",
      },
    ],
  },
  reviews: {
    badge: "Reviews",
    heading: "What they say.",
    placeholder: "[PENDING: real Google review]",
    namePlaceholder: "[PENDING: name]",
    rolePlaceholder: "[PENDING: unit / fleet]",
  },
  photos: {
    badge: "Gallery",
    heading: "More from the shop.",
    sub: "Real units that came through here. Click to view larger.",
    items: [
      { src: "/images/hero-freightliner-after.jpg", cap: "Freightliner painted red and gold" },
      { src: "/images/cab-paint-golden.jpg", cap: "Golden cab masked for paint" },
      { src: "/images/dump-blue-after.jpg", cap: "Blue dump finished" },
      { src: "/images/boxtruck-hino-after.jpg", cap: "Repaired Hino box truck" },
      { src: "/images/npr-dump-after.jpg", cap: "Isuzu NPR with dump bed" },
      { src: "/images/cab-masked-process.jpg", cap: "Masking in process" },
      { src: "/images/npr-clean-after.jpg", cap: "Finished white Isuzu NPR" },
      { src: "/images/freightliner-before.jpg", cap: "Freightliner before the job" },
      { src: "/images/boxtruck-front-before.jpg", cap: "Dented box truck front" },
      { src: "/images/cab-paint-before.jpg", cap: "Cab before paint" },
      { src: "/images/flatbed-strip-before.jpg", cap: "Flatbed being stripped" },
    ],
  },
  faq: {
    label: "Questions",
    heading: "Frequently asked",
    items: [
      {
        q: "What trucks do you service?",
        a: "Medium commercial trucks: box trucks, dumps, beds, cabs and chassis. Body, paint, welding and bed fabrication.",
      },
      {
        q: "Do you do mechanical work?",
        a: "No. No engine, transmission, brakes or electrical, and no personal cars. We do body, paint, welding and fabrication.",
      },
      {
        q: "Do you help in Spanish and English?",
        a: "Yes. We help you in Spanish and English, trucker to trucker.",
      },
      {
        q: "Do you work with fleets?",
        a: "Yes. We service commercial fleet units and document every job with before and after photos for your report.",
      },
      {
        q: "Where are you and how do I reach you?",
        a: "At 9511 Laurel St., Los Angeles, CA 90002. Call us or send a WhatsApp photo at (562) 361-3469.",
      },
      {
        q: "Do you offer invoicing, warranty or mobile service?",
        a: "[PENDING: confirm with the shop]",
      },
    ],
  },
  value: {
    label: "Why MR. CAT",
    heading: "A truck in the yard isn't broken. It's losing money.",
    body: "We don't bounce you from body man to painter to welder. Drop the unit once and pick it up done.",
    pillars: [
      {
        t: "One stop",
        d: "Bodywork, filler, blocking, masking and paint. All under one roof.",
      },
      {
        t: "Straight talk",
        d: "If it's not worth doing, we tell you to your face. No runaround.",
      },
      {
        t: "Craft over shortcut",
        d: "We sand and block it right. So it doesn't look patched in six months.",
      },
    ],
  },
  services: {
    label: "What we do",
    heading: "Truck work, every day.",
    sub: "Medium commercial trucks: box trucks, dumps, beds, cabs and chassis.",
    items: [
      {
        t: "Cab paint & mods",
        d: "Cab truck mods & paint. Even color, no shadows, no patches.",
        img: "/images/cab-paint-golden.jpg",
        alt: "Masked and painted cab at MR. CAT",
      },
      {
        t: "Box truck repair",
        d: "Panels, seams and front ends. Get the box looking like it works.",
        img: "/images/boxtruck-hino-after.jpg",
        alt: "Repaired and finished box truck",
      },
      {
        t: "Roll-up door repair",
        d: "Roll-up door repair. Opens and closes like it should.",
        img: "/images/dump-blue-after.jpg",
        alt: "Unit with finished bed",
      },
      {
        t: "Welding, fab & bed mounting",
        d: "We cut, weld and mount a bed on a bare chassis.",
        img: "/images/chassis-bare-before.jpg",
        alt: "Bare chassis ready for bed fabrication",
      },
    ],
  },
  gallery: {
    label: "Rolled in. Rolled out.",
    heading: "The work speaks for itself.",
    sub: "We document every unit with before and after photos.",
    before: "Before",
    after: "After",
    pairs: [
      {
        before: "/images/freightliner-before.jpg",
        after: "/images/hero-freightliner-after.jpg",
        cap: "Freightliner cab",
        altB: "Freightliner with lifted paint before the job",
        altA: "Freightliner painted red and gold, finished",
      },
      {
        before: "/images/cab-damage-before.jpg",
        after: "/images/cab-painted-after.jpg",
        cap: "Cab corner",
        altB: "Dented cab corner",
        altA: "Cab painted smooth and even",
      },
      {
        before: "/images/chassis-bare-before.jpg",
        after: "/images/dump-body-after.jpg",
        cap: "Bed on chassis",
        altB: "Bare chassis with no bed",
        altA: "New bed mounted and ready",
      },
      {
        before: "/images/cab-sanded-before.jpg",
        after: "/images/npr-clean-after.jpg",
        cap: "Isuzu NPR bodywork",
        altB: "Cab sanded and filled before paint",
        altA: "Finished white Isuzu NPR cab",
      },
    ],
  },
  proof: {
    label: "Trusted by fleets",
    heading: "We service commercial fleet units.",
    body: "Including units from 1-800-GOT-JUNK, a national junk-removal franchise.",
    fleet:
      "Running a fleet? We document every job with before and after photos for your report. We treat you like someone who knows trucks.",
    imgs: [
      { src: "/images/gotjunk-fleet-1.jpg", alt: "1-800-GOT-JUNK fleet unit serviced at MR. CAT" },
      { src: "/images/gotjunk-fleet-2.jpg", alt: "Finished 1-800-GOT-JUNK dump truck" },
      { src: "/images/npr-dump-after.jpg", alt: "Isuzu NPR with finished dump bed" },
    ],
  },
  honesty: {
    label: "Straight from the start",
    heading: "What we do. And what we don't.",
    yesTitle: "We do",
    noTitle: "We don't",
    yes: [
      "Body and sheet-metal work",
      "Paint for cabs, beds and dumps",
      "Box truck repair",
      "Roll-up doors",
      "Welding and modifications",
      "Bed fabrication and mounting on chassis",
    ],
    no: [
      "Mechanical: engine, transmission, brakes, electrical",
      "Personal cars and pickups",
      "We're not a dealer or brand center",
      "We don't sell trucks or counter parts",
    ],
    note: "Telling you what we don't do saves you time. And time is what it costs you.",
  },
  contact: {
    label: "Get in touch",
    heading: "Bring it in and we'll look.",
    ctaSub: "The sooner we look at it, the sooner it's back on the road. Call us or send a photo on WhatsApp.",
    directions: "Get directions",
    body: "Call us or send a WhatsApp photo of what your truck's got. We check the unit with you there and tell you scope and time. And we keep it.",
    callLabel: "Phone",
    waLabel: "WhatsApp",
    addrLabel: "Shop",
    langNote: "We help you in Spanish and English.",
    formTitle: "Send us the details",
    formNote: "Fill this out and WhatsApp opens with your message ready.",
    fName: "Name",
    fPhone: "Phone",
    fUnit: "Unit (e.g. Isuzu NPR, 24 ft box truck)",
    fMsg: "What's your truck got?",
    fSend: "Send on WhatsApp",
    waTemplate: (n: string, p: string, u: string, m: string) =>
      `Hi MR. CAT. I'm ${n || "(name)"}. Phone: ${p || "(phone)"}. Unit: ${u || "(unit)"}. ${m || ""}`.trim(),
  },
  footer: {
    tagline: "Truck body, paint, welding and fabrication. The whole unit in one shop.",
    langNote: "Spanish & English",
    rights: "All rights reserved.",
    legal: "© 2026 MR. CAT Truck Repairs. All rights reserved.",
    links: ["Privacy", "Terms", "Contact"],
    builtWith: "Built with Claude Web Builder by",
  },
};

const dict = { es, en };

type LangCtx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const Ctx = createContext<LangCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("mrcat-lang") as Lang | null;
      if (saved === "es" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("mrcat-lang", l);
    } catch {}
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <Ctx.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLang() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useLang must be used within LanguageProvider");
  return c;
}
