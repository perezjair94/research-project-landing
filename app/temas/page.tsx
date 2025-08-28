import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Themes() {
  const themes = [
    {
      id: "convivencia",
      title: "Convivencia",
      description:
        "Hace referencia a las relaciones entre vecinos en la vida cotidiana de los conjuntos y apartamentos, incluyendo reglas de propiedad horizontal, uso de espacios comunes, manejo de mascotas, ruido y resolución de conflictos.",
      image: "/images/photo5.jpg",
      bgColor: "bg-cv-pink/20",
      overlayColor: "bg-cv-pink/20",
    },
    {
      id: "transporte",
      title: "Transporte",
      description: "Se relaciona con la conectividad de la ciudadela hacia Bogotá y Soacha, incluyendo la oferta y frecuencia de rutas, los costos de los desplazamientos, el transporte ilegal y la infraestructura vial.",
      image: "/images/photo1.jpg",
      bgColor: "bg-cv-green/20",
      overlayColor: "bg-cv-green/20",
    },
    {
      id: "seguridad",
      title: "Seguridad",
      description:
        "Abarca la percepción y las experiencias de riesgo en la ciudadela, vinculadas al consumo problemático de sustancias, robos, riñas, el rol de la policía y la seguridad privada, así como las condiciones de los bordes y fronteras de la ciudadela.",
      image: "/images/photo2.jpg",
      bgColor: "bg-cv-purple/20",
      overlayColor: "bg-cv-purple/20",
    },
    {
      id: "espacio-publico",
      title: "Espacio Público",
      description:
        "Engloba parques, zonas verdes, andenes y ciclovías, así como las múltiples actividades de recreación, deporte y encuentro que realizan allí los citaverdinos. Recoge también experiencias relacionadas con el comercio informal, el manejo de basuras, el mantenimiento y la relación con la naturaleza.",
      image: "/images/photo4.jpg",
      bgColor: "bg-cv-blue/20",
      overlayColor: "bg-cv-blue/20",
    },
    {
      id: "infraestructura",
      title: "Infraestructura",
      description:
        "Incluye reflexiones en torno a los equipamientos urbanos, las vías y los servicios que ofrece la ciudadela, así como la oferta de educación, salud, comercio formal, iluminación y servicios públicos domiciliarios.",
      image: "/images/photo2.jpg",
      bgColor: "bg-gray-400/20",
      overlayColor: "bg-gray-400/20",
    },
    {
      id: "grupos-poblacionales",
      title: "Poblaciones",
      description:
        "Hace referencia a testimonios relacionados con las experiencias, necesidades y oportunidades de los distintos grupos sociales que habitan la ciudadela.",
      image: "/images/photo1.jpg",
      bgColor: "bg-cv-orange/20",
      overlayColor: "bg-cv-orange/20",
    },
    {
      id: "gobernanza",
      title: "Gobernanza",
      description: "Se refiere a los mecanismos formales e informales de gestión y organización del territorio por parte de los diversos actores presentes en el mismo entorno a la vida comunitaria y la resolución de problemáticas locales.",
      image: "/images/photo4.jpg",
      bgColor: "bg-cv-teal/20",
      overlayColor: "bg-cv-teal/20",
    },
  ];

  return (
    <main className="bg-white min-h-screen max-w-[1200px] mx-auto">
      {/* Header */}
      <Navigation currentPage="temas" />

      {/* Hero Section with background */}
      <section className="relative">
        <div className="bg-neutral-50 px-6 py-10 lg:px-16 lg:py-2 flex gap-20 items-center justify-between">
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
      <Footer />
    </main>
  );
}
