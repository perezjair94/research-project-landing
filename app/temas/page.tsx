import Image from "next/image";
import Link from "next/link";

export default function Themes() {
  const themes = [
    {
      title: "Convivencia",
      description:
        "Housing Affordability, Homeownership, Gentrification and Displacement, Housing Instability, Housing Quality",
      image: "/images/photo5.jpg",
      bgColor: "bg-cv-pink/20",
      overlayColor: "bg-cv-pink/20",
    },
    {
      title: "Transporte",
      description:
        "Housing Affordability, Homeownership, Gentrification and Displacement, Housing Instability, Housing Quality",
      image: "/images/photo1.jpg",
      bgColor: "bg-cv-green/20",
      overlayColor: "bg-cv-green/20",
    },
    {
      title: "Espacio Público",
      description:
        "Housing Affordability, Homeownership, Gentrification and Displacement, Housing Instability, Housing Quality",
      image: "/images/photo4.jpg",
      bgColor: "bg-cv-blue/20",
      overlayColor: "bg-cv-blue/20",
    },
    {
      title: "Seguridad",
      description:
        "Housing Affordability, Homeownership, Gentrification and Displacement, Housing Instability, Housing Quality",
      image: "/images/photo2.jpg",
      bgColor: "bg-cv-purple/20",
      overlayColor: "bg-cv-purple/20",
    },
    {
      title: "Grupos poblacionales",
      description:
        "Housing Affordability, Homeownership, Gentrification and Displacement, Housing Instability, Housing Quality",
      image: "/images/photo1.jpg",
      bgColor: "bg-cv-orange/20",
      overlayColor: "bg-cv-orange/20",
    },
    {
      title: "Calidad de Vida",
      description:
        "Housing Affordability, Homeownership, Gentrification and Displacement, Housing Instability, Housing Quality",
      image: "/images/photo5.jpg",
      bgColor: "bg-cv-yellow/20",
      overlayColor: "bg-cv-yellow/20",
    },
    {
      title: "Gobernanza",
      description:
        "Housing Affordability, Homeownership, Gentrification and Displacement, Housing Instability, Housing Quality",
      image: "/images/photo4.jpg",
      bgColor: "bg-cv-teal/20",
      overlayColor: "bg-cv-teal/20",
    },
    {
      title: "Infraestructura",
      description:
        "Housing Affordability, Homeownership, Gentrification and Displacement, Housing Instability, Housing Quality",
      image: "/images/photo2.jpg",
      bgColor: "bg-gray-400/20",
      overlayColor: "bg-gray-400/20",
    },
  ];

  return (
    <main className="bg-white min-h-screen max-w-[1200px] mx-auto">
      {/* Header */}
      <header className="px-10 py-6 flex gap-10 items-center justify-start">
        <Link
          href="/"
          className="font-semibold text-xl text-black hover:text-black/70 transition-colors"
        >
          Logo
        </Link>
        <nav className="py-1 rounded">
          <span className="text-cv-pink font-bold text-xl">Temas</span>
        </nav>
      </header>

      {/* Hero Section with background */}
      <section className="relative">
        <div className="bg-cv-teal/10 px-16 py-16">
          {/* Decorative SVG */}
          <div className="absolute right-0 top-0 w-[346px] h-[346px]">
            <svg viewBox="0 0 346 346" className="w-full h-full">
              <path
                d="M173 43.25 L288.33 302.75 L57.67 302.75 Z"
                fill="none"
                stroke="rgba(85, 197, 190, 0.5)"
                strokeWidth="5"
              />
              <path
                d="M57.67 115.33 L173 201.83"
                fill="none"
                stroke="rgba(85, 197, 190, 0.5)"
                strokeWidth="5"
              />
            </svg>
          </div>

          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-cv-purple/80 mb-6">Temas</h1>

            <p className="text-xl text-black/50 leading-relaxed max-w-[712px]">
              Este portal interactivo permite navegar los temas que alegran o
              preocupan a los residentes que iciparon, dándole protagonismo a
              una multiplicidad de experiencias y vivencias, testimonios y
              anécdotas profundamente personales. ¿Lo más poderoso? podemos
              escuchar sus voces compartiéndonos sus vivencias.
            </p>
          </div>
        </div>
      </section>

      {/* Themes Grid */}
      <section className="px-14 py-12">
        <div className="grid grid-cols-2 gap-8">
          {themes.map((theme, index) => (
            <div
              key={index}
              className={`${theme.bgColor} rounded-2xl overflow-hidden backdrop-blur-md flex hover:shadow-lg transition-shadow cursor-pointer`}
              style={{ minHeight: "120px" }}
            >
              {/* Image */}
              <div className="w-[160px] h-full relative">
                <Image
                  src={theme.image}
                  alt={theme.title}
                  width={160}
                  height={120}
                  className="w-full h-full object-cover rounded-l-2xl saturate-[0] contrast-125 opacity-50"
                />
                <div
                  className={`absolute inset-0 ${theme.overlayColor} rounded-l-2xl`}
                ></div>
              </div>

              {/* Content */}
              <div className="flex-1 p-5 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-black/50 mb-2 leading-tight">
                  {theme.title}
                </h3>
                <p className="text-sm text-black/50 leading-relaxed leading-relaxed tracking-tight">
                  {theme.description}
                </p>
              </div>
            </div>
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
