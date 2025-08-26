import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";

export default function AboutUs() {
  return (
    <main className="bg-white min-h-screen max-w-[1200px] mx-auto">
      <Navigation currentPage="nosotros" />

      {/* Hero Section */}
      <section className="px-6 lg:px-10 py-12 lg:py-16">
        <div className="text-center mb-12">
          <div className="bg-cv-orange/30 inline-block px-4 py-2 mb-6">
            <h1 className="text-4xl lg:text-6xl font-bebas text-cv-purple/80">
              Nosotros
            </h1>
          </div>
          <p className="text-xl lg:text-2xl text-black/60 max-w-2xl mx-auto leading-relaxed">
            Una investigación participativa que centra las voces de los
            residentes de Ciudad Verde
          </p>
        </div>

        {/* Main Image */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="aspect-video rounded-lg overflow-hidden relative">
            <Image
              src="/images/photo1.jpg"
              alt="Residentes investigadores de Ciudad Verde"
              width={1200}
              height={675}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-cv-orange/20 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="px-6 lg:px-16 py-12">
        <div className="max-w-4xl">
          <div className="bg-cv-pink/10 inline-block px-3 py-2 mb-8">
            <h2 className="text-3xl lg:text-4xl font-bebas text-cv-purple/70">
              El Proyecto
            </h2>
          </div>

          <div className="space-y-6 text-lg text-black/60 leading-relaxed">
            <p>
              <strong className="text-black/80">
                &ldquo;Hacer la vida en Ciudad Verde&rdquo;
              </strong>{" "}
              es una investigación participativa que surge de dos premisas
              fundamentales:
              <em className="text-cv-pink">
                &ldquo;Nada sobre nosotros sin nosotros&rdquo;
              </em>{" "}
              y{" "}
              <em className="text-cv-pink">
                &ldquo;Nadie se las sabe todas, pero juntos sabemos muchas
                cosas&rdquo;
              </em>
              .
            </p>

            <p>
              En 2023, un grupo de residentes investigadores de Ciudad Verde se
              reunió para diseñar e implementar una investigación que diera
              luces sobre las alegrías, las tristezas, los sueños y los miedos
              de los habitantes de esta ciudadela, más de una década después de
              la inauguración del macroproyecto de vivienda social más grande
              del país.
            </p>

            <p>
              Con demasiada frecuencia hablamos de lugares como Ciudad Verde
              desde afuera–sin preguntarnos por la perspectiva de las personas
              que los habitan. Este diseño de investigación buscó, literalmente,
              darle una plataforma a las voces de los residentes.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="px-6 lg:px-16 py-12 bg-cv-blue/5">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block px-3 py-2 mb-8">
            <h2 className="text-3xl lg:text-4xl font-bebas text-cv-purple/70">
              Metodología
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bebas text-cv-pink/80 mb-3">
                  Conversaciones Cívicas
                </h3>
                <p className="text-black/60 leading-relaxed">
                  Los residentes investigadores convocaron y guiaron
                  conversaciones con vecinos y amigos miembros de la comunidad
                  para hablar de sus alegrías, tristezas, esperanzas y miedos
                  con relación a vivir en Ciudad Verde.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bebas text-cv-purple/80 mb-3">
                  Fotorelatos
                </h3>
                <p className="text-black/60 leading-relaxed">
                  A través del método del fotorelato, los residentes
                  investigadores convocaron a sus vecinos para documentar sus
                  experiencias y percepciones de la ciudadela haciendo uso de
                  las cámaras de sus teléfonos celulares.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/photo4.jpg"
                alt="Metodología de investigación participativa"
                width={500}
                height={400}
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-cv-orange/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="px-6 lg:px-16 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-cv-yellow/30 inline-block px-3 py-2 mb-8">
            <h2 className="text-3xl lg:text-4xl font-bebas text-cv-purple/70">
              En Números
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bebas text-cv-pink mb-2">
                88
              </div>
              <p className="text-sm text-black/60">Residentes participantes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bebas text-cv-purple mb-2">
                8
              </div>
              <p className="text-sm text-black/60">Temas principales</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bebas text-cv-green mb-2">
                2
              </div>
              <p className="text-sm text-black/60">Metodologías empleadas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bebas text-cv-orange mb-2">
                10+
              </div>
              <p className="text-sm text-black/60">Años de historia</p>
            </div>
          </div>

          <p className="text-lg text-black/60 leading-relaxed">
            88 residentes de Ciudad Verde centraron sus experiencias y
            perspectivas en 8 temas principales, creando un rico tapiz de voces
            que documenta la experiencia vivida en esta comunidad única.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 lg:px-16 py-12 bg-cv-purple/5">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-3 py-2 mb-8">
            <h2 className="text-3xl lg:text-4xl font-bebas text-cv-purple/70">
              Residentes Investigadores
            </h2>
          </div>

          <div className="space-y-6 text-lg text-black/60 leading-relaxed mb-12">
            <p>
              Esta investigación fue posible gracias al compromiso y dedicación
              de los residentes investigadores de Ciudad Verde, quienes no solo
              participaron en el diseño de la metodología, sino que también
              lideraron las conversaciones y la recolección de testimonios de
              sus vecinos y amigos.
            </p>

            <p>
              Su conocimiento íntimo de la comunidad, combinado con su pasión
              por documentar y compartir las experiencias de vida en Ciudad
              Verde, fue fundamental para el éxito de este proyecto de
              investigación participativa.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-20 h-20 bg-cv-pink/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-cv-pink"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="font-bebas text-lg text-black/70 mb-2">
                Liderazgo Comunitario
              </h3>
              <p className="text-sm text-black/50">
                Residentes que conocen profundamente su comunidad
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-20 h-20 bg-cv-green/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-cv-green"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="font-bebas text-lg text-black/70 mb-2">
                Metodología Participativa
              </h3>
              <p className="text-sm text-black/50">
                Diseño colaborativo de herramientas de investigación
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-20 h-20 bg-cv-orange/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-cv-orange"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="font-bebas text-lg text-black/70 mb-2">
                Voces Auténticas
              </h3>
              <p className="text-sm text-black/50">
                Testimonios reales de quienes viven la experiencia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
      TEAM SECTION - TEMPORARILY HIDDEN
      To show this section again, uncomment the entire block below by removing the 
      conditional expression {false && (...)} and replacing it with just the JSX content
      */}
      {false && (
      <section className="px-6 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with themed background */}
          <div className="bg-cv-orange/30 inline-block px-3 py-2 mb-8">
            <h2 className="text-3xl lg:text-4xl font-bebas text-cv-purple/70">
              Nuestro Equipo
            </h2>
          </div>

          {/* Section Introduction */}
          <div className="text-center mb-12">
            <p className="text-lg text-black/60 leading-relaxed max-w-3xl mx-auto">
              Este proyecto fue posible gracias al trabajo colaborativo entre
              residentes investigadores, académicos, y profesionales
              comprometidos con la investigación participativa y el desarrollo
              comunitario.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bebas text-cv-pink/80 mb-8 text-center">
              Residentes Investigadores
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* María Mercedes - Community leadership and neighborhood spaces */}
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 bg-cv-pink/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-cv-pink"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-black/80 mb-2">
                  María Mercedes
                </h4>
                <p className="text-cv-pink font-medium mb-2">
                  Residente Investigadora
                </p>
                <p className="text-sm text-black/60">
                  Líder comunitaria con amplia experiencia en organización
                  vecinal y promoción de espacios de encuentro en Ciudad Verde.
                </p>
              </div>

              {/* Andrea - Photo narratives and visual documentation */}
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 bg-cv-green/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-cv-green"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-black/80 mb-2">Andrea</h4>
                <p className="text-cv-green font-medium mb-2">
                  Residente Investigadora
                </p>
                <p className="text-sm text-black/60">
                  Especialista en fotorelatos y documentación visual de
                  experiencias comunitarias. Activa promotora del bienestar
                  animal.
                </p>
              </div>

              {/* Blanca - Community coexistence and conflict resolution */}
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 bg-cv-purple/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-cv-purple"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-black/80 mb-2">Blanca</h4>
                <p className="text-cv-purple font-medium mb-2">
                  Residente Investigadora
                </p>
                <p className="text-sm text-black/60">
                  Experta en temas de convivencia y resolución de conflictos
                  vecinales. Facilitadora de conversaciones cívicas.
                </p>
              </div>

              {/* Katherine - Community governance and citizen participation */}
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 bg-cv-orange/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-cv-orange"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-black/80 mb-2">
                  Katherine
                </h4>
                <p className="text-cv-orange font-medium mb-2">
                  Residente Investigadora
                </p>
                <p className="text-sm text-black/60">
                  Investigadora enfocada en temas de gobernanza comunitaria y
                  participación ciudadana en procesos de toma de decisiones.
                </p>
              </div>

              {/* Luz Marina - Public space activism and environmental care */}
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 bg-cv-teal/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-cv-teal"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-black/80 mb-2">
                  Luz Marina
                </h4>
                <p className="text-cv-teal font-medium mb-2">
                  Residente Investigadora
                </p>
                <p className="text-sm text-black/60">
                  Activista del espacio público y defensora del cuidado
                  ambiental. Líder en iniciativas de mejoramiento de parques y
                  zonas verdes.
                </p>
              </div>

              {/* Rosa - Sports and recreational activities for elderly */}
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 bg-cv-yellow/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-cv-yellow"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-black/80 mb-2">Rosa</h4>
                <p className="text-cv-yellow font-medium mb-2">
                  Residente Investigadora
                </p>
                <p className="text-sm text-black/60">
                  Promotora de actividades deportivas y recreativas para adultos
                  mayores. Especialista en programas de bienestar comunitario.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bebas text-cv-purple/80 mb-8 text-center">
              Equipo Académico y de Apoyo
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Corporación Responder - Baseline research organization */}
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 bg-cv-purple/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-cv-purple"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-black/80 mb-2">
                  Equipo Corporación Responder
                </h4>
                <p className="text-cv-purple font-medium mb-2">
                  Investigación y Caracterización
                </p>
                <p className="text-sm text-black/60">
                  Organización responsable de la caracterización demográfica y
                  socioeconómica de Ciudad Verde que sirvió de base para este
                  proyecto.
                </p>
              </div>

              {/* Methodological Facilitators - Participatory research experts */}
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 bg-cv-pink/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-cv-pink"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-black/80 mb-2">
                  Facilitadores Metodológicos
                </h4>
                <p className="text-cv-pink font-medium mb-2">
                  Diseño Participativo
                </p>
                <p className="text-sm text-black/60">
                  Especialistas en metodologías participativas que acompañaron
                  el diseño e implementación de las herramientas de
                  investigación.
                </p>
              </div>

              {/* Jair Pérez - Web developer and digital platform creator */}
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 bg-cv-green/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-cv-green"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-black/80 mb-2">
                  Jair Pérez
                </h4>
                <p className="text-cv-green font-medium mb-2">
                  Desarrollo y Diseño Web
                </p>
                <p className="text-sm text-black/60">
                  Desarrollador responsable del diseño y construcción de esta
                  plataforma digital para la difusión de los resultados de la
                  investigación.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bebas text-cv-orange/80 mb-8 text-center">
              Organizaciones Colaboradoras
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Agrupación Social Ciudad Verde - Primary community organization */}
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-cv-orange/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-cv-orange"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h4 className="font-bold text-xl text-black/80 mb-3">
                  Agrupación Social Ciudad Verde
                </h4>
                <p className="text-sm text-black/60 leading-relaxed">
                  Organización comunitaria que representa y defiende los
                  intereses de los habitantes de Ciudad Verde, facilitando
                  espacios de participación y gestión comunitaria.
                </p>
              </div>

              {/* Junta de Acción Comunal - Formal community representation */}
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-cv-teal/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-cv-teal"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-xl text-black/80 mb-3">
                  Junta de Acción Comunal
                </h4>
                <p className="text-sm text-black/60 leading-relaxed">
                  Instancia formal de representación comunitaria que trabaja en
                  conjunto con los residentes para gestionar las necesidades y
                  proyectos de desarrollo de la ciudadela.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Call to Action */}
      <section className="px-6 lg:px-16 py-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bebas text-cv-purple/70 mb-6">
            Explora las Voces de Ciudad Verde
          </h2>
          <p className="text-lg text-black/60 mb-8 leading-relaxed">
            Descubre los 8 temas principales identificados por los residentes y
            escucha directamente sus experiencias, perspectivas y testimonios.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/temas"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cv-pink text-white font-bold rounded-lg hover:bg-cv-pink/90 transition-colors"
            >
              Ver Todos los Temas
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
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cv-purple text-cv-purple font-bold rounded-lg hover:bg-cv-purple hover:text-white transition-colors"
            >
              Volver al Inicio
            </Link>
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
