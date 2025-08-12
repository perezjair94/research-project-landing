"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";

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
      <header className="px-6 lg:px-10 py-6 flex gap-6 lg:gap-10 items-center justify-start">
        <div className="font-semibold text-lg lg:text-xl text-black">Logo</div>
        <nav className="py-1 rounded">
          <Link
            href="/temas"
            className="text-cv-pink font-bold text-lg lg:text-xl hover:text-cv-pink/80 transition-colors"
          >
            Temas
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 lg:px-10 lg:py-12">
        <div className="relative">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-cv-purple/80 leading-tight tracking-tight">
            Hacer la vida en Ciudad Verde
          </h1>

          <div className="mt-2 bg-cv-orange/30 inline-block px-2 py-1 rounded">
            <h2 className="text-xl lg:text-2xl font-bold text-black/35 leading-normal tracking-tight leading-tight">
              Centrando las voces de los residentes a través
              <br className="hidden md:block" />
              de la investigación participativa
            </h2>
          </div>

          <p className="mt-8 text-md md:text-xl text-black/50 max-w-xl leading-relaxed">
            Basándose en dos premisas: &ldquo;Nada sobre nosotros sin
            nosotros&rdquo; y &ldquo;Nadie se las sabe todas, pero juntos
            sabemos muchas cosas&rdquo;, el grupo de residentes investigadores
            de Ciudad Verde se reunió en 2023 para diseñar e implementar una
            investigación que diera luces sobre las alegrías, las tristezas, los
            sueños y los miedos de los habitantes de Ciudad Verde pasada una
            década después de la inauguración de este, el macroproyecto de
            vivienda social más grande del país.
          </p>

          {/* Decorative elements */}
          <div className="hidden lg:block">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gray-300 rounded-sm opacity-40"></div>
            <div className="absolute top-20 right-20 w-64 h-64 bg-gray-300 rounded-full opacity-40"></div>
            <div className="absolute top-64 right-10 w-48 h-48 bg-gray-300 rounded-full opacity-40"></div>
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

      {/* Content Sections */}
      <section className="px-6 lg:px-10 lg:py-12">
        <div className="grid lg:grid-cols-5 gap-20 items-start mb-12 lg:mb-0">
          <div className="space-y-8 lg:col-span-3 order-2">
            <div className="bg-cv-orange/30 inline-block p-1 rounded">
              <h3 className="text-xl lg:text-2xl font-bold text-cv-purple/50 leading-tight tracking-tight">
                Conversaciones cívicas que centran la
                <br className="hidden md:block" /> experiencia vivida y la
                cotidianidad
              </h3>
            </div>

            <p className="text-md lg:text-xl text-black/60 leading-relaxed">
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

          <div className="order-1 lg:col-span-2 hidden lg:block">
            <div className="w-96 h-96 mx-auto relative">
              <svg viewBox="0 0 346 346" className="w-full h-full">
                <path
                  d="M173 43.25 L288.33 302.75 L57.67 302.75 Z"
                  fill="none"
                  stroke="#55C5BE"
                  strokeWidth="5"
                  opacity="0.5"
                />
                <path
                  d="M57.67 115.33 L173 201.83"
                  fill="none"
                  stroke="#55C5BE"
                  strokeWidth="5"
                  opacity="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="px-6 lg:px-10 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="w-full h-60 lg:h-80 rounded-lg overflow-hidden opacity-80 relative">
            <Image
              src="/images/photo1.jpg"
              alt="Ciudad Verde photo 1"
              width={1600}
              height={900}
              className="w-full h-full object-cover contrast-125 brightness-125"
            />
            <div className="absolute inset-0 bg-cv-yellow/20 rounded-lg"></div>
          </div>

          <div className="w-full h-60 lg:h-80 rounded-lg overflow-hidden opacity-80 relative">
            <Image
              src="/images/photo4.jpg"
              alt="Ciudad Verde photo 5"
              width={2016}
              height={1512}
              className="w-full h-full object-cover contrast-125 brightness-125"
            />
            <div className="absolute inset-0 bg-cv-blue/20 rounded-lg"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="h-60 lg:h-80 rounded-lg overflow-hidden opacity-80 relative">
            <Image
              src="/images/photo2.jpg"
              alt="Ciudad Verde photo 2"
              width={2016}
              height={1134}
              className="w-full h-full object-cover contrast-125 brightness-125"
            />
            <div className="absolute inset-0 bg-cv-pink/20 rounded-lg"></div>
          </div>
          <div className="h-60 lg:h-80 rounded-lg overflow-hidden opacity-70 relative">
            <Image
              src="/images/photo1.jpg"
              alt="Ciudad Verde photo 3"
              width={1600}
              height={900}
              className="w-full h-full object-cover contrast-125 brightness-125"
            />
            <div className="absolute inset-0 bg-cv-purple/20 rounded-lg"></div>
          </div>
          <div className="h-60 lg:h-80 rounded-lg overflow-hidden opacity-80 relative">
            <Image
              src="/images/photo5.jpg"
              alt="Ciudad Verde photo 4"
              width={1824}
              height={1368}
              className="w-full h-full object-cover contrast-125 brightness-125"
            />
            <div className="absolute inset-0 bg-cv-orange/20 rounded-lg"></div>
          </div>
        </div>

        <div className="lg:pt-12">
          <div className="bg-cv-orange/30 inline-block rounded mb-8">
            <h3 className="text-xl lg:text-2xl font-bold text-cv-purple/50 tracking-tight">
              Fotografías para contar historias de vida en el territorio
            </h3>
          </div>

          <p className="text-md lg:text-xl text-black/50 leading-relaxed">
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
      </section>

      {/* Interactive Section */}
      <section className="relative bg-cv-orange/20 flex flex-col lg:flex-row items-center my-15">
        <div className="flex-1 rounded-lg ">
          {/* Decorative circles */}
          <div className="min-h-[600px]  flex items-center justify-center">
            Selector
          </div>
        </div>

        <div className="flex-1 px-6 lg:px-16">
          <div className=" inline-block">
            <h3 className="text-xl lg:text-2xl font-bold text-cv-purple/50 mb-6 lg:mb-10 tracking-tight">
              Navegando las voces de los residentes
            </h3>
          </div>

          <p className="text-md lg:text-xl text-black/50 leading-relaxed mb-8">
            Este portal interactivo permite navegar los temas que alegran o
            preocupan a los residentes que participaron, dándole protagonismo a
            una multiplicidad de experiencias y vivencias, testimonios y
            anécdotas profundamente personales. ¿Lo más poderoso? podemos
            escuchar sus voces compartiéndonos sus vivencias.
          </p>

          <p className="text-md lg:text-xl text-black/50 leading-relaxed mb-6 lg:mb-12">
            88 residentes de Ciudad Verde centraron sus experiencias y
            perspectivas en 8 temas principales.
          </p>

          <div className="flex items-center gap-3 mb-8 lg:mb-0">
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
              className="lucide lucide-file-audio-icon lucide-file-audio text-cv-pink"
            >
              <path d="M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0" />
            </svg>{" "}
            <span className="text-lg lg:text-xl font-bold text-cv-pink">
              Escuchar audios
            </span>
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
        </div>
      </section>

      {/* Questions Section */}
      <section className="px-6 lg:px-10 lg:py-12">
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-black/80 leading-tight tracking-tight max-w-[795px] mx-auto">
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
