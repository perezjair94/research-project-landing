import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white min-h-screen max-w-[1200px] mx-auto">
      {/* Header */}
      <header className="px-10 py-6 flex gap-10 items-center justify-start">
        <div className="font-semibold text-xl text-black">Logo</div>
        <nav className="py-1 rounded">
          <span className="text-cv-pink font-bold text-xl">Temas</span>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-10 py-12">
        <div className="relative">
          <h1 className="text-5xl font-extrabold text-cv-purple/80 leading-tight">
            Hacer la vida en Ciudad Verde
          </h1>

          <div className="mt-2 bg-cv-orange/30 inline-block px-2 py-1 rounded">
            <h2 className="text-2xl font-bold text-black/35 leading-normal">
              Centrando las voces de los residentes a través
              <br />
              de la investigación participativa
            </h2>
          </div>

          <p className="mt-8 text-xl text-black/50 max-w-xl leading-relaxed">
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
          <div className="absolute top-0 right-0 w-40 h-40 bg-gray-300 rounded-sm opacity-40"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-gray-300 rounded-full opacity-40"></div>
          <div className="absolute top-64 right-10 w-48 h-48 bg-gray-300 rounded-full opacity-40"></div>
        </div>
      </section>

      {/* Large Video Section */}
      <section className="px-10 py-12">
        <div className="relative w-full h-[500px] bg-cv-green/30 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-4">Video</div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-10 py-12">
        <div className="grid grid-cols-5 gap-20 items-start">
          <div className="space-y-8 col-span-3 order-2">
            <div className="bg-cv-orange/30 inline-block p-1 rounded">
              <h3 className="text-2xl font-bold text-cv-purple/50 leading-normal">
                Conversaciones cívicas que centran la
                <br />
                experiencia vivida y la cotidianidad
              </h3>
            </div>

            <p className="text-xl text-black/60 leading-relaxed">
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

          <div className="order-1 col-span-2">
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
      <section className="px-10 py-12">
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="w-full h-80 rounded-lg overflow-hidden opacity-70">
            <Image
              src="/images/photo1.jpg"
              alt="Ciudad Verde photo 1"
              width={1600}
              height={900}
              className="w-full h-full object-cover"
              style={{ backgroundColor: "rgba(253, 203, 82, 0.2)" }}
            />
          </div>

          <div className="w-full h-80 rounded-lg overflow-hidden opacity-70">
            <Image
              src="/images/photo5.jpg"
              alt="Ciudad Verde photo 5"
              width={2016}
              height={1512}
              className="w-full h-full object-cover"
              style={{ backgroundColor: "rgba(85, 197, 190, 0.2)" }}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="h-80 rounded-lg overflow-hidden opacity-70">
            <Image
              src="/images/photo2.jpg"
              alt="Ciudad Verde photo 2"
              width={2016}
              height={1134}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-80 rounded-lg overflow-hidden opacity-80">
            <Image
              src="/images/photo1.jpg"
              alt="Ciudad Verde photo 3"
              width={1600}
              height={900}
              className="w-full h-full object-cover"
              style={{ backgroundColor: "rgba(83, 81, 240, 0.2)" }}
            />
          </div>
          <div className="h-80 rounded-lg overflow-hidden opacity-80">
            <Image
              src="/images/photo4.jpg"
              alt="Ciudad Verde photo 4"
              width={1824}
              height={1368}
              className="w-full h-full object-cover"
              style={{ backgroundColor: "rgba(254, 220, 199, 0.2)" }}
            />
          </div>
        </div>

        <div className="pt-12">
          <div className="bg-cv-orange/30 inline-block rounded mb-8">
            <h3 className="text-2xl font-bold text-cv-purple/50">
              Fotografías para contar historias de vida en el territorio
            </h3>
          </div>

          <p className="text-xl text-black/50 leading-relaxed">
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
      <section className="px-10 py-12">
        <div className="bg-orange-100/20 w-full rounded-lg p-16 mb-12">
          {/* Decorative circles */}
          <div className="relative mb-16">
            <div className="absolute left-12 top-16 w-36 h-36 bg-teal-500 rounded-full"></div>
            <div className="absolute left-80 top-0 w-36 h-36 bg-teal-500 rounded-full"></div>
            <div className="absolute left-52 top-32 w-36 h-36 bg-teal-500 rounded-full"></div>
            <div className="absolute left-60 top-60 w-36 h-36 bg-teal-500 rounded-full"></div>
            <div className="absolute right-20 top-12 w-36 h-36 bg-teal-500 rounded-full"></div>
            <div className="absolute right-12 top-44 w-36 h-36 bg-teal-500 rounded-full"></div>
            <div className="absolute left-24 bottom-8 w-36 h-36 bg-teal-500 rounded-full"></div>
            <div className="absolute left-16 bottom-32 w-36 h-36 bg-teal-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-20">
          <div className="space-y-8">
            <div className="bg-yellow-100/10 inline-block px-6 py-4 rounded">
              <h3 className="text-2xl font-bold text-purple-600/50">
                Navegando las voces de los residentes
              </h3>
            </div>

            <p className="text-xl text-black/50 leading-relaxed">
              Este portal interactivo permite navegar los temas que alegran o
              preocupan a los residentes que participaron, dándole protagonismo
              a una multiplicidad de experiencias y vivencias, testimonios y
              anécdotas profundamente personales. ¿Lo más poderoso? podemos
              escuchar sus voces compartiéndonos sus vivencias.
            </p>

            <p className="text-xl text-black/50 leading-relaxed">
              88 residentes de Ciudad Verde centraron sus experiencias y
              perspectivas en 8 temas principales.
            </p>

            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-white border-2 border-pink-400 rounded flex items-center justify-center">
                <svg width="19" height="23" viewBox="0 0 19 23" fill="none">
                  <path
                    d="M5 2L17 2L17 20L12 15L7 20L7 2L5 2Z"
                    stroke="#F998B7"
                    strokeWidth="2.5"
                  />
                  <circle cx="16" r="3" fill="#F998B7" />
                  <circle
                    cx="9"
                    cy="18"
                    r="7"
                    stroke="#F998B7"
                    strokeWidth="2.5"
                    fill="none"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold text-pink-400">
                Escuchar audios
              </span>

              <div className="w-6 h-6 bg-white border-2 border-pink-400 rounded flex items-center justify-center ml-4">
                <svg width="4" height="8" viewBox="0 0 4 8" fill="none">
                  <path d="M1 1L3 4L1 7" stroke="#F998B7" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="px-10 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black/80 leading-tight max-w-2xl mx-auto">
            Los residentes participantes compartieron sus respuestas a las
            siguientes 5 preguntas
          </h2>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="bg-green-200/30 p-5 rounded-lg">
            <p className="text-xl text-black/60">
              Una experiencia positiva que hayan tenido en su vida en Ciudad
              Verde que relacionen con elementos de Ciudad Verde que consideres
              que deben resaltarse sobre la urbanización&rdquo;
            </p>
          </div>

          <div className="bg-orange-100/30 p-5 rounded-lg">
            <p className="text-xl text-black/60">
              &ldquo;Una experiencia difícil, en las que vivir en Ciudad Verde
              haya sido una fuente de tensión, conflicto o malestar.&rdquo;
            </p>
          </div>

          <div className="bg-pink-200/30 p-5 rounded-lg">
            <p className="text-xl text-black/60">
              Una pregunta que harías sobre el futuro de Ciudad Verde y tu rol
              en ese futuro&rdquo;
            </p>
          </div>

          <div className="bg-yellow-200/30 p-5 rounded-lg">
            <p className="text-xl text-black/60">
              &ldquo;¿Qué experiencia compartida por alguien te resonó, y por
              qué&rdquo;?
            </p>
          </div>

          <div className="bg-blue-200/30 p-5 rounded-lg">
            <p className="text-xl text-black/60">
              qué se lleva de esta conversación.
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
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-black/50"
          >
            <path
              d="M17.5 6.25C17.5 4.18 15.82 2.5 13.75 2.5C12.36 2.5 11.14 3.31 10.5 4.5C9.86 3.31 8.64 2.5 7.25 2.5C5.18 2.5 3.5 4.18 3.5 6.25C3.5 12.5 10.5 17.5 10.5 17.5S17.5 12.5 17.5 6.25Z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <span className="text-base font-semibold text-black/50">
            por Jair Pérez
          </span>
        </div>
      </footer>
    </main>
  );
}
