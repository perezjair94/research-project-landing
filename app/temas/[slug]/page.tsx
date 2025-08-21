import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface SubTheme {
  id: string;
  title: string;
  content: string;
  image?: string;
}

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
    subThemes: SubTheme[];
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
    description:
      "La vida en comunidad y las relaciones vecinales en Ciudad Verde",
    image: "/images/photo5.jpg",
    bgColor: "bg-cv-pink/20",
    overlayColor: "bg-cv-pink/20",
    content: {
      overview:
        "En Ciudad Verde habitan miles de familias provenientes principalmente de barrios populares de Bogotá, Soacha y algunos otros municipios cercanos. Los residentes llegaron por tandas, unas más grandes que otras, conforme finalizaba la construcción de los conjuntos residenciales que componen la ciudadela. Llegaban a un barrio nuevo, cuyas características cotidianas estaban por conformarse. Muchas de las familias que llegaron a vivir a Ciudad Verde nunca habían vivido en un conjunto cerrado. Otras tantas nunca habían vivido en edificios de apartamentos. Según la caracterización liderada por la Corporación Responder, tan solo el 35% de los residentes de Ciudad Verde en 2022 habían vivido antes en propiedad horizontal.\n\nLa nueva vida en Ciudad Verde implicó para muchos, por lo tanto, la necesidad de adaptarse a las nuevas reglas del juego formales e informales de la vivienda horizontal. Ese proceso de adaptación no ha sido necesariamente fácil, generando, en ocasiones, dinámicas conflictivas entre vecinos. Así mismo, las características físicas de los conjuntos y apartamentos, y la alta densidad poblacional de estos nuevos espacio de vivienda traen consigo retos de convivencia asociados a los usos de los espacios comunes y la proximidad de los apartamentos entre sí. Finalmente, la creciente tendencia de los propietarios a arrendar los apartamentos–para el 2022 casi el 30% de los habitantes de Ciudad Verde vivían en arriendo–resulta en una rotación alta de nuevos residentes que pueden llegar a mejorar o disrumpir las dinámicas de convivencia que se han venido asentando durante los años.\n\nLos residentes participantes hacen hincapié en diferentes dinámicas o situaciones que dificultan la convivencia entre vecinos. Entre ellas se resalta el egoísmo, la falta de solidaridad y la necesidad de querer tener la razón como algunas de las causas subyacentes. Así mismo, los relatos también destacan los esfuerzos que se hacen a nivel de las instituciones relevantes, las administraciones de los conjuntos y, por supuesto, los residentes mismos por generar acuerdos y disminuir los conflictos.",
      highlights: [
        "Relaciones vecinales y apoyo mutuo",
        "Espacios compartidos y su uso",
        "Conflictos y resolución de problemas",
        "Eventos comunitarios y celebraciones",
      ],
      subThemes: [
        {
          id: "manejo-mascotas",
          title: "Manejo de mascotas y animales de compañía",
          content:
            "Según la caracterización realizada por Corporación Responder, el 51% de los residentes de Ciudad Verde en el 2022 poseían una mascota. En efecto, Maria Mercedes aprecia que la ciudadela es un lugar propicio para el encuentro entre vecinos y sus mascotas. A su vez, Andrea comparte en su fotorelato la alegría que le da caminar en compañía de su perro mientras observa las actividades deportivas que se realizan en los parques de Ciudad Verde.\n\nSin embargo, no todo es positivo. Los residentes también expresan la falta de compromiso de los dueños al recoger las heces de las mascotas. Esta situación impide hacer ejercicio o usar los espacios adecuadamente.",
          image: "/images/photo1.jpg",
        },
        {
          id: "ruido-volumen",
          title: "Ruido, música a alto volumen, horas del día",
          content:
            "La alta densidad de personas que viven en los conjuntos hace que el manejo del volumen al momento de escuchar música, mover objetos, martillar, entre otras acciones, genere molestias. Según Blanca la cercanía entre los apartamentos y el hecho de que los conjuntos tengan hasta 10 torres, cada una de 6 pisos potencia la posibilidad de oír lo que hacen los vecinos.\n\nEstos relatos complementan los hallazgos del ejercicio realizado por Corporación Responder, en donde se encontró que más del 50% de los residentes identificaron una relación entre el ruido y los problemas de convivencia en la urbanización.",
        },
        {
          id: "espacios-comunes",
          title: "Uso de espacios comunes dentro y fuera del conjunto",
          content:
            "Los espacios comunes de la ciudadela, tanto aquellas que hacen parte de los conjuntos cerrados, como aquellos que comparten todos los residentes de Ciudad Verde, brindan a sus habitantes la posibilidad de compartir con los vecinos y vivir diferentes experiencias que en su mayoría identifican como positivas. El mal uso de los espacios comunes puede generar conflictos relacionados con la convivencia.",
        },
        {
          id: "animales-abandonados",
          title: "Animales abandonados",
          content:
            "Los animales abandonados o callejeros despiertan diferentes emociones en los participantes de este ejercicio. Desde hace algunos años, la Agrupación Social Ciudad Verde adecúa espacios para los animales que habitan la calle.\n\nSin embargo, algunos residentes consideran que estos perros tienen tendencias violentas y se preguntan si es una buena idea alimentarlos y mantenerlos tan cerca de los residentes.",
        },
        {
          id: "administraciones",
          title: "Administraciones, vivienda horizontal, manejo del conjunto",
          content:
            "Vivir en propiedad horizontal cambia las dinámicas a las que estaban acostumbrados muchos de los residentes de Ciudad Verde en sus lugares de vivienda previos. El desconocimiento de los residentes sobre el funcionamiento de la gestión de la administración puede hacer que los problemas de convivencia entre residentes y las inconformidades con las administraciones surjan.",
        },
        {
          id: "solucion-conflictos",
          title: "Solución de conflictos/comunicación",
          content:
            "La caracterización adelantada por Corporación Responder encontró que tan solo el 3% de la población censada en Ciudad Verde identificó el conflicto entre vecinos como el aspecto que menos les agradaba de su lugar de vivienda.\n\nSin embargo, en las conversaciones entre residentes participantes este tema pareciera tener mayor relevancia. Los habitantes de Ciudad Verde en muchos casos tienen pocas herramientas o instancias para solucionar los conflictos que aparecen en el día a día.",
        },
      ],
      testimonials: [
        {
          name: "María Mercedes",
          quote:
            "La ciudadela es un lugar propicio para el encuentro entre vecinos y sus mascotas.",
          audio: "convivencia-maria-mercedes.mp3",
        },
        {
          name: "Blanca",
          quote:
            "La cercanía entre los apartamentos hace que se escuche todo lo que hacen los vecinos. Es el principal inconveniente en materia de convivencia.",
          audio: "convivencia-blanca.mp3",
        },
        {
          name: "Katherine",
          quote:
            "En nuestro conjunto acordaron multar a los vecinos que hicieran ruido, pero ahora quienes hacen ruido pagan para seguir con sus actividades.",
          audio: "convivencia-katherine.mp3",
        },
        {
          name: "Luz Marina",
          quote:
            "Las personas no llevan bolsas para los excrementos de las mascotas, esto hace que los parques estén sucios.",
          audio: "convivencia-luz-marina.mp3",
        },
      ],
    },
  },
  {
    id: "transporte",
    title: "Transporte",
    description: "Movilidad y conectividad desde y hacia Ciudad Verde",
    image: "/images/photo1.jpg",
    bgColor: "bg-cv-green/20",
    overlayColor: "bg-cv-green/20",
    content: {
      overview:
        "Según los resultados de la caracterización implementada por Corporación Responder, en el 2022 el 63% de habitantes de Ciudad Verde utilizaba servicio público y el 29% hacía uso del vehículo particular. El Transmilenio es el medio de transporte público habitual de las y los residentes. Si bien existen rutas y vías de acceso que conectan con Transmilenio y otros corredores viales relevantes, estas son limitadas e insuficientes; además, durante muchos años la ausencia de coordinación interinstitucional significó que no existían rutas formales de ningún tipo. Estos son los puntos centrales de los relatos y preocupaciones compartidas por los participantes, sumados a experiencias relacionadas con el mal estado de la malla vial, el tiempo en los traslados, el transporte pirata y los sobrecostos.\n\nLos tiempos de desplazamiento varían según la actividad que se realice.  En promedio, los datos indican que desplazarse al trabajo le toma más de una hora al 60% de la población. Por su parte, los desplazamientos  a sitios  de estudios oscila entre 15 a 30 minutos. En el caso de lugares de recreación, el tiempo equivale a menos de 15 minutos. Sin duda ha sido prioritario para los residentes de la ciudadela pensar en formas de conectarse con los grandes corredores de transporte público de Soacha y Bogotá.",
      highlights: [
        "Acceso a transporte público",
        "Conectividad con otras áreas de la ciudad",
        "Costos de transporte",
        "Tiempo de desplazamiento",
      ],
      subThemes: [
        {
          id: "oferta-rutas",
          title: "Oferta, horarios y frecuencias de rutas",
          content:
            "La oferta de opciones de transporte público para conectar a Ciudad Verde con los corredores viales de Soacha y Bogotá ha sido uno de los elementos más problemáticos de estos años iniciales de la ciudadela. Los citoverdinos reconocen la relativa buena ubicación geográfica de su ciudadela, pero muchos narraron historias relacionadas con la falta de rutas y horarios.",
          image: "/images/photo1.jpg",
        },
        {
          id: "costos",
          title: "Costos",
          content:
            "Los habitantes pagan entre dos o más pasajes para cada trayecto, situación distinta para quienes viven en Bogotá. Un ejemplo de ello, es lo que vive Nubia que debe pagar doble transporte al tener que tomar carro pirata para salir de la ciudadela y luego usar Transmilenio y SITP para llegar a su trabajo.",
          image: "/images/photo2.jpg",
        },
        {
          id: "transporte-pirata",
          title: "Transporte ilegal/pirata",
          content:
            "La demanda en transporte para el número de habitantes es muy alta, por ese motivo Linda debe usar carros piratas, los cuales se demoran en pasar, pero les permiten conectarse con la estación de Transmilenio de Terreros. Esta situación ha hecho que llegue tarde a su trabajo. Otros habitantes manifiestan sentirse inseguros al usar estos medios de transporte.",
          image: "/images/photo4.jpg",
        },
        {
          id: "conectividad",
          title: "Falta de conectividad",
          content:
            "Los habitantes de la ciudadela cuentan con dos conexiones viales principales para salir hacia Bogotá: la Avenida Potrero Grande, que lleva a la autopista sur y la carrera 38 que conduce a la frontera entre Ciudad Verde y Bosa San José. Algunos habitantes son activistas sociales y participan en temas de comunicación terrestre para mejorar la malla vial del tramo.",
          image: "/images/photo5.jpg",
        },
      ],
      testimonials: [
        {
          name: "Paola",
          quote:
            "Me lleva mucho tiempo salir hasta la estación Terreros al tener que tomar doble transporte.",
          audio: "transporte-paola.mp3",
        },
        {
          name: "Nubia",
          quote:
            "Debo pagar doble transporte: carro pirata para salir de la ciudadela y luego Transmilenio para llegar al trabajo.",
          audio: "transporte-nubia.mp3",
        },
        {
          name: "Linda",
          quote:
            "Uso carros piratas porque se demoran en pasar, pero me permiten conectarme con Terreros. Esto me ha hecho llegar tarde al trabajo.",
          audio: "transporte-linda.mp3",
        },
      ],
    },
  },
  {
    id: "espacio-publico",
    title: "Espacio Público",
    description:
      "Parques, plazas y áreas comunes para la recreación y encuentro",
    image: "/images/photo4.jpg",
    bgColor: "bg-cv-blue/20",
    overlayColor: "bg-cv-blue/20",
    content: {
      overview:
        "El macro proyecto ofrece diversidad de espacios de entretenimiento. Los parques y la infraestructura son algunos de los aspectos que más le agradan a los residentes con un 39% y 15% respectivamente. Los sitios que más evocaron los habitantes fueron los parques de la lectura y el Logroño por las jornadas de actividad física que se realizan.",
      highlights: [
        "Calidad y mantenimiento de parques",
        "Espacios para niños y jóvenes",
        "Áreas deportivas y recreativas",
        "Seguridad en espacios públicos",
      ],
      subThemes: [
        {
          id: "comercio-informal",
          title: "Comercio Informal",
          content:
            "Algunos citoverdinos usan las zonas comunes para generar ingresos en las principales esquinas de la ciudadela. Ofrecen en su gran mayoría hortalizas, frutas, verduras y comidas rápidas. Esta actividad genera diversas emociones entre los vecinos.",
          image: "/images/photo1.jpg",
        },
        {
          id: "areas-verdes",
          title: "Áreas verdes - parques",
          content:
            "Los espacios comunes, en su mayoría verdes, inspiran a muchos participantes. De ahí el sentido que tiene el nombre de Ciudad Verde para sus habitantes. La mayoría de citoverdinos disfrutan estar en los parques, el 39% de los encuestados afirman que estos lugares es lo que más les agrada de su lugar de vivienda.",
          image: "/images/photo4.jpg",
        },
        {
          id: "recreacion-deporte",
          title: "Recreación, deporte, actividad física",
          content:
            "Ciudad Verde es un lugar para reactivar el cuerpo por medio de actividades deportivas. Algunos habitantes como Rosa participan en las jornadas aeróbicas para el adulto mayor que se realizan dos días a la semana con horarios flexibles.",
          image: "/images/photo5.jpg",
        },
        {
          id: "mantenimiento",
          title: "Mantenimiento",
          content:
            "Los habitantes se cuestionan cómo aportar en el cuidado de la infraestructura tanto de la ciudadela como del conjunto. Algunos expresan que los equipamientos de algunos parques están dañados y que las rejas y puertas de los conjuntos son averiados intencionalmente por otros vecinos.",
          image: "/images/photo2.jpg",
        },
      ],
      testimonials: [
        {
          name: "Claribel",
          quote:
            "Vamos con la familia a hacer picnic casi todos los domingos. Las temporadas que más me gustan son agosto para elevar cometa y diciembre por el alumbrado.",
          audio: "espacio-publico-claribel.mp3",
        },
        {
          name: "Vicente",
          quote:
            "El parque de la lectura es mi lugar favorito, allí comparto un helado con mis hijos y juego con mi mascota.",
          audio: "espacio-publico-vicente.mp3",
        },
      ],
    },
  },
  {
    id: "seguridad",
    title: "Seguridad",
    description:
      "Percepción de seguridad y medidas de protección en la comunidad",
    image: "/images/photo2.jpg",
    bgColor: "bg-cv-purple/20",
    overlayColor: "bg-cv-purple/20",
    content: {
      overview:
        "La seguridad es una preocupación central para los residentes de Ciudad Verde. Las experiencias varían, pero la comunidad ha desarrollado estrategias para mejorar la seguridad colectiva.",
      highlights: [
        "Percepción de seguridad en diferentes horarios",
        "Vigilancia comunitaria",
        "Iluminación y espacios seguros",
        "Relación con las autoridades",
      ],
      subThemes: [
        {
          id: "consumo-sustancias",
          title: "Consumo de sustancias",
          content:
            "En los parques Teresa ha visto jóvenes consumir drogas, situación que le preocupa. Según la encuesta realizada a residentes la frecuencia del consumo de sustancias psicoactivas varía: 12% dice que a veces se presenta, 9% casi siempre y 5% siempre.",
          image: "/images/photo1.jpg",
        },
        {
          id: "robos",
          title: "Robos",
          content:
            "Presenciar o ser víctima de robos puede ser una experiencia bastante traumática. Mercedes vivió esto cerca de la frontera donde toma el SITP alrededor de las 4:00 am. Esta situación la dejó con una sensación de estar predispuesta a vivir algo similar.",
          image: "/images/photo2.jpg",
        },
      ],
      testimonials: [
        {
          name: "Mercedes",
          quote:
            "Vi un robo cerca de donde tomo el SITP a las 4:00 am. Huyé y corrí. Quedé con la sensación de estar predispuesta a vivir algo similar.",
          audio: "seguridad-mercedes.mp3",
        },
      ],
    },
  },
  {
    id: "grupos-poblacionales",
    title: "Grupos Poblacionales",
    description:
      "Diversidad demográfica y necesidades específicas de diferentes grupos",
    image: "/images/photo1.jpg",
    bgColor: "bg-cv-orange/20",
    overlayColor: "bg-cv-orange/20",
    content: {
      overview:
        "Ciudad Verde alberga una gran diversidad de grupos poblacionales, cada uno con necesidades y perspectivas únicas sobre la vida en la ciudadela.",
      highlights: [
        "Niños y jóvenes",
        "Adultos mayores",
        "Familias monoparentales",
        "Personas con discapacidad",
      ],
      subThemes: [
        {
          id: "jovenes",
          title: "Jóvenes",
          content:
            "La educación es uno de los principales temas de interés para este grupo poblacional. Los padres de familia mencionan la preocupación por el consumo de sustancias psicoactivas.",
          image: "/images/photo1.jpg",
        },
        {
          id: "familias",
          title: "Familias",
          content:
            "El cerro de la Chucuita es uno de los lugares más emblemáticos de la ciudadela. Las familias ven en este ambiente natural un punto de encuentro desde donde se logra divisar la ciudadela.",
          image: "/images/photo2.jpg",
        },
      ],
      testimonials: [
        {
          name: "Roberto Díaz",
          quote:
            "La diversidad de nuestra comunidad es nuestra fortaleza. Aquí conviven personas de todas las edades y backgrounds.",
        },
      ],
    },
  },
  {
    id: "calidad-de-vida",
    title: "Calidad de Vida",
    description: "Bienestar general y satisfacción con la vida en Ciudad Verde",
    image: "/images/photo5.jpg",
    bgColor: "bg-cv-yellow/20",
    overlayColor: "bg-cv-yellow/20",
    content: {
      overview:
        "La calidad de vida en Ciudad Verde abarca múltiples aspectos del bienestar de los residentes, desde la salud y educación hasta las oportunidades de desarrollo personal y comunitario.",
      highlights: [
        "Acceso a servicios de salud",
        "Oportunidades educativas",
        "Calidad del aire y ambiente",
        "Bienestar emocional y social",
      ],
      subThemes: [
        {
          id: "transicion-lugar-origen",
          title: "Transición ciudad verde - antiguo lugar de origen",
          content:
            "Llegar a Ciudad Verde para los residentes implicó un cambio en las condiciones de las viviendas, vecindarios y diario vivir. Adriana manifiesta sentirse a gusto por el acceso a infraestructura pública y nuevas oportunidades.",
          image: "/images/photo1.jpg",
        },
        {
          id: "costos-bienes-servicios",
          title: "Costos de bienes y servicios",
          content:
            "Las personas manifiestan que Ciudad Verde es un gran lugar para vivir, sin embargo los costos de los servicios y los alimentos ponen en aprieto a las familias, las cuales en su mayoría cuentan con recursos muy limitados.",
        },
      ],
      testimonials: [
        {
          name: "Elena Vargas",
          quote:
            "Vivir aquí ha significado una mejora en nuestra calidad de vida. Tenemos acceso a servicios que antes no teníamos.",
        },
      ],
    },
  },
  {
    id: "gobernanza",
    title: "Gobernanza",
    description: "Participación ciudadana y relación con las instituciones",
    image: "/images/photo4.jpg",
    bgColor: "bg-cv-teal/20",
    overlayColor: "bg-cv-teal/20",
    content: {
      overview:
        "La gobernanza en Ciudad Verde involucra la participación activa de los residentes en las decisiones que afectan su comunidad y su relación con las instituciones locales.",
      highlights: [
        "Participación en juntas de acción comunal",
        "Relación con la administración local",
        "Procesos de toma de decisiones",
        "Liderazgo comunitario",
      ],
      subThemes: [
        {
          id: "gestion-institucional",
          title: "Gestión Institucional",
          content:
            "Ciudad Verde en la actualidad cuenta con dos figuras que protegen los intereses de los habitantes: la Corporación Agrupación Social Ciudad Verde y la Junta de Acción Comunal.",
          image: "/images/photo1.jpg",
        },
      ],
      testimonials: [
        {
          name: "Miguel Castillo",
          quote:
            "Es importante que nuestra voz sea escuchada. Participamos activamente en las decisiones que afectan nuestro barrio.",
        },
      ],
    },
  },
  {
    id: "infraestructura",
    title: "Infraestructura",
    description: "Servicios públicos y infraestructura urbana de la ciudadela",
    image: "/images/photo2.jpg",
    bgColor: "bg-gray-400/20",
    overlayColor: "bg-gray-400/20",
    content: {
      overview:
        "La infraestructura de Ciudad Verde incluye todos los servicios públicos y la infraestructura urbana que sostiene la vida diaria de los residentes.",
      highlights: [
        "Servicios de agua y alcantarillado",
        "Energía eléctrica y gas",
        "Vías y accesibilidad",
        "Internet y comunicaciones",
      ],
      subThemes: [
        {
          id: "vias",
          title: "Vías",
          content:
            "La cantidad de rampas para que se desplacen las personas con movilidad reducida por los alrededores de la ciudadela son adecuadas. Las conexiones viales, señalización y ciclorrutas cumplen con las condiciones para sentirse seguro.",
          image: "/images/photo1.jpg",
        },
        {
          id: "servicios-salud",
          title: "Servicios de salud",
          content:
            "Una de las construcciones que se esperaba tener en la ciudadela es el Hospital Avidanti. Los habitantes se emocionan saber que es posible tener cerca los servicios médicos.",
          image: "/images/photo2.jpg",
        },
      ],
      testimonials: [
        {
          name: "Carmen López",
          quote:
            "La infraestructura ha mejorado considerablemente desde que llegamos. Ahora tenemos servicios más confiables.",
        },
      ],
    },
  },
];

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ThemeDetail({ params }: PageProps) {
  const { slug } = await params;
  const theme = themesData.find((t) => t.id === slug);

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

      {/* Banner Section */}
      <section className="px-6 lg:px-10 py-6 lg:py-8">
        <div className="max-w-[1184px] mx-auto">
          <div
            className={`${theme.bgColor} rounded-lg flex items-center justify-center`}
            style={{ height: "231px" }}
          >
            <h2 className="text-5xl font-bebas text-black/50">{theme.title}</h2>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-6 lg:px-16 py-12">
        <div className="max-w-4xl">
          <div className="bg-cv-orange/30 inline-block rounded mb-6">
            <h2 className="text-3xl lg:text-4xl font-bebas text-cv-purple/70">
              Resumen
            </h2>
          </div>

          <div className="text-lg text-black/60 leading-relaxed mb-8 space-y-4">
            {theme.content.overview.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Subtemas Section */}
      <section className="px-6 lg:px-16 py-12 bg-gray-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {theme.content.subThemes.map((subTheme, index) => (
              <div key={subTheme.id}>
                {/* Título en barra naranja */}
                <div className="bg-cv-orange/30 inline-block rounded px-3 py-1 mb-6">
                  <h3 className="text-xl lg:text-2xl font-bebas text-cv-purple/60">
                    {subTheme.title}
                  </h3>
                </div>

                {/* Layout principal con texto a la izquierda e imagen/iframe a la derecha */}
                <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start">
                  {/* Contenido de texto */}
                  <div className="text-base lg:text-lg text-black/70 leading-relaxed space-y-4">
                    {subTheme.content.split("\n\n").map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Columna derecha con imagen y posible iframe */}
                  <div className="space-y-4">
                    {subTheme.image && (
                      <div className="relative h-48 lg:h-56 rounded-xl overflow-hidden">
                        <Image
                          src={subTheme.image}
                          alt={subTheme.title}
                          fill
                          className="object-cover saturate-[0.7] contrast-125"
                        />
                        <div
                          className={`absolute inset-0 ${theme.overlayColor}`}
                        ></div>
                      </div>
                    )}

                    {/* Placeholder para iframe - se puede agregar contenido específico aquí */}
                    <div className="bg-gray-100 rounded-lg p-4 h-32 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">
                        Espacio para iframe
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 lg:px-16 py-12 bg-gray-50/50">
        <div className="max-w-4xl">
          <div className="bg-cv-orange/30 inline-block rounded mb-8">
            <h2 className="text-3xl lg:text-4xl font-bebas text-cv-purple/70">
              Voces de los Residentes
            </h2>
          </div>

          <div className="space-y-8">
            {theme.content.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm"
              >
                <blockquote className="text-lg lg:text-xl text-black/70 italic leading-relaxed mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <cite className="text-base font-semibold text-cv-purple/60 not-italic">
                  — {testimonial.name}
                </cite>
                {testimonial.audio && (
                  <div className="mt-4">
                    <div className="flex items-center gap-3 mb-3">
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
                        className="text-cv-pink"
                      >
                        <path d="M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
                        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        <path d="M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0" />
                      </svg>
                      <span className="text-sm font-medium text-cv-pink">
                        Escuchar testimonio completo
                      </span>
                    </div>
                    {/* <div className="bg-gray-100 rounded-lg p-2"> */}
                    {/*   <iframe */}
                    {/*     src={`/audios/${testimonial.audio}`} */}
                    {/*     width="100%" */}
                    {/*     height="50" */}
                    {/*     frameBorder="0" */}
                    {/*     className="rounded" */}
                    {/*     allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" */}
                    {/*     loading="lazy" */}
                    {/*   ></iframe> */}
                    {/* </div> */}
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
