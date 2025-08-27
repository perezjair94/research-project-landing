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
    position: { x: -30, y: -10 },
    subthemes: [
      { id: "bienestar-general", title: "Bienestar General", highlights: 156 },
      { id: "satisfaccion-residencial", title: "Satisfacción Residencial", highlights: 134 },
      { id: "condiciones-vida", title: "Condiciones de Vida", highlights: 89 },
      { id: "aspiraciones-futuro", title: "Aspiraciones de Futuro", highlights: 72 },
    ],
  },
  {
    id: "convivencia",
    title: "Convivencia",
    color: "bg-cv-pink/80",
    size: "medium",
    position: { x: 80, y: -110 },
    subthemes: [
      { id: "relaciones-vecinales", title: "Relaciones Vecinales", highlights: 98 },
      { id: "actividades-comunitarias", title: "Actividades Comunitarias", highlights: 67 },
      { id: "conflictos-resolucion", title: "Conflictos y Resolución", highlights: 54 },
      { id: "participacion-social", title: "Participación Social", highlights: 43 },
    ],
  },
  {
    id: "espacio-publico",
    title: "Espacio Público",
    color: "bg-cv-blue/70",
    size: "medium",
    position: { x: 160, y: 20 },
    subthemes: [
      { id: "parques-recreacion", title: "Parques y Recreación", highlights: 112 },
      { id: "espacios-deportivos", title: "Espacios Deportivos", highlights: 78 },
      { id: "areas-comunitarias", title: "Áreas Comunitarias", highlights: 65 },
      { id: "mantenimiento-espacios", title: "Mantenimiento de Espacios", highlights: 49 },
    ],
  },
  {
    id: "infraestructura",
    title: "Infraestructura",
    color: "bg-gray-500/80",
    size: "medium",
    position: { x: 20, y: 130 },
    subthemes: [
      { id: "servicios-publicos", title: "Servicios Públicos", highlights: 134 },
      { id: "conectividad-digital", title: "Conectividad Digital", highlights: 87 },
      { id: "vias-acceso", title: "Vías y Acceso", highlights: 76 },
      { id: "mantenimiento-urbano", title: "Mantenimiento Urbano", highlights: 52 },
    ],
  },
  {
    id: "seguridad",
    title: "Seguridad",
    color: "bg-cv-purple/70",
    size: "small",
    position: { x: -90, y: -110 },
    subthemes: [
      { id: "seguridad-ciudadana", title: "Seguridad Ciudadana", highlights: 89 },
      { id: "vigilancia-comunal", title: "Vigilancia Comunal", highlights: 67 },
      { id: "prevencion-delito", title: "Prevención del Delito", highlights: 54 },
      { id: "seguridad-vial", title: "Seguridad Vial", highlights: 38 },
    ],
  },
  {
    id: "transporte",
    title: "Transporte",
    color: "bg-cv-green/70",
    size: "small",
    position: { x: -130, y: 90 },
    subthemes: [
      { id: "transporte-publico", title: "Transporte Público", highlights: 78 },
      { id: "conectividad-urbana", title: "Conectividad Urbana", highlights: 56 },
      { id: "movilidad-sostenible", title: "Movilidad Sostenible", highlights: 34 },
      { id: "acceso-servicios", title: "Acceso a Servicios", highlights: 29 },
    ],
  },
  {
    id: "poblaciones",
    title: "Poblaciones",
    color: "bg-cv-orange/60",
    size: "small",
    position: { x: 180, y: -70 },
    subthemes: [
      { id: "diversidad-cultural", title: "Diversidad Cultural", highlights: 67 },
      { id: "grupos-vulnerables", title: "Grupos Vulnerables", highlights: 45 },
      { id: "inclusion-social", title: "Inclusión Social", highlights: 38 },
      { id: "equidad-genero", title: "Equidad de Género", highlights: 27 },
    ],
  },
  {
    id: "gobernanza",
    title: "Gobernanza",
    color: "bg-cv-teal/70",
    size: "small",
    position: { x: 140, y: 110 },
    subthemes: [
      { id: "participacion-ciudadana", title: "Participación Ciudadana", highlights: 45 },
      { id: "transparencia-publica", title: "Transparencia Pública", highlights: 32 },
      { id: "servicios-gobierno", title: "Servicios de Gobierno", highlights: 28 },
      { id: "rendicion-cuentas", title: "Rendición de Cuentas", highlights: 19 },
    ],
  },
];
