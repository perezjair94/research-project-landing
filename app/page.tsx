"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import ThemeSelector from "./components/ThemeSelector";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch((error) => {
              console.log("Auto-play was prevented:", error);
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  return (
    <main className="bg-white min-h-screen max-w-[1200px] mx-auto">
      {/* Header */}
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <section className="px-6 lg:px-10 lg:py-12">
        <div className="relative max-w-[1250px] mx-auto">
          <div className="grid lg:grid-cols-[590px_1fr] gap-8 lg:gap-0 items-start">
            {/* Text Content */}
            <div className="relative order-2 lg:order-1">
              <h1 className="text-4xl lg:text-[55px] font-bebas text-cv-purple/80">
                Hacer la vida en Ciudad Verde
              </h1>

              <div className="bg-cv-orange/30 inline-block px-2 py-1 rounded">
                <h2 className="text-xl lg:text-2xl font-bold text-black/35  tracking-tight leading-tight">
                  Centrando las voces de los residentes a través
                  <br className="hidden md:block" />
                  de la investigación participativa
                </h2>
              </div>

              <p className="mt-8 text-md md:text-lg text-black/50 max-w-[590px] leading-relaxed">
                Basándose en dos premisas: “Nada sobre nosotros sin nosotros” y
                “Nadie se las sabe todas, pero juntos sabemos muchas cosas”, el
                grupo de residentes investigadores de Ciudad Verde se reunió en
                2023 para diseñar e implementar una investigación que diera
                luces sobre las alegrías, las tristezas, los sueños y los miedos
                de los habitantes de Ciudad Verde pasada una década después de
                la inauguración de este, el macroproyecto de vivienda social más
                grande del país.
              </p>
            </div>

            {/* Banner Illustration - positioned exactly as in Figma */}
            <div className="relative order-1 lg:order-2 lg:ml-0">
              <Image
                src="/images/banner-group.svg"
                alt="Ciudad Verde Illustration"
                width={580}
                height={493}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Large Video Section */}
      <section className="px-6 lg:px-10 py-12">
        <div className="relative w-full rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            className="w-full lg:aspect-video object-cover"
            controls
            preload="metadata"
            muted
            playsInline
          >
            <source src="/Video CV.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </section>

      {/* Workshop Photos */}
      <section className="px-6 lg:px-10 py-8">
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="aspect-[16/9] rounded-lg overflow-hidden">
            <Image
              src="/images/taller1.jpg"
              alt="Taller de investigación participativa 1"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[16/9] rounded-lg overflow-hidden">
            <Image
              src="/images/taller2.jpg"
              alt="Taller de investigación participativa 2"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[16/9] rounded-lg overflow-hidden">
            <Image
              src="/images/taller3.jpg"
              alt="Taller de investigación participativa 3"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[16/9] rounded-lg overflow-hidden">
            <Image
              src="/images/taller4.jpg"
              alt="Taller de investigación participativa 4"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Methodology Subtitle */}
        <div className="text-center mb-8">
          <p className="text-lg lg:text-xl text-black/70 font-medium leading-relaxed max-w-3xl mx-auto">
            El diseño de investigación se enfocó en dos metodologías de
            recolección de datos cualitativos.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-6 lg:px-10 lg:py-12">
        <div className="grid lg:grid-cols-5 lg:gap-20 items-center mb-12 lg:mb-0">
          <div className="space-y-6 lg:col-span-3 order-2">
            <div className="bg-cv-orange/30 inline-block p-1 rounded">
              <h3 className="text-2xl lg:text-3xl font-bebas text-cv-purple/50">
                Conversaciones cívicas que centran la
                <br className="hidden md:block" /> experiencia vivida y la
                cotidianidad
              </h3>
            </div>

            <p className="text-md lg:text-lg text-black/60 leading-relaxed">
              Los residentes investigadores convocaron y guiaron conversaciones
              con vecinos y amigos miembros de la comunidad de la ciudadela para
              hablar de sus alegrías, tristezas, esperanzas y miedos con
              relación a vivir en Ciudad Verde. Con demasiada frecuencia
              hablamos de lugares como Ciudad Verde desde afuera–sin
              preguntarnos por la perspectiva de las personas que los habitan.
              Este diseño de investigación buscó, literalmente, darle una
              plataforma a las voces de los residentes.
            </p>
          </div>

          <div className="order-1 lg:col-span-2">
            <Image
              src="/images/conversations-image.png"
              alt="Conversaciones cívicas - Ciudad Verde"
              width={320}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="px-6 lg:px-10">
        <div className="lg:pt-12">
          <div className="bg-cv-orange/30 inline-block rounded mb-8">
            <h3 className="text-2xl lg:text-3xl font-bebas text-cv-purple/50">
              Fotografías para contar historias de vida en el territorio
            </h3>
          </div>

          <p className="text-md lg:text-lg text-black/50 leading-relaxed">
            A través del método del fotorelato, los residentes investigadores
            convocaron y guiaron a sus vecinos y amigos a documentar sus
            experiencias y percepciones de la ciudadela haciendo uso de las
            cámaras de sus teléfonos celulares. Estos registros, acompañados de
            las voces de los y las fotógrafas, nos permiten visualizar
            íntimamente todo aquello de la ciudadela que es significativo para
            los habitantes a la hora de reflexionar sobre la experiencia de vida
            que han tenido en Ciudad Verde.
          </p>
        </div>

        {/* Fotorelatos Examples */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8 mt-8">
          <div className="w-full h-60 lg:h-80 rounded-lg overflow-hidden opacity-80 relative">
            <Image
              src="/images/Fotografia1_Geraldin_rafael (1).jpeg"
              alt="Fotorelato por Geraldín y Rafael"
              width={600}
              height={400}
              className="w-full h-full object-cover contrast-110 brightness-110"
            />
            <div className="absolute inset-0 bg-cv-orange/10 rounded-lg"></div>
          </div>

          <div className="w-full h-60 lg:h-80 rounded-lg overflow-hidden opacity-80 relative">
            <Image
              src="/images/Fotografia2_Geovanny_Rafael.jpeg"
              alt="Fotorelato por Geovanny y Rafael"
              width={600}
              height={400}
              className="w-full h-full object-cover contrast-110 brightness-110"
            />
            <div className="absolute inset-0 bg-cv-orange/10 rounded-lg"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="h-60 lg:h-80 rounded-lg overflow-hidden opacity-80 relative">
            <Image
              src="/images/Fotografia3_Esmeralda_Rafael.jpeg"
              alt="Fotorelato por Esmeralda y Rafael"
              width={400}
              height={400}
              className="w-full h-full object-cover contrast-110 brightness-110"
            />
            <div className="absolute inset-0 bg-cv-orange/10 rounded-lg"></div>
          </div>
          <div className="h-60 lg:h-80 rounded-lg overflow-hidden opacity-70 relative">
            <Image
              src="/images/Fotografia5_Geraldin_rafael.jpeg"
              alt="Fotorelato por Geraldín y Rafael"
              width={400}
              height={400}
              className="w-full h-full object-cover contrast-110 brightness-110"
            />
            <div className="absolute inset-0 bg-cv-orange/10 rounded-lg"></div>
          </div>
          <div className="h-60 lg:h-80 rounded-lg overflow-hidden opacity-80 relative">
            <Image
              src="/images/Fotografia1_Oscar Rodriguez_Geral Rubio.jpg"
              alt="Fotorelato por Oscar Rodríguez y Geral Rubio"
              width={400}
              height={400}
              className="w-full h-full object-cover contrast-110 brightness-110"
            />
            <div className="absolute inset-0 bg-cv-orange/10 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Interactive Section */}
      <section className="relative bg-cv-orange/20 lg:bg-transparent flex flex-col gap-8 md:gap-0 lg:flex-row items-center my-15 overflow-hidden">
        {/* Desktop background - only visible on lg screens */}
        <div className="hidden lg:block absolute inset-0">
          <div className="relative w-full h-full">
            {/* Base background */}
            <div className="absolute inset-0 bg-cv-orange/20"></div>

            {/* Background images positioned exactly as in Figma */}
            <div
              className="absolute rounded-full overflow-hidden"
              style={{
                left: "900px",
                bottom: "14px",
                width: "125px",
                height: "125px",
              }}
            >
              <Image
                src="/images/bg-image-4.png"
                alt="Background decoration"
                width={125}
                height={125}
                className="w-full h-full object-cover opacity-60"
              />
            </div>

            <div
              className="absolute rounded-full overflow-hidden"
              style={{
                right: "51px",
                bottom: "12px",
                width: "179px",
                height: "179px",
              }}
            >
              <Image
                src="/images/bg-image-1.png"
                alt="Background decoration"
                width={179}
                height={179}
                className="w-full h-full object-cover opacity-60"
              />
            </div>

            <div
              className="absolute rounded-full overflow-hidden"
              style={{
                right: "80px",
                top: "60px",
                width: "100px",
                height: "100px",
              }}
            >
              <Image
                src="/images/bg-image-2.png"
                alt="Background decoration"
                width={116}
                height={116}
                className="w-full h-full object-cover opacity-60"
              />
            </div>

            <div
              className="absolute rounded-full overflow-hidden"
              style={{
                left: "500px",
                top: "37px",
                width: "108px",
                height: "108px",
              }}
            >
              <Image
                src="/images/bg-image-3.png"
                alt="Background decoration"
                width={108}
                height={108}
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 rounded-lg w-full relative z-10">
          <ThemeSelector />
        </div>

        <div className="flex-1 px-6 lg:px-16">
          <div className="inline-block">
            <h3 className="text-2xl lg:text-3xl font-bebas text-cv-purple/50 mb-6 lg:mb-8">
              Navegando las voces de los residentes
            </h3>
          </div>

          <p className="text-md lg:text-lg text-black/50 leading-relaxed mb-8">
            Este portal interactivo permite navegar los temas que alegran o
            preocupan a los residentes que participaron, dándole protagonismo a
            una multiplicidad de experiencias y vivencias, testimonios y
            anécdotas profundamente personales. ¿Lo más poderoso? podemos
            escuchar sus voces compartiéndonos sus vivencias.
          </p>

          <p className="text-md lg:text-lg text-black/50 leading-relaxed mb-6 lg:mb-12">
            114 residentes de Ciudad Verde centraron sus experiencias y
            perspectivas en 8 temas principales.
          </p>

          <Link
            href="/temas"
            className="text-lg lg:text-xl font-bold text-cv-pink hover:opacity-80 transition-opacity relative z-20"
          >
            <div className="flex items-center gap-3 mb-8 lg:mb-0">
              Ver temas
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-move-right-icon lucide-move-right text-cv-pink"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </div>
          </Link>
        </div>
      </section>

      {/* Questions Section */}
      <section className="px-6 lg:px-10 lg:py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bebas text-black/80 max-w-[795px] mx-auto">
            Los residentes participantes compartieron sus respuestas a las
            siguientes 5 preguntas
          </h2>
        </div>

        <div className="space-y-5 lg:space-y-7 max-w-4xl mx-auto flex flex-col justify-center text-center items-center mb-6 lg:mb-0">
          <div className="bg-cv-green/30 p-2 lg:p-3 rounded-lg">
            <p className="text-sm lg:text-md text-black/60">
              Una experiencia positiva que hayan tenido en su vida en Ciudad
              Verde que relacionen con elementos de Ciudad Verde que consideres
              que deben resaltarse sobre la urbanización&rdquo;
            </p>
          </div>

          <div className="bg-cv-orange/30 p-2 lg:p-3 rounded-lg">
            <p className="text-sm lg:text-md text-black/60">
              &ldquo;Una experiencia difícil, en las que vivir en Ciudad Verde
              haya sido una fuente de tensión, conflicto o malestar.&rdquo;
            </p>
          </div>

          <div className="bg-cv-pink/30 p-2 lg:p-3 rounded-lg">
            <p className="text-sm lg:text-md text-black/60">
              Una pregunta que harías sobre el futuro de Ciudad Verde y tu rol
              en ese futuro&rdquo;
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 items-center justify-center">
            <div className="bg-cv-yellow/30 p-2 lg:p-3 rounded-lg">
              <p className="text-sm lg:text-md text-black/60">
                &ldquo;¿Qué experiencia compartida por alguien te resonó, y por
                qué&rdquo;?
              </p>
            </div>

            <div className="bg-cv-blue/30 p-2 lg:p-3 rounded-lg">
              <p className="text-sm lg:text-md text-black/60">
                qué se lleva de esta conversación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
