import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ThemeData {
  id: string;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  overlayColor: string;
  content: {
    overview: string;
    highlights: string[];
    testimonials: {
      name: string;
      quote: string;
      audio?: string;
    }[];
  };
}

const themesData: ThemeData[] = [
  {
    id: "convivencia",
    title: "Convivencia",
    description: "La vida en comunidad y las relaciones vecinales en Ciudad Verde",
    image: "/images/photo5.jpg",
    bgColor: "bg-cv-pink/20",
    overlayColor: "bg-cv-pink/20",
    content: {
      overview: "La convivencia en Ciudad Verde representa uno de los aspectos más importantes de la vida cotidiana en la ciudadela. Los residentes han compartido sus experiencias sobre cómo es vivir en comunidad, las relaciones vecinales y los desafíos y alegrías de la vida compartida.",
      highlights: [
        "Relaciones vecinales y apoyo mutuo",
        "Espacios compartidos y su uso",
        "Conflictos y resolución de problemas",
        "Eventos comunitarios y celebraciones"
      ],
      testimonials: [
        {
          name: "María González",
          quote: "Aquí en Ciudad Verde hemos aprendido a vivir juntos, a compartir los espacios y a ayudarnos mutuamente. Es como una gran familia."
        },
        {
          name: "Carlos Rodríguez",
          quote: "La convivencia no siempre es fácil, pero hemos encontrado maneras de resolver nuestros conflictos y vivir en armonía."
        }
      ]
    }
  },
  {
    id: "transporte",
    title: "Transporte",
    description: "Movilidad y conectividad desde y hacia Ciudad Verde",
    image: "/images/photo1.jpg",
    bgColor: "bg-cv-green/20",
    overlayColor: "bg-cv-green/20",
    content: {
      overview: "El transporte es un tema crucial para los residentes de Ciudad Verde. La movilidad hacia el trabajo, centros educativos y servicios de salud representa tanto oportunidades como desafíos para la comunidad.",
      highlights: [
        "Acceso a transporte público",
        "Conectividad con otras áreas de la ciudad",
        "Costos de transporte",
        "Tiempo de desplazamiento"
      ],
      testimonials: [
        {
          name: "Ana Martínez",
          quote: "El transporte público ha mejorado mucho, pero aún necesitamos más rutas que nos conecten directamente con el centro de la ciudad."
        }
      ]
    }
  },
  {
    id: "espacio-publico",
    title: "Espacio Público",
    description: "Parques, plazas y áreas comunes para la recreación y encuentro",
    image: "/images/photo4.jpg",
    bgColor: "bg-cv-blue/20",
    overlayColor: "bg-cv-blue/20",
    content: {
      overview: "Los espacios públicos en Ciudad Verde son fundamentales para la vida comunitaria. Parques, plazas y áreas recreativas ofrecen lugares de encuentro y esparcimiento para todas las edades.",
      highlights: [
        "Calidad y mantenimiento de parques",
        "Espacios para niños y jóvenes",
        "Áreas deportivas y recreativas",
        "Seguridad en espacios públicos"
      ],
      testimonials: [
        {
          name: "Pedro Silva",
          quote: "Los parques son el corazón de nuestra comunidad. Aquí los niños juegan y los adultos se encuentran para conversar."
        }
      ]
    }
  },
  {
    id: "seguridad",
    title: "Seguridad",
    description: "Percepción de seguridad y medidas de protección en la comunidad",
    image: "/images/photo2.jpg",
    bgColor: "bg-cv-purple/20",
    overlayColor: "bg-cv-purple/20",
    content: {
      overview: "La seguridad es una preocupación central para los residentes de Ciudad Verde. Las experiencias varían, pero la comunidad ha desarrollado estrategias para mejorar la seguridad colectiva.",
      highlights: [
        "Percepción de seguridad en diferentes horarios",
        "Vigilancia comunitaria",
        "Iluminación y espacios seguros",
        "Relación con las autoridades"
      ],
      testimonials: [
        {
          name: "Lucía Herrera",
          quote: "Hemos organizado grupos de vigilancia vecinal que nos han ayudado a sentirnos más seguros en nuestro barrio."
        }
      ]
    }
  },
  {
    id: "grupos-poblacionales",
    title: "Grupos Poblacionales",
    description: "Diversidad demográfica y necesidades específicas de diferentes grupos",
    image: "/images/photo1.jpg",
    bgColor: "bg-cv-orange/20",
    overlayColor: "bg-cv-orange/20",
    content: {
      overview: "Ciudad Verde alberga una gran diversidad de grupos poblacionales, cada uno con necesidades y perspectivas únicas sobre la vida en la ciudadela.",
      highlights: [
        "Niños y jóvenes",
        "Adultos mayores",
        "Familias monoparentales",
        "Personas con discapacidad"
      ],
      testimonials: [
        {
          name: "Roberto Díaz",
          quote: "La diversidad de nuestra comunidad es nuestra fortaleza. Aquí conviven personas de todas las edades y backgrounds."
        }
      ]
    }
  },
  {
    id: "calidad-de-vida",
    title: "Calidad de Vida",
    description: "Bienestar general y satisfacción con la vida en Ciudad Verde",
    image: "/images/photo5.jpg",
    bgColor: "bg-cv-yellow/20",
    overlayColor: "bg-cv-yellow/20",
    content: {
      overview: "La calidad de vida en Ciudad Verde abarca múltiples aspectos del bienestar de los residentes, desde la salud y educación hasta las oportunidades de desarrollo personal y comunitario.",
      highlights: [
        "Acceso a servicios de salud",
        "Oportunidades educativas",
        "Calidad del aire y ambiente",
        "Bienestar emocional y social"
      ],
      testimonials: [
        {
          name: "Elena Vargas",
          quote: "Vivir aquí ha significado una mejora en nuestra calidad de vida. Tenemos acceso a servicios que antes no teníamos."
        }
      ]
    }
  },
  {
    id: "gobernanza",
    title: "Gobernanza",
    description: "Participación ciudadana y relación con las instituciones",
    image: "/images/photo4.jpg",
    bgColor: "bg-cv-teal/20",
    overlayColor: "bg-cv-teal/20",
    content: {
      overview: "La gobernanza en Ciudad Verde involucra la participación activa de los residentes en las decisiones que afectan su comunidad y su relación con las instituciones locales.",
      highlights: [
        "Participación en juntas de acción comunal",
        "Relación con la administración local",
        "Procesos de toma de decisiones",
        "Liderazgo comunitario"
      ],
      testimonials: [
        {
          name: "Miguel Castillo",
          quote: "Es importante que nuestra voz sea escuchada. Participamos activamente en las decisiones que afectan nuestro barrio."
        }
      ]
    }
  },
  {
    id: "infraestructura",
    title: "Infraestructura",
    description: "Servicios públicos y infraestructura urbana de la ciudadela",
    image: "/images/photo2.jpg",
    bgColor: "bg-gray-400/20",
    overlayColor: "bg-gray-400/20",
    content: {
      overview: "La infraestructura de Ciudad Verde incluye todos los servicios públicos y la infraestructura urbana que sostiene la vida diaria de los residentes.",
      highlights: [
        "Servicios de agua y alcantarillado",
        "Energía eléctrica y gas",
        "Vías y accesibilidad",
        "Internet y comunicaciones"
      ],
      testimonials: [
        {
          name: "Carmen López",
          quote: "La infraestructura ha mejorado considerablemente desde que llegamos. Ahora tenemos servicios más confiables."
        }
      ]
    }
  }
];

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ThemeDetail({ params }: PageProps) {
  const { slug } = await params;
  const theme = themesData.find(t => t.id === slug);

  if (!theme) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen max-w-[1200px] mx-auto">
      {/* Header */}
      <header className="px-6 lg:px-10 py-6 flex gap-6 lg:gap-10 items-center justify-start">
        <Image
          src="/logo.png"
          alt="Logo"
          width={250}
          height={180}
          className="h-15 lg:h-20 w-auto"
        />
        <nav className="py-1 rounded flex gap-6 lg:gap-8">
          <Link
            href="/"
            className="text-black/30 font-bold text-lg lg:text-xl hover:text-cv-pink/80 transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="/temas"
            className="text-black/30 font-bold text-lg lg:text-xl hover:text-cv-pink/80 transition-colors"
          >
            Temas
          </Link>
          <span className="text-cv-pink font-bold text-lg lg:text-xl border-b-2 border-cv-pink">
            {theme.title}
          </span>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={`${theme.bgColor} px-6 py-10 lg:px-16 lg:py-16`}>
        <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bebas text-cv-purple/80 mb-6">
              {theme.title}
            </h1>
            <p className="text-lg lg:text-xl text-black/60 leading-relaxed">
              {theme.description}
            </p>
          </div>
          
          <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
            <Image
              src={theme.image}
              alt={theme.title}
              fill
              className="object-cover saturate-[0.7] contrast-125"
            />
            <div className={`absolute inset-0 ${theme.overlayColor}`}></div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-6 lg:px-16 py-12">
        <div className="max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bebas text-cv-purple/70 mb-6">
            Visión General
          </h2>
          <p className="text-lg text-black/60 leading-relaxed mb-8">
            {theme.content.overview}
          </p>
          
          <h3 className="text-2xl font-bebas text-cv-purple/60 mb-4">
            Aspectos Destacados
          </h3>
          <ul className="space-y-3">
            {theme.content.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cv-pink rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-lg text-black/60">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 lg:px-16 py-12 bg-gray-50/50">
        <div className="max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bebas text-cv-purple/70 mb-8">
            Voces de los Residentes
          </h2>
          
          <div className="space-y-8">
            {theme.content.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm">
                <blockquote className="text-lg lg:text-xl text-black/70 italic leading-relaxed mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <cite className="text-base font-semibold text-cv-purple/60 not-italic">
                  — {testimonial.name}
                </cite>
                {testimonial.audio && (
                  <div className="mt-4 flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-cv-pink/10 text-cv-pink rounded-lg hover:bg-cv-pink/20 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="6 3 20 12 6 21 6 3" />
                      </svg>
                      Escuchar testimonio
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="px-6 lg:px-16 py-12">
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
          <Link
            href="/temas"
            className="flex items-center gap-2 px-6 py-3 bg-cv-purple/10 text-cv-purple rounded-lg hover:bg-cv-purple/20 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Volver a todos los temas
          </Link>
          
          <div className="text-center text-black/50">
            <p className="text-sm">
              Explora otros temas de la investigación participativa
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-10 py-8 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="text-base font-semibold text-black/50">
            Hecho con
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-heart-icon lucide-heart text-red-500/50"
          >
            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
          </svg>
          <span className="text-base font-semibold text-black/50">
            por Jair Pérez
          </span>
        </div>
      </footer>
    </main>
  );
}

export async function generateStaticParams() {
  return themesData.map((theme) => ({
    slug: theme.id,
  }));
}