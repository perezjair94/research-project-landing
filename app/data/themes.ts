export interface SubTheme {
  id: string;
  title: string;
  highlights: number;
}

export interface Theme {
  id: string;
  title: string;
  color: string;
  size: "small" | "medium" | "large";
  position: { x: number; y: number };
  subthemes: SubTheme[];
}

export const themes: Theme[] = [
  {
    id: "calidad-de-vida",
    title: "Calidad de Vida",
    color: "bg-cv-yellow/80",
    size: "large",
    position: { x: -20, y: -10 },
    subthemes: [
      {
        id: "transicion-lugar-origen",
        title: "Transición desde lugar de origen",
        highlights: 156,
      },
      {
        id: "costos-bienes-servicios",
        title: "Costos de bienes y servicios",
        highlights: 134,
      },
      { id: "bienestar-familiar", title: "Bienestar familiar", highlights: 89 },
      {
        id: "aspiraciones-futuro",
        title: "Aspiraciones de futuro",
        highlights: 72,
      },
    ],
  },
  {
    id: "convivencia",
    title: "Convivencia",
    color: "bg-cv-pink/80",
    size: "medium",
    position: { x: 80, y: -160 },
    subthemes: [
      { id: "manejo-mascotas", title: "Manejo de mascotas", highlights: 98 },
      {
        id: "ruido-volumen",
        title: "Ruido y música a alto volumen",
        highlights: 87,
      },
      {
        id: "espacios-comunes",
        title: "Uso de espacios comunes",
        highlights: 76,
      },
      {
        id: "administraciones",
        title: "Administraciones y vivienda horizontal",
        highlights: 65,
      },
      {
        id: "solucion-conflictos",
        title: "Solución de conflictos",
        highlights: 54,
      },
      { id: "animales-abandonados", title: "Otros animales", highlights: 32 },
    ],
  },
  {
    id: "espacio-publico",
    title: "Espacio Público",
    color: "bg-cv-blue/70",
    size: "medium",
    position: { x: 150, y: 40 },
    subthemes: [
      { id: "areas-verdes", title: "Áreas verdes - parques", highlights: 112 },
      {
        id: "recreacion-deporte",
        title: "Recreación y deporte",
        highlights: 89,
      },
      { id: "comercio-informal", title: "Comercio informal", highlights: 78 },
      { id: "naturaleza", title: "Naturaleza", highlights: 65 },
      { id: "mantenimiento", title: "Mantenimiento", highlights: 54 },
      { id: "basuras", title: "Basuras", highlights: 43 },
    ],
  },
  {
    id: "infraestructura",
    title: "Infraestructura",
    color: "bg-gray-500/80",
    size: "medium",
    position: { x: 10, y: 170 },
    subthemes: [
      { id: "vias", title: "Vías", highlights: 87 },
      { id: "servicios-salud", title: "Servicios de salud", highlights: 76 },
      {
        id: "servicios-publicos",
        title: "Servicios públicos básicos",
        highlights: 65,
      },
      {
        id: "conectividad-digital",
        title: "Internet y comunicaciones",
        highlights: 52,
      },
    ],
  },
  {
    id: "seguridad",
    title: "Seguridad",
    color: "bg-cv-purple/70",
    size: "small",
    position: { x: -140, y: -120 },
    subthemes: [
      {
        id: "consumo-problemático-sustancias",
        title: "Consumo problemático de sustancias",
        highlights: 89,
      },
      { id: "robos", title: "Robos", highlights: 76 },
      {
        id: "servicios-vigilancia",
        title: "Servicios de vigilancia",
        highlights: 54,
      },
      { id: "rinas", title: "Riñas", highlights: 43 },
      { id: "policia", title: "Policía", highlights: 38 },
    ],
  },
  {
    id: "transporte",
    title: "Transporte",
    color: "bg-cv-green/70",
    size: "small",
    position: { x: -150, y: 110 },
    subthemes: [
      {
        id: "oferta-rutas",
        title: "Oferta, horarios y frecuencias",
        highlights: 78,
      },
      { id: "costos", title: "Costos de transporte", highlights: 56 },
      {
        id: "transporte-pirata",
        title: "Transporte ilegal/pirata",
        highlights: 45,
      },
      { id: "conectividad", title: "Falta de conectividad", highlights: 34 },
    ],
  },
  {
    id: "poblaciones",
    title: "Poblaciones",
    color: "bg-cv-orange/60",
    size: "small",
    position: { x: 200, y: -90 },
    subthemes: [
      { id: "jovenes", title: "Jóvenes", highlights: 67 },
      { id: "familias", title: "Familias", highlights: 45 },
      { id: "adultos-mayores", title: "Adultos mayores", highlights: 38 },
      {
        id: "personas-discapacidad",
        title: "Personas con discapacidad",
        highlights: 27,
      },
    ],
  },
  {
    id: "gobernanza",
    title: "Gobernanza",
    color: "bg-cv-teal/70",
    size: "small",
    position: { x: 160, y: 180 },
    subthemes: [
      {
        id: "gestion-institucional",
        title: "Gestión institucional",
        highlights: 45,
      },
      {
        id: "participacion-comunitaria",
        title: "Participación comunitaria",
        highlights: 32,
      },
      { id: "liderazgo-local", title: "Liderazgo local", highlights: 28 },
      { id: "toma-decisiones", title: "Toma de decisiones", highlights: 19 },
    ],
  },
];
