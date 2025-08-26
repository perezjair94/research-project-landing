import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";

export default function Themes() {
  const themes = [
    {
      id: "convivencia",
      title: "Convivencia",
      description:
        "La vida en comunidad y las relaciones vecinales en Ciudad Verde",
      image: "/images/photo5.jpg",
      bgColor: "bg-cv-pink/20",
      overlayColor: "bg-cv-pink/20",
    },
    {
      id: "transporte",
      title: "Transporte",
      description:
        "Movilidad y conectividad desde y hacia Ciudad Verde",
      image: "/images/photo1.jpg",
      bgColor: "bg-cv-green/20",
      overlayColor: "bg-cv-green/20",
    },
    {
      id: "espacio-publico",
      title: "Espacio Público",
      description:
        "Parques, plazas y áreas comunes para la recreación y encuentro",
      image: "/images/photo4.jpg",
      bgColor: "bg-cv-blue/20",
      overlayColor: "bg-cv-blue/20",
    },
    {
      id: "seguridad",
      title: "Seguridad",
      description:
        "Percepción de seguridad y medidas de protección en la comunidad",
      image: "/images/photo2.jpg",
      bgColor: "bg-cv-purple/20",
      overlayColor: "bg-cv-purple/20",
    },
    {
      id: "grupos-poblacionales",
      title: "Grupos poblacionales",
      description:
        "Diversidad demográfica y necesidades específicas de diferentes grupos",
      image: "/images/photo1.jpg",
      bgColor: "bg-cv-orange/20",
      overlayColor: "bg-cv-orange/20",
    },
    {
      id: "calidad-de-vida",
      title: "Calidad de Vida",
      description:
        "Bienestar general y satisfacción con la vida en Ciudad Verde",
      image: "/images/photo5.jpg",
      bgColor: "bg-cv-yellow/20",
      overlayColor: "bg-cv-yellow/20",
    },
    {
      id: "gobernanza",
      title: "Gobernanza",
      description:
        "Participación ciudadana y relación con las instituciones",
      image: "/images/photo4.jpg",
      bgColor: "bg-cv-teal/20",
      overlayColor: "bg-cv-teal/20",
    },
    {
      id: "infraestructura",
      title: "Infraestructura",
      description:
        "Servicios públicos y infraestructura urbana de la ciudadela",
      image: "/images/photo2.jpg",
      bgColor: "bg-gray-400/20",
      overlayColor: "bg-gray-400/20",
    },
  ];

  return (
    <main className="bg-white min-h-screen max-w-[1200px] mx-auto">
      {/* Header */}
      <Navigation currentPage="temas" />

      {/* Hero Section with background */}
      <section className="relative">
        <div className="bg-cv-teal/10 px-6 py-10 lg:px-16 lg:py-2 flex gap-20 items-center justify-between">
          <div className="relative z-10">
            <h1 className="text-4xl lg:text-5xl font-bebas text-cv-purple/80 mb-6">
              Temas
            </h1>

            <p className="text-lg lg:text-xl text-black/50 leading-relaxed max-w-[712px]">
              Este portal interactivo permite navegar los temas que alegran o
              preocupan a los residentes que iciparon, dándole protagonismo a
              una multiplicidad de experiencias y vivencias, testimonios y
              anécdotas profundamente personales. ¿Lo más poderoso? podemos
              escuchar sus voces compartiéndonos sus vivencias.
            </p>
          </div>
          {/* Decorative Image */}
          <div className="w-[346px] h-[346px] hidden lg:block">
            <Image
              src="/images/themes-hero-image.png"
              alt="Decorative illustration"
              width={346}
              height={346}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Themes Grid */}
      <section className="p-6 lg:px-14 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {themes.map((theme, index) => (
            <Link
              key={index}
              href={`/temas/${theme.id}`}
              className={`${theme.bgColor} rounded-2xl overflow-hidden backdrop-blur-md flex flex-col lg:flex-row hover:shadow-lg transition-shadow cursor-pointer`}
              style={{ minHeight: "120px" }}
            >
              {/* Image */}
              <div className="w-full h-50 lg:w-[160px] lg:h-full relative">
                <Image
                  src={theme.image}
                  alt={theme.title}
                  width={160}
                  height={120}
                  className="w-full h-full object-cover lg:rounded-l-2xl saturate-[0] contrast-125 opacity-50"
                />
                <div
                  className={`absolute inset-0 ${theme.overlayColor} lg:rounded-l-2xl`}
                ></div>
              </div>

              {/* Content */}
              <div className="flex-1 p-5 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bebas text-black/50 mb-2">
                  {theme.title}
                </h3>
                <p className="text-sm text-black/50 leading-relaxed tracking-tight">
                  {theme.description}
                </p>
              </div>
            </Link>
          ))}
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
