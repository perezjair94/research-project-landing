import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import SubthemesSection from "./SubthemesSection";
import GraphicsSection from "./GraphicsSection";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

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
      link?: string;
      photoStoryUrl?: string;
      photoStoryContent?: string;
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
    bgColor: "bg-cv-pink/10",
    overlayColor: "bg-cv-pink/10",
    content: {
      overview:
        "En Ciudad Verde habitan miles de familias provenientes principalmente de barrios populares de Bogotá, Soacha y algunos otros municipios cercanos. Los residentes llegaron por tandas, unas más grandes que otras, conforme finalizaba la construcción de los conjuntos residenciales que componen la ciudadela. Llegaban a un barrio nuevo, cuyas características cotidianas estaban por conformarse. Muchas de las familias que llegaron a vivir a Ciudad Verde nunca habían vivido en un conjunto cerrado. Otras tantas nunca habían vivido en edificios de apartamentos. Según una caracterización liderada por la Corporación Responder y Amarilo en el año, tan solo el 35% de los residentes de Ciudad Verde en 2022 habían vivido antes en propiedad horizontal.\n\nLa nueva vida en Ciudad Verde implicó para muchos, por lo tanto, la necesidad de adaptarse a las nuevas reglas del juego formales e informales de la vivienda horizontal. Ese proceso de adaptación no ha sido necesariamente fácil, generando, en ocasiones, dinámicas conflictivas entre vecinos. Así mismo, las características físicas de los conjuntos y apartamentos, y la alta densidad poblacional de estos nuevos espacios de vivienda traen consigo retos de convivencia asociados a los usos de los espacios comunes y la proximidad de los apartamentos entre sí. Finalmente, la creciente tendencia de los propietarios a arrendar los apartamentos–para el 2022 casi el 30% de los habitantes de Ciudad Verde vivían en arriendo–resulta en una rotación alta de nuevos residentes que pueden llegar a mejorar o disrumpir las dinámicas de convivencia que se han venido asentando durante los años.\n\nLos residentes participantes hacen hincapié en diferentes dinámicas o situaciones que dificultan la convivencia entre vecinos. Entre ellas se resalta el egoísmo, la falta de solidaridad y la necesidad de querer tener la razón como algunas de las causas subyacentes. Así mismo, los relatos también destacan los esfuerzos que se hacen a nivel de las instituciones relevantes, las administraciones de los conjuntos y, por supuesto, los residentes mismos por generar acuerdos y disminuir los conflictos.",
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
            "En Ciudad Verde, las mascotas son una parte fundamental del día a día. En efecto, María Mercedes aprecia que la ciudadela es un lugar propicio para el encuentro entre vecinos y sus mascotas. A su vez, Andrea comparte en su fotorelato la alegría que le da caminar en compañía de su perro mientras observa las actividades deportivas que se realizan en los parques de Ciudad Verde, al igual que John, quien resalta el trabajo de la Alcaldía de Soacha en el desarrollo de las brigadas de vacunación y esterilización en los parques y/o conjuntos, ayudando a las familias que no tienen recursos a prevenir enfermedades y a animalitos desamparados.\n\nSin embargo, no todo es positivo. Los residentes también expresan la falta de compromiso de los dueños al recoger las heces de las mascotas, preocupación que resumen Luz Marina y Katherine. Ellas han visto que las personas no llevan bolsas para los excrementos, esto hace que los parques y los conjuntos estén sucios. Esta situación impide hacer ejercicio o usar los espacios adecuadamente. En efecto, los conflictos que afectan la convivencia en Ciudad Verde parecen ser motivados en gran medida por la tenencia irresponsable de las mascotas.",
          image: "/images/photo1.jpg",
        },
        {
          id: "ruido-volumen",
          title: "Ruido, música a alto volumen, horas del día",
          content:
            "La alta densidad de personas que viven en los conjuntos hace que el manejo del volumen al momento de escuchar música, mover objetos, martillar, entre otras acciones, genere molestias. Según Blanca, la cercanía entre los apartamentos y el hecho de que los conjuntos tengan hasta 10 torres, cada una de 6 pisos, potencia las molestias por ruido entre vecinos. Frente a esta problemática, Katherine comenta que en su conjunto acordaron como medida multar a los vecinos que hicieran ruido a ciertas horas, pero luego de esto se generó un efecto no deseado: quienes hacen ruido ahora pagan para poder seguir con sus actividades ruidosas, ahora de manera legítima.\n\nBlanca sugiere que este es el principal inconveniente en materia de convivencia y una de las razones por las que los dueños de los apartamentos se van de Ciudad Verde y arriendan. Es un tema que ocurre a cualquier hora y condiciona la calidad de vida de las personas. Por ejemplo, Jenny trabaja de noche y en el día no puede dormir por el ruido.",
        },
        {
          id: "espacios-comunes",
          title: "Uso de espacios comunes dentro y fuera del conjunto",
          content:
            "Los espacios comunes de la ciudadela, tanto aquellos que hacen parte de los conjuntos cerrados, como aquellos que comparten todos los residentes de Ciudad Verde, brindan a sus habitantes la posibilidad de compartir con los vecinos y vivir diferentes experiencias que en su mayoría identifican como positivas. Lidia nos cuenta que puede charlar con otros al estar en un parque mientras juegan los niños y su mascota, o asistir a las clases de rumba. Otros lugares de encuentro pueden ser los gimnasios que están en los conjuntos. Estos espacios son aprovechados por personas como Ricardo para hacer ejercicio. Además, dice que allí se siente seguro, elemento fundamental para el disfrute de estos espacios.\n\nAhora bien, el mal uso de los espacios comunes puede detonar conflictos relacionados con la convivencia. Por ejemplo, Claribel indica que montar bicicleta en las ciclorrutas es agradable solo hasta cuando se topa con peatones que caminan por ella. Este tipo de encuentros hace que ella deba parar y se enfade un poco. Otro caso es el de Oscar, quien cuenta una historia de intolerancia de parte de un vecino por un malentendido que lo llevó consecuentemente a evitar la zona de la ciudadela en donde ocurrió el altercado.",
        },
        {
          id: "animales-abandonados",
          title: "Otros animales",
          content:
            "Los animales abandonados o callejeros despiertan diferentes emociones en los participantes de este ejercicio. Desde hace algunos años, la comunidad adecúa espacios para los animales que habitan la calle como María nos muestra en su fotorelato. A ella y a Elsa les tranquiliza saber que existen estos espacios para los animales en condición de abandono con casas, comida y agua para ellos. Sin embargo, Ricardo recuerda una ocasión en que casi lo ataca un grupo de perros callejeros mientras caminaba por los lados del Centro Comercial Jardín. Considera que estos perros tienen tendencias violentas y se pregunta si es una buena idea alimentarlos y mantenerlos tan cerca de los residentes por situaciones como estas.",
        },
        {
          id: "administraciones",
          title: "Administraciones, vivienda horizontal, manejo del conjunto",
          content:
            "Como se comentó anteriormente, vivir en propiedad horizontal cambia las dinámicas a las que estaban acostumbrados muchos de los residentes de Ciudad Verde en sus lugares de vivienda previos. Una perspectiva positiva es la de Marina, quien siente satisfacción de tener vivienda propia con una maravillosa vista. Para María del Pilar esto ha sido un aprendizaje, ahora debe adaptarse a un manual de convivencia y no exceder el volumen permitido. Para ella, el sentido de comunidad cambia si se compara con su barrio anterior. Allí los vecinos saldrían a barrer y cuidar del espacio público inmediato a sus hogares, aquí no se hace, aún cuando hay problemas de aseo y fallas por parte de la administración. El desconocimiento de los residentes sobre el funcionamiento de la gestión de la administración puede hacer que los problemas de convivencia entre residentes y las inconformidades con las administraciones surjan.\n\nPor otra parte, Luz Marina considera que es bueno encontrar un mecanismo que mejore la comunicación entre vecinos y Diana opina en su fotorelato que falta capacitar a los habitantes en Planes de Emergencias y Contingencias con la finalidad de prevenir incendios en espacios comunes.",
        },
        {
          id: "solucion-conflictos",
          title: "Solución de conflictos/comunicación",
          content:
            "Un agravante de los conflictos relacionados con la convivencia tiene que ver con la falta de herramientas de solución de conflictos y problemas de comunicación entre vecinos. Por ejemplo, Rebeca cuenta cómo una noche la insultó el conductor de un carro pirata, quien posteriormente la dejó lejos de su conjunto, todo porque consideró que ella no fue clara al momento de guiarlo. Otro caso de intolerancia es el narrado por Adriana, quien recibió amenazas por ser parte del consejo de la administración lo cual la motivó a poner en arriendo su apartamento e irse del conjunto en el que vivía.\n\nEstas situaciones permiten observar que los habitantes de Ciudad Verde en muchos casos tienen pocas herramientas o instancias para solucionar los conflictos que aparecen en el día a día. Identificamos durante este ejercicio que esto es motivado por factores como el desconocimiento de las normas de convivencia, la ausencia de sanciones formales y sociales ante los comportamientos que afectan la tranquilidad de la comunidad, y la ausencia de reglas del juego claras que trae la informalidad.",
        },
      ],
      testimonials: [
        {
          name: "María Mercedes",
          quote:
            "La ciudadela es un lugar propicio para el encuentro entre vecinos y sus mascotas.",
          audio: "convivencia-maria-mercedes.mp3",
          link: "https://embed.lvn.org/?hid=5259885",
        },
        {
          name: "Katherine",
          quote:
            "En nuestro conjunto acordaron multar a los vecinos que hicieran ruido, pero ahora quienes hacen ruido pagan para seguir con sus actividades.",
          audio: "convivencia-katherine.mp3",
          link: "https://embed.lvn.org/?hid=5259791",
        },
        {
          name: "Luz Marina",
          quote:
            "Las personas no llevan bolsas para los excrementos de las mascotas, esto hace que los parques estén sucios.",
          audio: "convivencia-luz-marina.mp3",
          link: "https://embed.lvn.org/?hid=5259784",
        },
        {
          name: "Andrea",
          quote:
            "Comparte la alegría que le da caminar en compañía de su perro mientras observa las actividades deportivas que se realizan en los parques de Ciudad Verde.",
          photoStoryUrl: "/images/fotorelatos/convivencia/Manejo de mascotas y animales de compañía/su fotorelato.jpg",
          photoStoryContent: "Andrea comparte en su fotorelato la alegría que le da caminar en compañía de su perro mientras observa las actividades deportivas que se realizan en los parques de Ciudad Verde, evidenciando cómo las mascotas facilitan el encuentro e integración con la comunidad."
        },
        {
          name: "John",
          quote:
            "Resalta el trabajo de la Gobernación de Soacha en el desarrollo de las brigadas de vacunación y esterilización en los parques y conjuntos, ayudando a las familias que no tienen recursos.",
          audio: "convivencia-john.mp3",
          link: "https://embed.lvn.org/?hid=5263918",
        },
        {
          name: "Blanca",
          quote:
            "La cercanía entre los apartamentos y el hecho de que los conjuntos tengan hasta 10 torres, cada una de 6 pisos potencia la posibilidad de oír lo que hacen los vecinos.",
          audio: "convivencia-blanca.mp3",
          link: "https://embed.lvn.org/?hid=5259793",
        },
        {
          name: "Katherine",
          quote:
            "En nuestro conjunto acordaron multar a los vecinos que hicieran ruido, pero ahora quienes hacen ruido pagan para seguir con sus actividades.",
          audio: "convivencia-katherine-2.mp3",
          link: "https://embed.lvn.org/?hid=5259783",
        },
        {
          name: "Blanca",
          quote:
            "Este es el principal inconveniente en materia de convivencia y una de las razones por las que los dueños de los apartamentos se van de Ciudad Verde y arriendan.",
          audio: "convivencia-blanca-2.mp3",
          link: "https://embed.lvn.org/?hid=5259793",
        },
        {
          name: "Jenny",
          quote: "Trabajo de noche y en el día no puede dormir por el ruido.",
          audio: "convivencia-jenny.mp3",
          link: "https://embed.lvn.org/?hid=5263921",
        },
        {
          name: "Lidia",
          quote:
            "Puede charlar con otros al estar en un parque mientras juegan los niños y su mascota, o asistir a las clases de rumba.",
          link: "https://embed.lvn.org/?hid=5259887",
        },
        {
          name: "Ricardo",
          quote:
            "Los gimnasios que están en los conjuntos son espacios aprovechados para hacer ejercicio; además, allí se siente seguro, elemento fundamental para el disfrute de estos espacios.",
          link: "https://embed.lvn.org/?hid=5259926",
        },
        {
          name: "Claribel",
          quote:
            "Montar bicicleta en las ciclorrutas es agradable solo hasta cuando se topa con peatones que caminan por ella. Este tipo de encuentros hace que deba parar y se enfade un poco.",
          link: "https://embed.lvn.org/?hid=5259891",
        },
        {
          name: "Oscar",
          quote:
            "Cuenta una historia de intolerancia de parte de un vecino por un malentendido que lo llevó consecuentemente a evitar la zona de la Ciudadela en donde ocurrió el altercado.",
          link: "https://embed.lvn.org/?hid=5263999",
        },
        {
          name: "María",
          quote:
            "Muestra espacios que la comunidad adecúa para los animales que habitan la calle con casas, comida y agua para ellos.",
          photoStoryUrl: "**",
          photoStoryContent: "María muestra en su fotorelato cómo la comunidad adecúa espacios para los animales que habitan la calle, proporcionándoles casas, comida y agua, evidenciando el compromiso comunitario con el bienestar animal. **"
        },
        {
          name: "Elsa",
          quote:
            "Le tranquiliza saber que existen espacios para los animales en condición de abandono con casas, comida y agua para ellos.",
          link: "https://embed.lvn.org/?hid=5259884",
        },
        {
          name: "Ricardo",
          quote:
            "Recuerda una vez que casi lo atacan unos perros callejeros mientras caminaba por los lados del Centro Comercial Jardín. Considera que estos perros tienen tendencias violentas y se pregunta si es una buena idea alimentarlos y mantenerlos tan cerca de los residentes.",
          link: "https://embed.lvn.org/?hid=5259920",
        },
        {
          name: "Marina",
          quote:
            "Siente satisfacción de tener vivienda propia con una maravillosa vista.",
          link: "https://embed.lvn.org/?hid=5263839",
        },
        {
          name: "María del Pilar",
          quote:
            "Esto ha sido un aprendizaje, ahora debe adaptarse a un manual de convivencia y no exceder el volumen permitido. Para ella, el sentido de comunidad cambia si se compara con su barrio anterior. Allí los vecinos saldrían a barrer y cuidar del espacio público inmediato a sus hogares, aquí no se hace, aún cuando hay problemas de aseo y fallas por parte de la administración.",
          link: "https://embed.lvn.org/?hid=5259952",
        },
        {
          name: "Diana",
          quote:
            "Opina que falta capacitar a los habitantes en Planes de Emergencias y Contingencias con la finalidad de prevenir incendios en espacios comunes.",
          photoStoryUrl: "**",
          photoStoryContent: "Diana opina en su fotorelato que falta capacitar a los habitantes en Planes de Emergencias y Contingencias con la finalidad de prevenir incendios en espacios comunes, destacando la importancia de la preparación comunitaria ante emergencias. **"
        },
        {
          name: "Luz Marina",
          quote:
            "Considera que es bueno encontrar un mecanismo que mejore la comunicación entre vecinos.",
          link: "https://embed.lvn.org/?hid=5259795",
        },
        {
          name: "Jeny",
          quote:
            "Comparte que a su apartamento llega el humo de la torre del lado, en donde sus vecinos fuman a pesar de saber que esto está afectando a los hijos de Jeny.",
          link: "https://embed.lvn.org/?hid=5259785",
        },
        {
          name: "Rebeca",
          quote:
            "Una noche la insultó el conductor de un carro pirata, quien posteriormente la dejó lejos de su conjunto, todo porque consideró que ella no fue clara al momento de guiarlo.",
          link: "https://embed.lvn.org/?hid=5259913",
        },
        {
          name: "Adriana",
          quote:
            "Recibió amenazas por ser parte del consejo de la administración lo cual la motivó a poner en arriendo su apartamento e irse del conjunto en el que vivía.",
          link: "https://embed.lvn.org/?hid=5260883",
        },
      ],
    },
  },
  {
    id: "transporte",
    title: "Transporte",
    description: "Movilidad y conectividad desde y hacia Ciudad Verde",
    image: "/images/photo1.jpg",
    bgColor: "bg-cv-green/10",
    overlayColor: "bg-cv-green/10",
    content: {
      overview:
        "Alrededor del 30% de las experiencias negativas relatadas por los participantes tienen que ver con el tema del transporte y la conectividad, el cual ha sido y continúa siendo un gran reto para los citaverdinos en su día a día. Si bien existen rutas y vías de acceso que conectan con Transmilenio y otros corredores viales relevantes, estas son limitadas e insuficientes; además, durante muchos años la ausencia de coordinación interinstitucional significó que no existían rutas formales de ningún tipo. Estos son los puntos centrales de los relatos y preocupaciones compartidas por los participantes sobre este tema, sumados a experiencias relacionadas con el mal estado de la malla vial, el tiempo en los traslados, el transporte pirata y los sobrecostos.\n\nLos relatos demuestran la urgencia que ha implicado para los residentes de la ciudadela pensar en formas de conectarse con los grandes corredores de transporte público de Soacha y Bogotá, principalmente para desplazarse diariamente a sus lugares de empleo. Los habitantes de la ciudadela tienen tres vías para salir hacia Bogotá. Las principales son la Avenida Potrero Grande y la Avenida Terreros que conectan con la Autopista Sur, y la carrera 38 que conduce a Bosa San José, por donde llegan a la avenida Ciudad de Cali. Para llegar a la Autopista es necesario tomar dos rutas en caso de que los buses municipales no funcionen o no aparezcan. Para salir por la conexión con Bosa se debe caminar hasta pasar la frontera municipal.\n\nLos testimonios compartidos por los participantes de este proceso visibilizan cómo la ausencia de rutas conectadas a los sistemas de transporte ha producido todo tipo de sobrecostos para los residentes, quienes resultan pagando doble, y hasta triple pasaje para llegar a sus destinos, además de los costos relacionados con el tiempo y la salud. Los limitados puntos de acceso generan preocupaciones para los habitantes y sin duda también trancones, principalmente en las horas pico. El tiempo que lleva salir o llegar a la ciudadela y el bajo control que la policía hace sobre las rutas piratas son problemáticas relacionadas que también se mencionan de manera reiterada.",
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
            "La oferta de opciones de transporte público para conectar a Ciudad Verde con los corredores viales de Soacha y Bogotá ha sido uno de los elementos más problemáticos de estos años iniciales de la ciudadela. Aunque mejor conectada a las dinámicas urbanas que otros macroproyectos de vivienda en Colombia y otros casos en Latinoamérica, la ciudadela y sus residentes sufrieron la ausencia de coordinación y planeación interinstitucional que demoró la llegada de rutas legales y formales de transporte público. Los citoverdinos reconocen la relativa buena ubicación geográfica de su ciudadela, e incluso algunos, como Alberto, destacan la buena conectividad que existe hoy en día para conectar con rutas hacia Soacha y Bogotá, pero son muchos los testimonios que visibilizan el impacto de la falta de conectividad. Paola y Nubia, por ejemplo, expresan que les lleva mucho tiempo salir hasta la estación Terreros al tener que tomar doble transporte, postura que comparte María al estar en medio de trancones que se dan en horas pico como se muestra en su fotorelato. Esta compleja situación se solucionaría con la integración eventual de la ciudadela con Transmilenio e incluso con posibles futuras alternativas férreas intermunicipales, Elsa visualiza la entrada en operación servicios alimentadores.",
          image: "/images/photo1.jpg",
        },
        {
          id: "costos",
          title: "Costos",
          content:
            "Los habitantes pagan entre dos o más pasajes para cada trayecto, generando presiones muy altas en la economía de los hogares, como lo indica María. Un ejemplo de ello es lo vivenciado por Nubia, quien debe pagar doble transporte al tener que tomar una ruta pirata para salir de la ciudadela y luego usar Transmilenio y SITP para llegar a su trabajo. Su ejemplo evidencia los costos económicos pero también de tiempo relacionados con esta ausencia de conectividad y articulación. Asumir estos costos agudiza la vulnerabilidad económica de los hogares de la ciudadela–muchos de los cuales se encuentran todavía pagando por sus apartamentos–y por lo tanto incrementa las presiones para vender e irse de la ciudadela. Adelantándose a pensar en soluciones, Conor propone en su relato que la Alcaldía y la Secretaría de Movilidad podrían generar acuerdos con los habitantes para subsidiar el transporte de Terreros a la ciudadela.",
          image: "/images/photo2.jpg",
        },
        {
          id: "transporte-pirata",
          title: "Transporte ilegal/pirata",
          content:
            "La ausencia de una oferta formal que cubra la enorme demanda por rutas y opciones de transporte resultó en la aparición de estructuras ilegales y piratas de carros transportadores. Linda nos cuenta su experiencia usando esta alternativa, la cual se demora en pasar, pero le permite conectarse con la estación de Transmilenio de Terreros. Esta situación ha resultado en frecuentes llegadas tarde a su trabajo. Otros participantes manifiestan sentirse inseguros al usar estos medios de transporte. A Rebeca la insultaron y dejaron lejos de su conjunto en la noche; Ruby escuchó comentarios negativos de cosas que han pasado en esos carros. Un día se subió en uno de ellos y el conductor tomó otra ruta, hizo que se asustara y se bajara a buscar la policía para sentirse respaldada, pero no los encontró.",
          image: "/images/photo4.jpg",
        },
        {
          id: "conectividad",
          title: "Falta de conectividad",
          content:
            "Los habitantes de la ciudadela cuentan con dos conexiones viales principales para salir hacia Bogotá: la Avenida Potrero Grande, que lleva a la autopista sur y la carrera 38 que conduce a la frontera entre Ciudad Verde y Bosa San José. El mantenimiento de estos dos puntos de acceso es una prioridad, entonces, para los residentes. Oscar participó ante las autoridades municipales y del distrito capital impulsando procesos de mejora de la malla vial del tramo que conecta con Bosa, tal como se puede observar en la foto. Aun así, Sandra enuncia que el desplazamiento hacia su trabajo por Bosa le lleva mucho tiempo, es un trayecto muy largo. La mejora en conectividad surge, por lo tanto, de manera frecuente en los sueños para el futuro de los participantes. Jairo, por su parte, menciona ser topógrafo y encontrarse dispuesto para, cuando llegue el momento, ser parte del equipo que haga la conexión de la ciudadela con Transmilenio realidad. Alfredo también sueña con un futuro en que llegue Transmilenio a Ciudad Verde.",
          image: "/images/photo5.jpg",
        },
      ],
      testimonials: [
        {
          name: "Paola",
          quote:
            "Me lleva mucho tiempo salir hasta la estación Terreros al tener que tomar doble transporte.",
          audio: "transporte-paola.mp3",
          link: "https://embed.lvn.org/?hid=5259889",
        },
        {
          name: "Nubia",
          quote:
            "Debo pagar doble transporte: carro pirata para salir de la ciudadela y luego Transmilenio para llegar al trabajo.",
          audio: "transporte-nubia.mp3",
          link: "https://embed.lvn.org/?hid=5259890",
        },
        {
          name: "Linda",
          quote:
            "Uso carros piratas porque se demoran en pasar, pero me permiten conectarme con Terreros. Esto me ha hecho llegar tarde al trabajo.",
          audio: "transporte-linda.mp3",
          link: "https://embed.lvn.org/?hid=5259891",
        },
        {
          name: "Alberto",
          quote:
            "Destaca la buena conectividad que existe hoy en día para conectar con rutas hacia Soacha y Bogotá.",
          link: "https://embed.lvn.org/?hid=5263829",
        },
        {
          name: "Paola",
          quote:
            "Les lleva mucho tiempo salir hasta la estación Terreros al tener que tomar doble transporte.",
          link: "https://embed.lvn.org/?hid=5260887",
        },
        {
          name: "Nubia",
          quote:
            "Expresan que les lleva mucho tiempo salir hasta la estación Terreros al tener que tomar doble transporte.",
          link: "https://embed.lvn.org/?hid=5259915",
        },
        {
          name: "Elsa",
          quote:
            "Visualiza la entrada en operación servicios alimentadores para solucionar la integración con Transmilenio.",
          link: "https://embed.lvn.org/?hid=5259899",
        },
        {
          name: "María",
          quote:
            "Los habitantes pagan entre dos o más pasajes para cada trayecto, generando presiones muy altas en la economía de los hogares.",
          photoStoryUrl: "/images/fotorelatos/transporte/costos/María.jpeg",
          photoStoryContent: "María documenta en su fotorelato la problemática de los costos de transporte, mostrando cómo los habitantes deben pagar múltiples pasajes para cada trayecto desde Ciudad Verde, generando presiones económicas significativas en los hogares."
        },
        {
          name: "Nubia",
          quote:
            "Debe pagar doble transporte al tener que tomar carro pirata para salir de la ciudadela y luego usar Transmilenio y SITP para llegar a su trabajo.",
          link: "https://embed.lvn.org/?hid=5259916",
        },
        {
          name: "Conor",
          quote:
            "Propone que la Alcaldía y la Secretaría de Movilidad puedan llegar acuerdos con los habitantes y así subsidiar el transporte de Terreros a la ciudadela.",
          link: "https://embed.lvn.org/?hid=5259768",
        },
        {
          name: "Linda",
          quote:
            "Debe usar carros piratas, los cuales se demoran en pasar, pero les permiten conectarse con la estación de Transmilenio de Terreros. Esta situación ha hecho que llegue tarde a su trabajo.",
          link: "https://embed.lvn.org/?hid=5261139",
        },
        {
          name: "Rebeca",
          quote:
            "La insultaron y dejaron lejos de su conjunto en la noche al usar transporte pirata.",
          link: "https://embed.lvn.org/?hid=5259913",
        },
        {
          name: "Ruby",
          quote:
            "Escuchó comentarios negativos de cosas que han pasado en esos carros. Un día se subió en uno y el conductor tomó otra ruta, hizo que se asustara y se bajara a buscar la policía para sentirse respaldada, pero no los encontró.",
          link: "https://embed.lvn.org/?hid=5259754",
        },
        {
          name: "Oscar",
          quote:
            "Participó ante las autoridades municipales y del distrito capital impulsando procesos de mejora de la malla vial del tramo que conecta con Bosa.",
          photoStoryUrl: "/images/fotorelatos/transporte/falta de conectividad/Oscar.jpg",
          photoStoryContent: "Oscar participó ante las autoridades municipales y del distrito capital impulsando procesos de mejora de la malla vial del tramo que conecta con Bosa, tal como se puede observar en la foto, evidenciando la importancia de mejorar la conectividad vial para los residentes."
        },
        {
          name: "Sandra",
          quote:
            "El desplazamiento hacia su trabajo por Bosa le lleva mucho tiempo, es un trayecto muy largo.",
          link: "https://embed.lvn.org/?hid=5259753",
        },
        {
          name: "Jairo",
          quote:
            "Ve la problemática como una oportunidad para contratar personal y construir nuevas conexiones viales. El sueño de ver Transmilenio y SITP en la ciudadela sería posible.",
          link: "https://embed.lvn.org/?hid=5259958",
        },
        {
          name: "Alfredo",
          quote:
            "Se requieren más vías de acceso, rutas alternas de transporte público y regular los carros piratas.",
          link: "https://embed.lvn.org/?hid=5259955",
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
    bgColor: "bg-cv-blue/10",
    overlayColor: "bg-cv-blue/10",
    content: {
      overview:
        "Ciudad Verde le debe su nombre a una propuesta urbanística que priorizó la disposición de espacio público en tasas muy superiores a las del municipio de Soacha y la capital vecina. Con un concepto de parques lineales y centralidades comerciales, la ciudadela se caracteriza por sus amplias zonas verdes, ciclovías y andenes. En efecto, el espacio público es, de lejos, el tema que con mayor favorabilidad destacaron los participantes de este ejercicio. El 76% de las respuestas relacionadas con este tema fueron en torno a experiencias positivas. De manera relacionada, el 25% de las experiencias positivas narradas por los participantes sucedieron en torno al espacio público que ofrece la ciudadela.\n\nUn gran número de residentes destaca las zonas verdes, las zonas de juegos para niños y niñas, las canchas de baloncesto, microfútbol y patinaje, el skate park y las plazoletas. En estos espacios, afirman, comparten tiempo con sus familias, amigos, vecinos y mascotas; allí hacen picnic y asados, juegan fútbol y cogidos, caminan y hacen deporte. En los relatos y testimonios se evidencia una asociación clara entre el acceso a este espacio público planificado y la sensación de calidad de vida. Casi el 40% de las experiencias relacionadas con el espacio público hablan también de cómo estos espacios permiten tranquilidad, paz y conexión con la naturaleza y la familia. Los residentes destacan también el acceso a la montaña y el denominado Parque de la Niebla como un elemento invaluable de la cotidianidad en la ciudadela.\n\nAhora bien, no todo es positivo. A un gran número de participantes les duele o preocupa el deterioro que evidencian en dichos espacios comunes. Esto tiene que ver, por un lado, con el mantenimiento que se realiza a las zonas verdes, las zonas de juegos, y el mobiliario público en general, el cual, comentan, es insuficiente y viene en declive en años recientes. Por otro lado, el uso del espacio público para ventas informales sobresale como un subtema de alta contención: de una parte, hay quienes reclaman estos espacios que consideran invadidos e inutilizables. De otra, hay quienes han encontrado en el espacio público de la ciudadela una oportunidad para emprender y sostener la economía de sus hogares.",
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
            "La presencia de vendedores informales en la ciudadela despierta distintas emociones entre los residentes. July manifiesta su preocupación al ver cómo este oficio es estigmatizado; cuenta que ha intentado conseguir un local formal, pero los altos costos la han llevado a continuar vendiendo en los andenes. Sandra coincide con esta apreciación y agrega que, ante la alta demanda, los centros comerciales no logran cubrir todas las necesidades de la comunidad, lo que hace que vender en el espacio público siga siendo una alternativa atractiva para muchos hogares.\n\nOtros habitantes, en cambio, expresan inconformidad frente a los impactos negativos que perciben que esta actividad genera en el espacio urbano. Edward menciona las dificultades que enfrenta al transitar con el coche de su bebé por andenes y ciclovías ocupadas, mientras que Jeovanny refuerza esta percepción a través de una fotografía tomada frente al Centro Comercial Prado Verde, en donde se observa cómo las macetas que fueron introducidas para disuadir a los vendedores son usadas, irónicamente, para ubicar productos de venta.",
          image: "/images/photo1.jpg",
        },
        {
          id: "basuras",
          title: "Basuras",
          content:
            "La mayoría de participantes destacan las buenas condiciones de aseo de la ciudadela. Por ejemplo, en su fotorelato Liliana captura a un operador de aseo barriendo una calle, y nos comparte su emoción por ver que la limpieza es una prioridad en la ciudadela. Sin embargo, se destacan algunos retos importantes en esta materia. El fotorelato de Gilbert nos presenta la problemática de la disposición incorrecta de residuos y escombros que se generan en las obras de acabados y remodelaciones de los apartamentos. Alejandra, por su parte, afirma sentirse preocupada por la creciente cantidad de basura que ve en las zonas comunes y la falta de cultura cívica de algunos de sus vecinos a la hora de arrojar basura a la calle.\n\nAhora bien, al ser preguntados por el futuro muchos participantes arrojaron ideas y preocupaciones relacionadas con mejorar esta problemática. Conor quisiera liderar la conformación de una dependencia de medio ambiente en la cual den talleres sobre cómo separar en la fuente y otros temas de educación ambiental. Por último, Lady se propone educar a sus hijos a separar correctamente los residuos de la casa y cuidar el entorno.",
          image: "/images/photo3.jpg",
        },
        {
          id: "areas-verdes",
          title: "Áreas verdes - parques",
          content:
            "Los espacios comunes, en su mayoría verdes, inspiran a Luis y muchos otros participantes. De ahí el sentido que tiene el nombre de Ciudad Verde para sus habitantes. Él indica que le gustaría que las amplias zonas verdes fueran mejor aprovechadas; se le ocurre promover jornadas de salud preventiva en el marco de actividades deportivas que integren a la comunidad. Por su parte, Alejandra quisiera participar en actividades de educación ambiental y jornadas de limpieza de las zonas verdes. En el caso de Julián, el solo caminar por los alrededores de la montaña y ver un show de motorizados (como se ve en su fotorelato) lo hace visualizarse estudiando ingeniería mecánica. Estos relatos permiten entender la importancia material y simbólica que el acceso a estos espacios tiene para los habitantes.\n\nLa mayoría de citaverdinos disfrutan estar en los parques. Un ejemplo de ello es Claribel, quien va con su familia a hacer picnic casi todos los domingos. Las temporadas que más le gustan son agosto para elevar cometa y diciembre por el alumbrado. Por otro lado, Alfredo comparte una reflexión en donde compara a Ciudad Verde con su antiguo lugar de vivienda, el barrio Cazuca; dice sentirse feliz de poder salir con sus hijos a los parques y a la montaña. Este sentimiento es compartido por Vicente en su fotorelato, enfatizando que el parque de la lectura es su lugar favorito, allí comparte un helado con sus hijos y juega con su mascota.\n\nAhora bien, como se evidenció en la sección de seguridad los parques también son territorios que generan preocupación a los participantes por dinámicas relacionadas con el consumo de sustancias y al violencia, tal como menciona Fanny, quien cuenta en horas de la tarde-noche escuchó disparos en el parque cerca del conjunto Hortensia. Esto hizo que pensara que su hijo estaba en peligro ya que estaba próximo a llegar a casa, por fortuna no le pasó nada.",
          image: "/images/photo4.jpg",
        },
        {
          id: "recreacion-deporte",
          title: "Recreación, deporte, actividad física",
          content:
            "Las actividades físicas y deportivas son una gran parte de la vida en Ciudad Verde, como se puede constatar caminando por sus calles y parques en cualquier momento del fin de semana. Una participante frecuente de estas actividades es Rosa. Nos cuenta que a ella le gustan las jornadas aeróbicas para el adulto mayor que se realizan dos días a la semana con horarios flexibles que pueden ser de 6:00 a 7:00 am o de 7:00 am a 8:00 am y son realizadas por el Instituto Municipal de Recreación y Deporte, también participa en sesiones lideradas por la Agrupación social. Algunos participantes como Armando prefieren salir a caminar por la ciudadela con los vecinos. A otros, como Yeison, les encanta participar en las actividades lúdicas que hacen las escuelas deportivas para las familias, tal como se aprecia en su fotorelato.\n\nAhora, si bien se resalta una oferta abundante de espacios de este tipo, los participantes también hacen hincapié en la necesidad de que existan más espacios y más diversidad en la oferta. Por ejemplo, a Ana Elsa le gustaría ver en el futuro un centro de cultura para que los jóvenes aprovechen su tiempo libre y Ricardo propone aumentar la oferta de actividades físicas para mejorar la calidad de vida y prevenir el sedentarismo.",
          image: "/images/photo5.jpg",
        },
        {
          id: "naturaleza",
          title: "Naturaleza",
          content:
            "Ciudad Verde es un contraste entre urbanismo planificado y la naturaleza rural adyacente, tal como se ve en la foto tomada por Karen. El acceso y la cercanía a la naturaleza es fundamental para el sentido de orgullo y pertenencia de los citaverdinos. Así lo comenta Katherine al identificar la montaña como su polo a tierra; el lugar en donde se pueden compartir y despejarse de la rutina. Ahora bien, en este contraste entre lo urbano y lo rural-natural, a Andrea Paola le preocupa el constante desarrollo urbano de la zona; para contrarrestar sus posibles impactos propone participar en campañas de arborización o de siembra que realicen en la ciudadela.",
          image: "/images/photo1.jpg",
        },
        {
          id: "mantenimiento",
          title: "Mantenimiento",
          content:
            "La alta valoración que le dan los participantes al Espacio Público suele venir acompañada de una preocupación por su mantenimiento y sostenibilidad en el tiempo. Jhon se pregunta cómo pueden los residentes cuidar que los espacios comunes dentro y fuera de los conjuntos no se dañen y desgasten. Considera que este debe ser un rol activo de los residentes y se planea cómo aportar a ese proceso de concientización. Jenny comparte esta visión al señalar el deterioro de los parques y la avería intencional de rejas y puertas en los conjuntos, situaciones que evidencian la necesidad de mayor conciencia comunitaria.",
          image: "/images/photo2.jpg",
        },
      ],
      testimonials: [
        {
          name: "Claribel",
          quote:
            "Vamos con la familia a hacer picnic casi todos los domingos. Las temporadas que más me gustan son agosto para elevar cometa y diciembre por el alumbrado.",
          audio: "espacio-publico-claribel.mp3",
          link: "https://embed.lvn.org/?hid=5259892",
        },
        {
          name: "Vicente",
          quote:
            "El parque de la lectura es mi lugar favorito, allí comparto un helado con mis hijos y juego con mi mascota.",
          audio: "espacio-publico-vicente.mp3",
          link: "https://embed.lvn.org/?hid=5259893",
          photoStoryUrl: "/images/fotorelatos/ Espacio Público/Áreas verdes - parques/Vicente.jpg",
          photoStoryContent: "Vicente comparte en su fotorelato que el parque de la lectura es su lugar favorito, donde disfruta compartiendo un helado con sus hijos y jugando con su mascota."
        },
        {
          name: "Jeovanny",
          quote:
            "Refuerza esta percepción a través de una fotografía tomada frente al Centro Comercial Prado Verde, en donde se observa cómo las macetas que fueron introducidas para disuadir a los vendedores son usadas, irónicamente, para ubicar productos de venta.",
          photoStoryUrl: "/images/fotorelatos/ Espacio Público/Comercio Informal\n/Jeovanny.jpeg",
          photoStoryContent: `Subtema: Comercio Informal

La presencia de vendedores informales en la ciudadela despierta distintas emociones entre los residentes. July manifiesta su preocupación al ver cómo este oficio es estigmatizado; cuenta que ha intentado conseguir un local formal, pero los altos costos la han llevado a continuar vendiendo en los andenes. Sandra coincide con esta apreciación y agrega que, ante la alta demanda, los centros comerciales no logran cubrir todas las necesidades de la comunidad, lo que hace que vender en el espacio público siga siendo una alternativa atractiva para muchos hogares.

Otros habitantes, en cambio, expresan inconformidad frente a los impactos negativos que perciben que esta actividad genera en el espacio urbano. Edward menciona las dificultades que enfrenta al transitar con el coche de su bebé por andenes y ciclovías ocupadas, mientras que Jeovanny refuerza esta percepción a través de una fotografía tomada frente al Centro Comercial Prado Verde, en donde se observa cómo las macetas que fueron introducidas para disuadir a los vendedores son usadas, irónicamente, para ubicar productos de venta.`
        },
        {
          name: "Liliana",
          quote:
            "Captura a un operador de aseo barriendo una calle, y nos comparte su emoción por ver que la limpieza es una prioridad en la ciudadela.",
          photoStoryUrl: "/images/fotorelatos/ Espacio Público/Basuras/Liliana.jpg",
          photoStoryContent: `Subtema: Basuras

La mayoría de participantes destacan las buenas condiciones de aseo de la ciudadela. Por ejemplo, en su fotorelato Liliana captura a un operador de aseo barriendo una calle, y nos comparte su emoción por ver que la limpieza es una prioridad en la ciudadela. Sin embargo, se destacan algunos retos importantes en esta materia.

El fotorelato de Gilbert nos presenta la problemática de la disposición incorrecta de residuos y escombros que se generan en las obras de acabados y remodelaciones de los apartamentos. Alejandra, por su parte, afirma sentirse preocupada por la creciente cantidad de basura que ve en las zonas comunes y la falta de cultura cívica de algunos de sus vecinos a la hora de arrojar basura a la calle.`
        },
        {
          name: "Gilbert",
          quote:
            "Nos presenta la problemática de la disposición incorrecta de residuos y escombros que se generan en las obras de acabados y remodelaciones de los apartamentos.",
          photoStoryUrl: "/images/fotorelatos/ Espacio Público/Basuras/Gilbert.jpeg",
          photoStoryContent: `Subtema: Basuras

El fotorelato de Gilbert nos presenta la problemática de la disposición incorrecta de residuos y escombros que se generan en las obras de acabados y remodelaciones de los apartamentos. Esta situación evidencia uno de los retos importantes que enfrenta la ciudadela en materia de aseo y manejo de residuos.

Alejandra, por su parte, afirma sentirse preocupada por la creciente cantidad de basura que ve en las zonas comunes y la falta de cultura cívica de algunos de sus vecinos a la hora de arrojar basura a la calle. Al ser preguntados por el futuro, muchos participantes arrojaron ideas relacionadas con mejorar esta problemática, como Conor, quien quisiera liderar la conformación de una dependencia de medio ambiente para dar talleres sobre separación en la fuente y educación ambiental.`
        },
        {
          name: "July",
          quote:
            "Manifiesta su preocupación al ver cómo este oficio es estigmatizado; cuenta que ha intentado conseguir un local formal, pero los altos costos la han llevado a continuar vendiendo en los andenes.",
          link: "https://embed.lvn.org/?hid=5259804",
        },
        {
          name: "Sandra",
          quote:
            "Coincide con esta apreciación y agrega que, ante la alta demanda, los centros comerciales no logran cubrir todas las necesidades de la comunidad, lo que hace que vender en el espacio público siga siendo una alternativa atractiva para muchos hogares.",
          link: "https://embed.lvn.org/?hid=5259763",
        },
        {
          name: "Edward",
          quote:
            "Menciona las dificultades que enfrenta al transitar con el coche de su bebé por andenes y ciclovías ocupadas.",
          link: "https://embed.lvn.org/?hid=5260884",
        },
        {
          name: "Julián",
          quote:
            "El solo caminar por los alrededores de la montaña y ver un show de motorizados lo hace visualizarse estudiando ingeniería mecánica.",
          photoStoryUrl: "/images/fotorelatos/ Espacio Público/Áreas verdes - parques/Julián.jpeg",
          photoStoryContent: "Julián comparte en su fotorelato cómo caminar por los alrededores de la montaña y ver un show de motorizados lo hace visualizarse estudiando ingeniería mecánica."
        },
        {
          name: "Yeison",
          quote:
            "Le encanta participar en las actividades lúdicas que hacen las escuelas deportivas para las familias.",
          photoStoryUrl: "/images/fotorelatos/ Espacio Público/Recreación, deporte, actividad física/Yeison.jpeg",
          photoStoryContent: "Yeison documenta en su fotorelato su participación en las actividades lúdicas que realizan las escuelas deportivas para las familias en Ciudad Verde."
        },
        {
          name: "Karen",
          quote:
            "Su foto muestra el contraste entre urbanismo planificado y la naturaleza rural adyacente.",
          photoStoryUrl: "/images/fotorelatos/ Espacio Público/Naturaleza/Karen.jpeg",
          photoStoryContent: "Karen captura en su fotorelato el contraste entre el urbanismo planificado de Ciudad Verde y la naturaleza rural adyacente, mostrando la importancia del acceso a la naturaleza para los citoverdinos."
        },
        {
          name: "Rosa",
          quote:
            "Le gustan las jornadas aeróbicas para el adulto mayor que se realizan dos días a la semana con horarios flexibles y también participa en sesiones lideradas por la Agrupación social.",
          link: "https://embed.lvn.org/?hid=5263832",
        },
        {
          name: "Katherine",
          quote:
            "Identifica la montaña como su polo a tierra; el lugar en donde se pueden compartir y despejarse de la rutina.",
          link: "https://embed.lvn.org/?hid=5259790",
        },
        {
          name: "Alfredo",
          quote:
            "Compara a Ciudad Verde con su antiguo lugar de vivienda, el barrio Cazuca; dice sentirse feliz de poder salir con sus hijos a los parques y a la montaña.",
          link: "https://embed.lvn.org/?hid=5259945",
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
    bgColor: "bg-cv-purple/10",
    overlayColor: "bg-cv-purple/10",
    content: {
      overview:
        "El 68% de los participantes que hablaron sobre el tema de seguridad se refirieron a experiencias negativas en torno a la misma. Asimismo, el 26% de las experiencias negativas relatadas por los participantes tuvieron que ver con este tema. Esto confirma que la seguridad es el tema que más aqueja y preocupa a los citaverdinos.\n\nEn sus relatos, los participantes identifican variables que detonan la sensación de seguridad como el consumo de sustancias psicoactivas en parques y la incidencia de robos en calles, transporte público, parques e incluso dentro de los conjuntos residenciales. Múltiples participantes encuentran la presencia de la policía y la vigilancia privada de los conjuntos insuficiente. Las riñas–muchas veces asociadas a la informalidad y la intolerancia–derivan con frecuencia en agresiones y hasta muertes en el espacio público. De igual forma, los bordes y fronteras de la ciudadela son identificados como puntos cruciales de inseguridad, especialmente en los desplazamientos desde y hacia la localidad de Bosa.\n\nLos participantes reclaman una presencia más elevada y estratégica de la fuerza pública, así como más articulación con los sistemas de vigilancia privada de los conjuntos. Así mismo, se propone trabajar en temas de resolución y desescalamiento de conflictos para evitar peleas interpersonales que deriven en situaciones de violencia.",
      highlights: [
        "Percepción de seguridad en diferentes horarios",
        "Vigilancia comunitaria",
        "Iluminación y espacios seguros",
        "Relación con las autoridades",
      ],
      subThemes: [
        {
          id: "consumo-problemático-sustancias",
          title: "Consumo problemático de sustancias",
          content:
            "De acuerdo con múltiples relatos, el consumo problemático de sustancias en espacios comunes de la ciudadela es un detonador de conflictos y percepción de inseguridad. En su fotorelato, Teresa comparte que le genera dolor ver a niños y adolescentes de muy corta edad consumiendo en los parques de la ciudadela. Una preocupación similar expresa Rosa, quien nos cuenta que en los parques cerca de los colegios en las noches ha visto grupos de hasta 8 jóvenes vendiendo y consumiendo sustancias, lo cual, percibe, expone a los estudiantes de dichas instituciones. Por su parte, Marina comenta que el mercado para este tipo de sustancias en la ciudadela es muy grande, y por lo tanto atrae a vendedores de barrios cercanos del municipio y de Bogotá. De igual manera, considera que la acción policial para regular estas ventas es insuficiente. Por otro lado, Nubia se pregunta cómo se puede pensar en programas y estrategias que ofrezcan otras opciones de recreación y ocupación a los jóvenes.",
          image: "/images/photo1.jpg",
        },
        {
          id: "robos",
          title: "Robos",
          content:
            "Presenciar o ser víctima de robos fue una constante en los relatos de experiencias negativas por parte de los participantes. Mercedes vivió esto cerca de la frontera con la localidad de Bosa, en el punto en donde toma el SITP, a alrededor de las 4:00 am. Al ver un robo huyó y corrió, lo cual la dejó con una sensación de estar predispuesta a vivir algo similar. Andrea Paola, por su parte, cuenta que pudo evitar que le robaran el celular en un bus dentro de la ciudadela, pero quedó con miedo a sufrir posibles represalias al bajarse del vehículo.\n\nA su vez, Julián comparte en su fotorelato cómo un vecino suyo fue robado al lado de su conjunto, mientras que John manifiesta su preocupación con robos a los apartamentos de su conjunto que pasan sin que nadie diga nada. Por su parte Marco Tulio expresa la inseguridad que le genera haber evidenciado el porte de armas y comportamientos violentos de parte de alguno de sus vecinos.",
          image: "/images/photo2.jpg",
        },
        {
          id: "servicios-vigilancia",
          title: "Servicios de vigilancia",
          content:
            "Ciudad Verde cuenta con vigilancia privada y policía, pero no es suficiente según Yeison, ya que en la avenida Luis Carlos Galán se presentan robos de personas y carros. Se ha denunciado la situación y sigue sucediendo. El lugar se puede identificar en la foto.",
          image: "/images/photo1.jpg",
        },
        {
          id: "rinas",
          title: "Riñas",
          content:
            "Los participantes narran momentos en los cuales los conflictos y falta de tolerancia escalan de manera violenta, desarrollándose así riñas con diversos tipos de consecuencias. Marta narra la historia de una discusión que presenció su marido por el costo de un cigarrillo que terminó en múltiples lesiones personales. Nicol, por su parte, comparte una foto del lugar en el que fue retenida violentamente junto con sus compañeros por un grupo de vendedores informales, quienes pensaban que estaban vendiendo drogas; luego de aclarar la confusión pudieron irse. Desde ese día procura no pasar por este parque.",
          image: "/images/photo4.jpg",
        },
        {
          id: "policia",
          title: "Policía",
          content:
            "Los residentes identifican insuficiente la presencia de la policía en zonas críticas como aquellas que colindan con las fronteras, al ser solitarias y propensas a situaciones de riesgo. Diana expresa por medio de su fotorelato su angustia al pensar que sus hijos deben transitar por estos lugares para llegar al conjunto sin un acompañamiento de la fuerza pública, lo cual le genera temor en ciertos horarios. Conor, en una de sus caminatas hacia la montaña para sembrar girasoles, presenció el robo a una pareja; buscó ayuda y, aunque la policía llegó, su intervención fue limitada, hecho que le produjo tristeza. Ante esto, Jairo plantea la necesidad de fortalecer la presencia policial en las fronteras y coordinar acciones con la vigilancia privada.",
          image: "/images/photo5.jpg",
        },
      ],
      testimonials: [
        {
          name: "Mercedes",
          quote:
            "Vi un robo cerca de donde tomo el SITP a las 4:00 am. Huyé y corrí. Quedé con la sensación de estar predispuesta a vivir algo similar.",
          audio: "seguridad-mercedes.mp3",
          link: "https://embed.lvn.org/?hid=5259894",
        },
        {
          name: "Teresa",
          quote:
            "Le genera dolor ver a niños y adolescentes de muy corta edad consumiendo en los parques de la ciudadela.",
          photoStoryUrl: "/images/fotorelatos/Seguridad/Consumo problemático de sustancias/Teresa.jpeg",
          photoStoryContent: "Teresa comparte en su fotorelato que le genera dolor ver a niños y adolescentes de muy corta edad consumiendo en los parques de la ciudadela."
        },
        {
          name: "Rosa",
          quote:
            "En los parques cerca de los colegios en las noches ha visto grupos de entre 6,7 y/o 8 jóvenes vendiendo y consumiendo, lo que expone a los estudiantes.",
          link: "https://embed.lvn.org/?hid=5263841",
        },
        {
          name: "Marina",
          quote:
            "Cree que la gente que viene a vender drogas es de los barrios cercanos.",
          link: "https://embed.lvn.org/?hid=5263846",
        },
        {
          name: "Nubia",
          quote:
            "Cuando los ve intenta hablar con ellos para que hagan actividades deportivas o busquen trabajo.",
          link: "https://embed.lvn.org/?hid=5259898",
        },
        {
          name: "Mercedes",
          quote:
            "Vivió un robo cerca de la frontera donde toma el SITP alrededor de las 4:00 am. Al ver un robo huyó y corrió.",
          link: "https://embed.lvn.org/?hid=5261138",
        },
        {
          name: "Andrea Paola",
          quote:
            "Evitó que le robaran el celular en un bus y quedó asustada de solo pensar que se bajara y hubieran represalias.",
          link: "https://embed.lvn.org/?hid=5263845",
        },
        {
          name: "Julián",
          quote:
            "Comparte cómo un vecino suyo fue robado al lado de su conjunto.",
          photoStoryUrl: "/images/fotorelatos/Seguridad/Robos/Julián.jpeg",
          photoStoryContent: "Julián comparte en su fotorelato cómo un vecino suyo fue robado al lado de su conjunto, evidenciando los problemas de seguridad en las inmediaciones de los conjuntos residenciales."
        },
        {
          name: "John",
          quote:
            "Manifiesta que desocupan los apartamentos y nadie dice nada.",
          link: "https://embed.lvn.org/?hid=5263922",
        },
        {
          name: "Marco Tulio",
          quote:
            "Le da inseguridad vivir en conjuntos con tantas personas que no conoce y que pueden ser agresivas. Ha tenido que presenciar conflictos con armas y ver la muerte de una persona al frente de su conjunto.",
          link: "https://embed.lvn.org/?hid=5259752",
        },
        {
          name: "Marta",
          quote:
            "Unos vendedores informales le lanzaron una silla al esposo, todo por un acto de intolerancia.",
          link: "https://embed.lvn.org/?hid=5261140",
        },
        {
          name: "Lady",
          quote:
            "Ella y sus hijos tuvieron que presenciar la muerte de alguien que robaron, esta situación los dejó marcados.",
          link: "https://embed.lvn.org/?hid=5259803",
        },
        {
          name: "Nicol",
          quote:
            "Fue retenida violentamente junto con sus compañeros por un grupo de vendedores informales que pensaban que estaban vendiendo drogas.",
          photoStoryUrl: "/images/fotorelatos/Seguridad/Riñas/Nicol.jpg",
          photoStoryContent: "Nicol comparte una foto del lugar en el que fue retenida violentamente junto con sus compañeros por un grupo de vendedores informales, quienes pensaban que estaban vendiendo drogas; luego de aclarar la confusión pudieron irse. Desde ese día procura no pasar por este parque."
        },
        {
          name: "Conor",
          quote:
            "Cuando iba a sembrar unos girasoles a la montaña se topó con un robo a una pareja. Salió a buscar ayuda, la policía llegó pero hicieron poco y eso le generó tristeza.",
          link: "https://embed.lvn.org/?hid=5259745",
        },
        {
          name: "Diana",
          quote:
            "Expresa su angustia al pensar que sus hijos deben transitar por lugares fronterizos para llegar al conjunto sin acompañamiento policial.",
          photoStoryUrl: "/images/fotorelatos/Seguridad/Policía/Diana.jpg",
          photoStoryContent: "Diana expresa por medio de su fotorelato su angustia al pensar que sus hijos deben transitar por estos lugares para llegar al conjunto sin un acompañamiento de la fuerza pública, lo cual le genera temor en ciertos horarios."
        },
        {
          name: "Jairo",
          quote:
            "Solicita mayor presencia de la policía en las fronteras y articulación con la vigilancia privada.",
          link: "https://embed.lvn.org/?hid=5259947",
        },
        {
          name: "Edward",
          quote:
            "Es importante que ayuden a organizar el uso que les están dando los vendedores informales a las zonas peatonales y ciclovías ya que desplazarse con el coche de su bebe es difícil.",
          link: "https://embed.lvn.org/?hid=5260884",
        },
      ],
    },
  },
  {
    id: "grupos-poblacionales",
    title: "Poblaciones",
    description:
      "Experiencias, expectativas y sueños de los diferentes grupos poblacionales dentro de la comunidad citaverdina",
    image: "/images/photo1.jpg",
    bgColor: "bg-cv-orange/10",
    overlayColor: "bg-cv-orange/10",
    content: {
      overview:
        "La población de Ciudad Verde es una amalgama de personas de diversas edades, regiones de orígen, e incluso nacionalidades. Las experiencias, expectativas y sueños en torno a la ciudadela de estos diferentes grupos poblacionales son igualmente diversas. Este tema busca acoger los testimonios, preocupaciones y sueños relacionados con poblaciones específicas dentro de la comunidad citaverdina. De esta manera se puede entender de manera más profunda el impacto que tiene, o puede llegar a tener, hacer la vida en Ciudad Verde para las infancias, los jóvenes, los adultos mayores y las familias.\n\nLos testimonios en torno a este tema evidencian la falta de infraestructura, equipamientos, espacios, programación y oportunidades enfocadas de manera intencional y estratégica en la niñez, los jóvenes, los adultos mayores, y el apoyo a las familias en sus labores de cuidado y sueños de vida. En general, los participantes contribuyeron con ideas y propuestas de equipamientos, programas y programación en sus reflexiones.",
      highlights: [
        "Acceso a educación y oportunidades para jóvenes",
        "Espacios familiares y de encuentro",
        "Programación para la tercera edad",
        "Cuidado y desarrollo infantil",
      ],
      subThemes: [
        {
          id: "jovenes",
          title: "Jóvenes",
          content:
            "El acceso a educación, oportunidades laborales y espacios de orientación vocacional surgen como los principales temas de interés para este grupo poblacional. Al respecto, Marina menciona el interés de que sus hijos ingresen a la universidad; sin embargo la oferta pública en el municipio es limitada y la privada es costosa en relación con los ingresos de las familias. Por su parte, Maria Fernanda, Ricardo y Lidia, todos padres de familia, fueron enfáticos en expresar su preocupación por lo que perciben como una situación creciente de consumo problemático de sustancias por parte de muchos jóvenes en la ciudadela. Ricardo añade que los programas que busquen contrarrestar dicha problemática deben enfocarse en ofrecer a los jóvenes formación y herramientas útiles para su futuro, tanto económica, como personalmente.",
          image: "/images/photo1.jpg",
        },
        {
          id: "familia",
          title: "Familia",
          content:
            "Las nociones y significados en torno al concepto de la familia son centrales en las narrativas de los residentes de Ciudad Verde. La mayoría de las experiencias y reflexiones compartidas entorno a lo familiar estuvieron relacionadas con el disfrute–en familia– de los espacios comunes de la ciudadela en los días de descanso. El cerro de la Chucuita aparece como el epicentro del compartir familiar en la ciudadela. Blanca y su hija, Paola, por ejemplo, ven en este ambiente natural un punto de encuentro desde donde se logra divisar la ciudadela y tener experiencias familiares de primer nivel. Para Patricia, este espacio permite que la actividad física en familia también se promueva. Sin duda las zonas verdes de la ciudadela, en general, han sido escenarios de celebraciones, momentos especiales y construcción de memorias entorno a lo familiar, tal como lo afirma Maria Fernanda.",
          image: "/images/photo2.jpg",
        },
        {
          id: "tercera-edad",
          title: "Tercera edad",
          content:
            "Más del 30% de los participantes de este ejercicio son adultos mayores. Algunas personas como Patricia desean contar con un espacio cultural para la tercera edad que les permita aprender, encontrarse con sus pares y no tener que desplazarse lejos. En el caso de Teresa la mayor felicidad es quedarse en casa en su cuarto de oración como se ve en la foto. Por otro lado, a Rosa le encanta salir y participar en las actividades deportivas que ocurren en diversos sitios y compartir con grupos de la tercera edad. Finalmente, Armando siente que sus caminatas son interrumpidas por vendedores ambulantes y diversas personas que impiden continuar las actividades.",
          image: "/images/photo3.jpg",
        },
        {
          id: "ninos",
          title: "Niños",
          content:
            "En la ciudadela en su gran mayoría viven familias con niños, se cuenta con Centros de Desarrollo Infantil - CDI del Bienestar Familiar que les permiten a las familias optimizar sus tiempos. Por ejemplo, July pudo emprender confeccionando uniformes para otros niños por la ayuda de los centros a sus labores cotidianas de cuidado. Otra habitante piensa con preocupación en este espacio, la foto de Liliana muestra su descontento por los graffities de la fachada.\n\nSin embargo, la capacidad de este Jardín y la de los privados no da abasto, por tal motivo Anyila le gustaría tener un rol de cuidadora con apoyo de la Alcaldía y colocar un jardín. Alternativa que para Andrea Paola es favorable al saber que generaría empleo a las mujeres.\n\nPor otro lado, los habitantes hablan de las oportunidades para la niñez. Cecilia ha tenido que pagar un 'platal' para inscribir al niño en un colegio privado. Otra mirada es la de Rebeca, quién está contenta con las actividades que realiza su hija. Estas actividades permiten reducir el sedentarismo y mejorar su estado anímico.",
          image: "/images/photo4.jpg",
        },
      ],
      testimonials: [
        {
          name: "Marina",
          quote:
            "Menciona el interés de que sus hijos ingresen a la universidad; sin embargo la oferta pública en el municipio es limitada y la privada es costosa en relación con los ingresos de las familias.",
          link: "https://embed.lvn.org/?hid=5259956",
        },
        {
          name: "Maria Fernanda",
          quote:
            "Fue enfática en expresar su preocupación por lo que percibe como una situación creciente de consumo problemático de sustancias por parte de muchos jóvenes en la ciudadela.",
          link: "https://embed.lvn.org/?hid=5259961",
        },
        {
          name: "Ricardo",
          quote:
            "Fue enfático en expresar su preocupación por el consumo problemático de sustancias. Añade que los programas deben enfocarse en ofrecer a los jóvenes formación y herramientas útiles para su futuro.",
          link: "https://embed.lvn.org/?hid=5259931",
        },
        {
          name: "Lidia",
          quote:
            "Fue enfática en expresar su preocupación por lo que percibe como una situación creciente de consumo problemático de sustancias por parte de muchos jóvenes en la ciudadela.",
          link: "https://embed.lvn.org/?hid=5259896",
        },
        {
          name: "Blanca",
          quote:
            "Ve en el cerro de la Chucuita un ambiente natural y punto de encuentro desde donde se logra divisar la ciudadela y tener experiencias familiares de primer nivel.",
          link: "https://embed.lvn.org/?hid=5259777",
        },
        {
          name: "Paola",
          quote:
            "Ve en el cerro de la Chucuita un ambiente natural y punto de encuentro desde donde se logra divisar la ciudadela y tener experiencias familiares de primer nivel.",
          link: "https://embed.lvn.org/?hid=5260878",
        },
        {
          name: "Patricia",
          quote:
            "Para ella, el cerro de la Chucuita permite que la actividad física en familia también se promueva.",
          link: "https://embed.lvn.org/?hid=5260895",
        },
        {
          name: "Maria Fernanda",
          quote:
            "Afirma que las zonas verdes de la ciudadela han sido escenarios de celebraciones, momentos especiales y construcción de memorias entorno a lo familiar.",
          link: "https://embed.lvn.org/?hid=5259943",
        },
        {
          name: "Patricia",
          quote:
            "Desea contar con un espacio cultural para la tercera edad que les permita aprender, encontrarse con sus pares y no tener que desplazarse lejos.",
          link: "https://embed.lvn.org/?hid=5261148",
        },
        {
          name: "foto",
          quote:
            "Muestra el cuarto de oración de Teresa donde encuentra su mayor felicidad.",
          photoStoryUrl: "/images/fotorelatos/Poblaciones/Familia/foto.jpeg",
          photoStoryContent: "En el caso de Teresa la mayor felicidad es quedarse en casa en su cuarto de oración como se ve en la foto."
        },
        {
          name: "Rosa",
          quote:
            "Le encanta salir y participar en las actividades deportivas que ocurren en diversos sitios y compartir con grupos de la tercera edad.",
          link: "https://embed.lvn.org/?hid=5263831",
        },
        {
          name: "July",
          quote:
            "Pudo emprender confeccionando uniformes para otros niños por la ayuda de los centros a sus labores cotidianas de cuidado.",
          link: "https://embed.lvn.org/?hid=5259801",
        },
        {
          name: "Liliana",
          quote:
            "Muestra su descontento por los graffities de la fachada del CDI.",
          photoStoryUrl: "/images/fotorelatos/Poblaciones/Niños/la foto de Liliana.jpg",
          photoStoryContent: "La foto de Liliana muestra su descontento por los graffities de la fachada del Centro de Desarrollo Infantil."
        },
        {
          name: "Anyila",
          quote:
            "Le gustaría tener un rol de cuidadora con apoyo de la Alcaldía y colocar un jardín.",
          link: "https://embed.lvn.org/?hid=5263852",
        },
        {
          name: "Andrea Paola",
          quote:
            "Ve favorable la alternativa de jardines privados al saber que generaría empleo a las mujeres.",
          link: "https://embed.lvn.org/?hid=5263859",
        },
        {
          name: "Cecilia",
          quote:
            "Ha tenido que pagar un 'platal' para inscribir al niño en un colegio privado.",
          link: "https://embed.lvn.org/?hid=5263878",
        },
        {
          name: "Rebeca",
          quote:
            "Está contenta con las actividades que realiza su hija. Estas actividades permiten reducir el sedentarismo y mejorar su estado anímico.",
          link: "https://embed.lvn.org/?hid=5259927",
        },
      ],
    },
  },
  {
    id: "calidad-de-vida",
    title: "Calidad de vida",
    description: "Engloba las percepciones y experiencias de los residentes sobre su bienestar general, satisfacción con la vida en Ciudad Verde, oportunidades de desarrollo personal y comunitario, y aspectos que contribuyen a una vida plena en la ciudadela.",
    image: "/images/photo5.jpg",
    bgColor: "bg-cv-yellow/10",
    overlayColor: "bg-cv-yellow/10",
    content: {
      overview:
        "Venir a vivir en Ciudad Verde ha significado desde el inicio transformaciones de todo tipo para sus habitantes. Los testimonios y experiencias catalogados bajo este tema están relacionados con el impacto que esos cambios han tenido para la calidad de vida de las personas, para bien y para mal. Ahora bien, es fundamental anotar que la mayoría de estas reflexiones son positivas; el 74% de los relatos asociados a la calidad de vida son experiencias positivas. En este mismo sentido, el 23% de los relatos positivos en las conversaciones tuvieron que ver con la calidad de vida.\n\nEste tema recoge los testimonios que se refieren al impacto para el hogar de transicionar a vivir en Ciudad Verde, los beneficios y retos de obtener una vivienda propia, las ventajas y dificultades en torno a hacer comunidad que conlleva este tipo de vivienda, y las nociones generales de bienestar que compartieron los participantes. El principal factor de bienestar que se evidencia está relacionado con una mejora significativa en las condiciones urbanísticas, arquitectónicas y de servicios a la que accedieron los hogares al pasarse a vivir a la ciudadela. Sin embargo, acceder a estas condiciones mejoradas también ha significado una serie de costos económicos, sociales y de tiempo para los hogares que pueden afectar su calidad de vida y en definitiva producir presiones tales que cuestionen su capacidad de continuar habitando Ciudad Verde en el futuro.",
      highlights: [
        "Transición a Ciudad Verde desde el lugar de origen",
        "Costos de bienes y servicios públicos",
        "Desarrollo del sentido de comunidad",
        "Logro de vivienda propia y estabilidad habitacional",
        "Bienestar general y oportunidades económicas",
      ],
      subThemes: [
        {
          id: "transicion-lugar-origen",
          title: "Transición a Ciudad Verde - antiguo lugar de origen",
          content:
            "Llegar a Ciudad Verde para los residentes implicó un cambio en las condiciones de las viviendas, vecindarios y diario vivir. Por ejemplo, Adriana manifiesta sentirse a gusto por el acceso a infraestructura pública y nuevas oportunidades con mejor calidad para ella y su familia. Nidia comparte esta opinión; incluso, compara las condiciones de limpieza y uso del espacio público en Bogotá; en su perspectiva, a la ciudadela le va mucho mejor que a la gran ciudad. Estela comenta que para ella su relación con Ciudad Verde fue casi un flechazo, apenas vio un video de lo que ofrecía la ciudadela, quiso ir a hacer su vida allí.",
          image: "/images/photo1.jpg",
        },
        {
          id: "costos-bienes-servicios",
          title: "Costos de bienes y servicios",
          content:
            "Hay consenso entre los participantes en que Ciudad Verde es un gran lugar en donde vivir; sin embargo, los costos de los servicios y los alimentos ponen en aprieto a las familias, las cuales en su mayoría cuentan con recursos muy limitados, aún cuando en sus recibos figure que su estrato socioeconómico es 3. Samuel, Cecilia, Estela y Laura concuerdan en lo anterior. Laura por ejemplo menciona que el alza constante de los alimentos es una realidad constante y Cecilia indica que en Bogotá los alimentos son más baratos. Samuel también afirma que pese a ser pocos en su hogar el recibo del agua o el gas llegan con tarifas altas.",
          image: "/images/photo2.jpg",
        },
        {
          id: "sentido-comunidad",
          title: "Sentido de comunidad",
          content:
            "Como ocurre en cualquier vecindario, y más en un lugar en el que todos llegan como nuevos, la construcción del sentido de comunidad es un proceso. En el caso de Ciudad Verde, Nathaly afirma que trabajar con el Comité de Convivencia y en el Consejo de Administración le ha permitido conocer a más personas y acercarse a la oferta de actividades de la ciudadela y todas las situaciones cotidianas. El espacio público, en especial las zonas verdes como la montaña es otro componente de la ciudadela que permite construir lazos y es un punto de encuentro y recarga de energía para todas y todos tal como lo dice Katherine. En contraste, para Luz Marina las basuras y las mascotas pueden ser un punto débil, alejando a vecinos y generando conflictos.",
          image: "/images/photo3.jpg",
        },
        {
          id: "vivienda-propia",
          title: "Vivienda propia - estabilidad en vivienda",
          content:
            "Para muchos llegar a Ciudad Verde representa cumplir el sueño de tener una casita propia. Marina resalta el número de habitaciones, la vista y luminosidad de su hogar. Otras personas, como Ruby, afirman que la alegría por tener vivienda propia es incomparable. En torno a este subtema Samuel propone una idea interesante: Por qué no pensar en estrategias para apoyar a quienes viven en la ciudadela en arriendo para comprar el apartamento en el que viven; 'al final todos queremos eso, ¿no? Tener casita propia,' afirma.",
          image: "/images/photo4.jpg",
        },
        {
          id: "bienestar",
          title: "Bienestar",
          content:
            "La mayoría de las reflexiones en cuanto al bienestar tienen que ver con las oportunidades económicas y laborales que la ciudadela ofrecer, o no ha logrado aún ofrecer a sus residentes. Luis afirma que se deben diversificar las actividades económicas, pues pareciera que Ciudad Verde fuera una ciudad dormitorio o un lugar con infraestructura buena pero con pocas oportunidades. Por su parte, Marta menciona que los precios de arrendamiento en la Galería son muy altos, por esta razón no alquilan y se fomentan las ventas ambulantes. July complementa que la vida de los vendedores ambulantes es compleja, más cuando no hay oportunidades y los vecinos se molestan por usar el espacio público sin tener en cuenta una mirada macro de la situación.",
          image: "/images/photo5.jpg",
        },
      ],
      testimonials: [
        {
          name: "Adriana",
          quote:
            "Manifiesta sentirse a gusto por el acceso a infraestructura pública y nuevas oportunidades con mejor calidad para ella y su familia.",
          link: "https://embed.lvn.org/?hid=5260880",
        },
        {
          name: "Nidia",
          quote:
            "Compara las condiciones de limpieza y uso del espacio público en Bogotá; en su perspectiva, a la ciudadela le va mucho mejor que a la gran ciudad.",
          link: "https://embed.lvn.org/?hid=5259911",
        },
        {
          name: "Estela",
          quote:
            "Para ella su relación con Ciudad Verde fue casi un flechazo, apenas vio un video de lo que ofrecía la ciudadela, quiso ir a hacer su vida allí.",
          link: "https://embed.lvn.org/?hid=5263872",
        },
        {
          name: "Estela",
          quote:
            "Los costos de los servicios y los alimentos ponen en aprieto a las familias.",
          link: "https://embed.lvn.org/?hid=5263880",
        },
        {
          name: "Laura",
          quote:
            "El alza constante de los alimentos es una realidad constante.",
          link: "https://embed.lvn.org/?hid=5263923",
        },
        {
          name: "Cecilia",
          quote:
            "En Bogotá los alimentos son más baratos.",
          link: "https://embed.lvn.org/?hid=5263876",
        },
        {
          name: "Samuel",
          quote:
            "Pese a ser pocos en su hogar el recibo del agua o el gas llegan con tarifas altas.",
          link: "https://embed.lvn.org/?hid=5263875",
        },
        {
          name: "Nathaly",
          quote:
            "Trabajar con el Comité de Convivencia y en el Consejo de Administración le ha permitido conocer a más personas y acercarse a la oferta de actividades de la ciudadela.",
          link: "https://embed.lvn.org/?hid=5260911",
        },
        {
          name: "Katherine",
          quote:
            "El espacio público, en especial las zonas verdes como la montaña es un punto de encuentro y recarga de energía.",
          link: "https://embed.lvn.org/?hid=5259778",
        },
        {
          name: "Luz Marina",
          quote:
            "Las basuras y las mascotas pueden ser un punto débil, alejando a vecinos y generando conflictos.",
          link: "https://embed.lvn.org/?hid=5259784",
        },
        {
          name: "Marina",
          quote:
            "Resalta el número de habitaciones, la vista y luminosidad de su hogar.",
          link: "https://embed.lvn.org/?hid=5263839",
        },
        {
          name: "Ruby",
          quote:
            "La alegría por tener vivienda propia es incomparable.",
          link: "https://embed.lvn.org/?hid=5259742",
        },
        {
          name: "Samuel",
          quote:
            "Por qué no pensar en estrategias para apoyar a quienes viven en la ciudadela en arriendo para comprar el apartamento en el que viven; 'al final todos queremos eso, ¿no? Tener casita propia'.",
          link: "https://embed.lvn.org/?hid=5263883",
        },
        {
          name: "Luis",
          quote:
            "Se deben diversificar las actividades económicas, pues pareciera que Ciudad Verde fuera una ciudad dormitorio o un lugar con infraestructura buena pero con pocas oportunidades.",
          link: "https://embed.lvn.org/?hid=5260919",
        },
        {
          name: "Marta",
          quote:
            "Los precios de arrendamiento en la Galería son muy altos, por esta razón no alquilan y se fomentan las ventas ambulantes.",
          link: "https://embed.lvn.org/?hid=5261144",
        },
        {
          name: "July",
          quote:
            "La vida de los vendedores ambulantes es compleja, más cuando no hay oportunidades y los vecinos se molestan por usar el espacio público sin tener en cuenta una mirada macro de la situación.",
          link: "https://embed.lvn.org/?hid=5259804",
        },
      ],
    },
  },
  {
    id: "gobernanza",
    title: "Gobernanza",
    description: "Participación ciudadana y relación con las instituciones",
    image: "/images/photo4.jpg",
    bgColor: "bg-cv-teal/10",
    overlayColor: "bg-cv-teal/10",
    content: {
      overview:
        "La gobernanza hace referencia a los mecanismos formales e informales de gestión y organización del territorio por parte de los diversos actores presentes en el mismo entorno a la vida comunitaria y la resolución de problemáticas locales. Los testimonios y reflexiones agrupados en este tema comentan sobre la ambigüedad de responsables de las actividades administrativas del día a día de la ciudadela, así como la falta de capacidad o presencia de entidades del gobierno municipal, la policía, bomberos, entre otros.",
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
            "Los cambios que han percibido Katherine y July en la ciudadela los califican como un sentir de empoderamiento al ver las nuevas construcciones: el hospital Avidanti, la sede del Sena y la posible universidad. Este comportamiento hace que July se cuestione ¿Cuándo Amarilo entregue los conjuntos quien va dirigir la ciudadela? Y Oscar lo complementa con la foto y la pregunta ¿Cuál va ser el papel de la Agrupación Social Ciudad Verde en el futuro? Lo dice por los nuevos actores que quieren desempeñar esa figura, probablemente en el marco de la aparición de la JAC.\n\nOtros habitantes solicitan que las autoridades del municipio estén más presentes, como es el caso de Karen que quiere saber quien administra las bibliotecas que están junto al colegio Ciudad Verde, en varias ocasiones ha ido pero ha estado cerrado, tal como se aprecia en la foto. Ella tiene la esperanza que al abrirla Ciudad Verde se convierta en el referente cultural de Soacha y la zona metropolitana de Bogotá.\n\nA su vez, Marta y Conor desean tener la posibilidad de hablar con los funcionarios para llegar acuerdos; ella trataría el tema de bajar el valor de los arriendos de la galería y él indagaría sobre la forma de colocar una dependencia de medio ambiente con la finalidad de capacitar y ser una guía en el cuidado del territorio. Por el lado de Maria del Pilar les solicitaría que generarán un mecanismo para controlar la gestión de los Administradores de los conjuntos y Samuel hablaría para replicar esta actividad 'Investigación participativa de Ciudad Verde' con más actores del municipio.",
          image: "/images/fotorelatos/Gobernanza/Gestión Institucional/Karen.png",
        },
      ],
      testimonials: [
        {
          name: "Miguel Castillo",
          quote:
            "Es importante que nuestra voz sea escuchada. Participamos activamente en las decisiones que afectan nuestro barrio.",
          link: "https://embed.lvn.org/?hid=5259897",
        },
        {
          name: "Katherine",
          quote:
            "Los cambios en la ciudadela los califico como un sentir de empoderamiento al ver las nuevas construcciones: el hospital Avidanti, la sede del Sena y la posible universidad.",
          link: "https://embed.lvn.org/?hid=5259787",
        },
        {
          name: "July",
          quote:
            "¿Cuándo Amarilo entregue los conjuntos quien va dirigir la ciudadela?",
          link: "https://embed.lvn.org/?hid=5259809",
        },
        {
          name: "Oscar",
          quote:
            "¿Cuál va ser el papel de la Agrupación Social Ciudad Verde en el futuro? Lo digo por los nuevos actores que quieren desempeñar esa figura, probablemente en el marco de la aparición de la JAC.",
          link: "https://embed.lvn.org/?hid=5259809",
        },
        {
          name: "Karen",
          quote:
            "Quiero saber quien administra las bibliotecas que están junto al colegio Ciudad Verde, en varias ocasiones he ido pero ha estado cerrado. Tengo la esperanza que al abrirla Ciudad Verde se convierta en el referente cultural de Soacha.",
          photoStoryUrl: "/images/fotorelatos/Gobernanza/Gestión Institucional/Karen.png",
          photoStoryContent: "Karen documenta las bibliotecas cerradas junto al colegio Ciudad Verde, esperando que se conviertan en un referente cultural para la zona.",
        },
        {
          name: "Marta",
          quote:
            "Deseo tener la posibilidad de hablar con los funcionarios para llegar a acuerdos sobre bajar el valor de los arriendos de la galería.",
          link: "https://embed.lvn.org/?hid=5261144",
        },
        {
          name: "Conor",
          quote:
            "Me gustaría hablar con funcionarios sobre la forma de colocar una dependencia de medio ambiente con la finalidad de capacitar y ser una guía en el cuidado del territorio.",
          link: "https://embed.lvn.org/?hid=5259761",
        },
        {
          name: "María del Pilar",
          quote:
            "Les solicitaría que generarán un mecanismo para controlar la gestión de los Administradores de los conjuntos.",
          link: "https://embed.lvn.org/?hid=5259960",
        },
        {
          name: "Samuel",
          quote:
            "Hablaría para replicar esta actividad 'Investigación participativa de Ciudad Verde' with más actores del municipio.",
          link: "https://embed.lvn.org/?hid=5263889",
        },
      ],
    },
  },
  {
    id: "infraestructura",
    title: "Infraestructura",
    description: "Servicios públicos y infraestructura urbana de la ciudadela",
    image: "/images/photo2.jpg",
    bgColor: "bg-gray-400/10",
    overlayColor: "bg-gray-400/10",
    content: {
      overview:
        "Los equipamientos y servicios urbanos dentro de la ciudadela fueron una parte fundamental de la promesa de Ciudad Verde para sus habitantes. La urbanización cuenta con corredores viales de diferentes tipologías, ciclorutas y andenes amplios, acceso universal a redes de energía, acueducto, alcantarillado y gas, seis colegios públicos y privados y un jardín infantil del ICBF. Cuenta también con una biblioteca pública del municipio de Soacha, una iglesia católica, un centro de rehabilitación integral, una estación de policía, instalaciones de la Universidad Nacional Abierta y a Distancia y el hospital privado Avidanti. Asimismo, se encuentra en construcción una sede del Sena, y se proyecta a futuro una posible sede la Universidad Minuto de Dios.\n\nEn materia comercial, los citoverdinos tienen acceso a tres centros comerciales medianos en su barrio, así como módulos de comercio y una galería comercial que ofrecen servicios y productos adicionales. Algunos conjuntos cerrados también cuentan con gimnasios y tiendas. Muchas de estas últimas han sido adecuadas por las administraciones de cada conjunto en años recientes en gran medida en respuesta a la insuficiencia de las opciones comerciales formales que ofrece la ciudadela.\n\nLos testimonios relacionados con la infraestructura evidencian el reconocimiento que hacen los citoverdinos a la importancia para su cotidianidad de tener acceso a los mencionados equipamientos, pero también evidencian una conciencia colectiva de que estos continúan siendo insuficientes para la inmensa demanda para todo tipo de bienes y servicio que involucra traer a más de 200 mil personas a vivir a un nuevo barrio. Así mismo, muchos participantes comentan que buena parte de esta infraestructura existe hoy, pero tardó años en llegar. Por último, un amplio número de testimonios demuestra preocupación por el estado de mantenimiento de las vías, el mobiliario público e incluso andenes y ciclovías. Fue tan consistente esta intranquilidad en los participantes que se observa que el 24% de las respuesta a 'Una pregunta que harías sobre el futuro de Ciudad Verde y tu rol en ese futuro' tuvieron que ver con infraestructura; el siguiente tema más comentado entorno a futuro fue Calidad de Vida con 17% de las respuestas.",
      highlights: [
        "Vías y sistema de movilidad",
        "Servicios de salud y centros médicos",
        "Educación y equipamientos educativos",
        "Servicios públicos domiciliarios",
        "Comercio formal e informal",
        "Iluminación y seguridad urbana",
      ],
      subThemes: [
        {
          id: "vias",
          title: "Vías",
          content:
            "Como parte del diseño urbanístico de Ciudad Verde, su promotor, Amarilo, estuvo encargado del diseño de la malla vial, con avenidas principales, rotondas, accesos y calles secundarias. Algunas vías fueron construidas de tal forma que en el futuro se pudieran ampliar. Participantes como Marco Tulio reconocen que se sienten seguros movilizándose por la ciudadela. Argemiro, un participante con discapacidad y movilidad reducida, dice sentirse contento por poder moverse fácilmente por toda la ciudadela gracias a las rampas que le son de gran ayuda. Luz Helena, por su parte, comparte que ha llegado tarde a su trabajo por el tráfico generado por la gran cantidad de carros parqueados sobre las vías ya que los parqueaderos de los conjuntos son insuficientes. Adriana se pregunta si en un futuro serán construidas más vías de acceso porque identifica que buena parte de los problemas de congestión están relacionados con la existencia de sólo dos puntos de entrada.\n\nMarina y July comparten su preocupación por el creciente deterioro de las vías, en gran medida por el creciente tráfico pesado que se evidencia en las mismas. Por su parte, Gilbert, resalta una preocupación similar en su fotorelato. Allí, captura el estado de la entrada principal de la ciudadela , donde las grietas comienzan a convertirse en huecos. Para él, esta situación, de no atenderse, llevará al deterioro progresivo de las calles, convirtiéndolas en espacios polvorientos y en malas condiciones para la movilidad de los residentes.",
          image: "/images/photo1.jpg",
        },
        {
          id: "servicios-salud",
          title: "Servicios de salud",
          content:
            "Varios participantes hicieron mención a la llegada del Hospital Avidanti en la ciudadela. Así lo hizo Yeison en su fotorelato. Le emociona saber que tiene acceso a servicios médicos a pocos metros de su casa. A dicho sentir se suma Ricardo, quien ve el beneficio de la calidad de vida para la comunidad; asimismo, comenta esperar que los servicios que se presenten allí sean tanto públicos como privados. Otros participantes hicieron mención a la necesidad de pensar en la salud de la comunidad desde una óptica de prevención y promoción de la actividad física. Luis propone que se realicen jornadas de salud y sensibilización en los espacios públicos de la comunidad.",
          image: "/images/photo2.jpg",
        },
        {
          id: "educacion",
          title: "Educación",
          content:
            "Con más de 50 mil hogares, Ciudad Verde contiene una gran población en edad educativa. Suplir esa demanda ha sido una prioridad tanto de la Alcaldía Municipal como de Amarilo como promotor; de ahí que la ciudadela cuente ya con 6 colegios y una sede del ICBF. Sin embargo, los participantes afirman que la oferta de educación pública continúa siendo insuficiente. Cecilia comparte que se ha visto obligada a pagar altos costos de matrícula para su nieto en un colegio privado. Comenta, también, que muchos niños se ven obligados a estudiar en colegios en otras zonas de Soacha y en la localidad de Bosa, generando sobrecostos para sus familias.\n\nTambién surgieron conversaciones en torno a la educación de jóvenes, adultos y personas con capacidades cognitivas diversas. Lidia, por ejemplo, aboga por la apertura de matrícula escolar para adultos, pues ha identificado que muchos de sus vecinos y conocidos quisieran terminar sus estudios. Dairy afirma en su fotorelato que la emociona la construcción de la sede del SENA pues afirma que los jóvenes de la ciudadela necesitan más oportunidades para salir adelante. Maria Fernanda, quien es docente, sueña con algún día ver tres o más universidades, ojalá públicas. Mercedes discute la importancia de una oferta educativa para personas con discapacidades.",
          image: "/images/photo3.jpg",
        },
        {
          id: "iluminacion",
          title: "Iluminación",
          content:
            "Participantes como Lady compartieron la importancia de la buena iluminación en sus primeras impresiones positivas de la ciudadela. Asimismo, Gilbert comparte en su fotorelato una toma de la entrada a ciudad verde en la noche; comenta que lo que más le gusta de vivir en Ciudad Verde es contar con una buena iluminación y farolas en buen estado, lo cual, afirma, brinda seguridad a las personas que, como él, trabajan en la noche o llegan tarde a sus hogares. Blanca, en cambio, considera que falta iluminación en la ciudadela, pues las situaciones de inseguridad suelen suceder en zonas oscuras de parques y ciclorutas. Bajo esta misma línea John comparte su deseo de articularse con las entidades competentes para señalarles los lugares dentro de la ciudadela donde considera se debe aumentar la iluminación para incrementar la seguridad.",
          image: "/images/photo4.jpg",
        },
        {
          id: "servicios-publicos",
          title: "Servicios públicos domiciliarios",
          content:
            "Los costos por servicios son un factor de preocupación para los residentes. La comunidad está preocupada por el aumento de las tarifas. Para Samuel y Estela las altas tarifas reducen su calidad de vida. Samuel afirma que él y las personas que conoce en la ciudadela son trabajadores que ganan un salario mínimo; al tener sus viviendas asignadas al estrato 3 los servicios llegan muy caros. En un mes puede llegar a pagar 95 mil por el gas y más de 100 mil por el agua, a pesar de que en su hogar solo vive él, su pareja y su bebé. Estela, por su parte, hace una comparación con los costos de servicios en su antigua vivienda en Bogotá, en donde compartía una casa con 7 familias, y afirma que aunque en la ciudadela 'se vive bonito' pagar los servicios es difícil. Por otra parte, a Jose le preocupa el mantenimiento del alcantarillado. Liliana, mientras tanto, considera que los servicios de aseo en la ciudadela son muy buenos y nos comparte en su fotorelato el agrado que le produce ver que los operarios cuidan la ciudadela como si fuera de ellos.",
          image: "/images/photo5.jpg",
        },
        {
          id: "comercio-formal",
          title: "Comercio formal",
          content:
            "Los espacios de comercio formal inicialmente planificados para Ciudad Verde son dramáticamente pocos para la demanda por bienes y servicios que genera una población de más de doscientas mil personas. Si bien los participantes reconocen los esfuerzos realizados por aumentar esta oferta a través de la construcción de módulos comerciales y una galería comercial, algunos, como Sandra y Cecilia quisieran ver una mayor cantidad y tipos de espacios en donde, por ejemplo, se pudieran encontrar supermercados de más bajos precios como un D1. Otros participantes como Marta realizan ventas en el espacio público como mecanismo de sustento para sus hogares y aseguran que los arriendos de la galería de comercio son muy elevados, muy pocos de los emprendimientos de los citoverdios podrían solventar esos costos. El fotorelato de Luz Mery, en donde se retrata un espacio de comercio formal en desuso, podría explicarse por dichos sobrecostos.",
          image: "/images/photo1.jpg",
        },
      ],
      testimonials: [
        {
          name: "Marco Tulio",
          quote: "Se sienten seguros movilizándose por la ciudadela.",
          link: "https://embed.lvn.org/?hid=5259748",
        },
        {
          name: "Argemiro",
          quote: "Un participante con discapacidad y movilidad reducida, dice sentirse contento por poder moverse fácilmente por toda la ciudadela gracias a las rampas que le son de gran ayuda.",
          link: "https://embed.lvn.org/?hid=5260879",
        },
        {
          name: "Luz Helena",
          quote: "Ha llegado tarde a su trabajo por el tráfico generado por la gran cantidad de carros parqueados sobre las vías ya que los parqueaderos de los conjuntos son insuficientes.",
          photoStoryUrl: "/images/fotorelatos/Infraestructura/Vías/Luz Helena.jpg",
          photoStoryContent: "Luz Helena comparte su experiencia sobre el tráfico generado por carros parqueados en las vías debido a la insuficiencia de parqueaderos en los conjuntos."
        },
        {
          name: "Adriana",
          quote: "Se pregunta si en un futuro serán construidas más vías de acceso porque identifica que buena parte de los problemas de congestión están relacionados con la existencia de sólo dos puntos de entrada.",
          link: "https://embed.lvn.org/?hid=5260907",
        },
        {
          name: "Marina",
          quote: "Comparten su preocupación por el creciente deterioro de las vías, en gran medida por el creciente tráfico pesado.",
          link: "https://embed.lvn.org/?hid=5263860",
        },
        {
          name: "July",
          quote: "Comparten su preocupación por el creciente deterioro de las vías, en gran medida por el creciente tráfico pesado.",
          link: "https://embed.lvn.org/?hid=5259812",
        },
        {
          name: "Gilbert",
          quote: "Captura el estado de la entrada principal de la ciudadela, donde las grietas comienzan a convertirse en huecos.",
          photoStoryUrl: "/images/fotorelatos/Infraestructura/Vías/Gilbert.jpeg",
          photoStoryContent: "Gilbert documenta en su fotorelato el deterioro de la entrada principal de la ciudadela, donde las grietas comienzan a convertirse en huecos, evidenciando la preocupación por el mantenimiento vial."
        },
        {
          name: "Yeison",
          quote: "Le emociona saber que tiene acceso a servicios médicos a pocos metros de su casa.",
          photoStoryUrl: "/images/fotorelatos/Infraestructura/Servicios de salud/Yeison.jpeg",
          photoStoryContent: "Yeison comparte en su fotorelato su emoción por la llegada del Hospital Avidanti, destacando la importancia de tener servicios médicos a pocos metros de su casa."
        },
        {
          name: "Ricardo",
          quote: "Ve el beneficio de la calidad de vida para la comunidad; asimismo, comenta esperar que los servicios que se presenten allí sean tanto públicos como privados.",
          link: "https://embed.lvn.org/?hid=5259932",
        },
        {
          name: "Luis",
          quote: "Propone que se realicen jornadas de salud y sensibilización en los espacios públicos de la comunidad.",
          link: "https://embed.lvn.org/?hid=5259896",
        },
        {
          name: "Cecilia",
          quote: "Se ha visto obligada a pagar altos costos de matrícula para su nieto en un colegio privado. Comenta, también, que muchos niños se ven obligados a estudiar en colegios en otras zonas de Soacha y en la localidad de Bosa.",
          link: "https://embed.lvn.org/?hid=5263878",
        },
        {
          name: "Lidia",
          quote: "Aboga por la apertura de matrícula escolar para adultos, pues ha identificado que muchos de sus vecinos y conocidos quisieran terminar sus estudios.",
          link: "https://embed.lvn.org/?hid=5259897",
        },
        {
          name: "Dairy",
          quote: "La emociona la construcción de la sede del SENA pues afirma que los jóvenes de la ciudadela necesitan más oportunidades para salir adelante.",
          photoStoryUrl: "/images/fotorelatos/Infraestructura/Educación/Dairy.jpeg",
          photoStoryContent: "Dairy expresa en su fotorelato su emoción por la construcción de la sede del SENA, destacando la importancia de que los jóvenes de la ciudadela tengan más oportunidades para salir adelante."
        },
        {
          name: "Maria Fernanda",
          quote: "Quien es docente, sueña con algún día ver tres o más universidades, ojalá públicas.",
          link: "https://embed.lvn.org/?hid=5259957",
        },
        {
          name: "Mercedes",
          quote: "Discute la importancia de una oferta educativa para personas con discapacidades.",
          link: "https://embed.lvn.org/?hid=5261146",
        },
        {
          name: "Lady",
          quote: "Compartió la importancia de la buena iluminación en sus primeras impresiones positivas de la ciudadela.",
          link: "https://embed.lvn.org/?hid=5259802",
        },
        {
          name: "Gilbert",
          quote: "Lo que más le gusta de vivir en Ciudad Verde es contar con una buena iluminación y farolas en buen estado, lo cual brinda seguridad a las personas que trabajan en la noche o llegan tarde a sus hogares.",
          photoStoryUrl: "/images/fotorelatos/Infraestructura/Educación/Gilbert.jpeg",
          photoStoryContent: "Gilbert comparte en su fotorelato una toma de la entrada a Ciudad Verde en la noche, destacando la buena iluminación y farolas en buen estado que brindan seguridad a las personas que trabajan en la noche o llegan tarde a sus hogares."
        },
        {
          name: "Blanca",
          quote: "Considera que falta iluminación en la ciudadela, pues las situaciones de inseguridad suelen suceder en zonas oscuras de parques y ciclorutas.",
          link: "https://embed.lvn.org/?hid=5259781",
        },
        {
          name: "John",
          quote: "Comparte su deseo de articularse con las entidades competentes para señalarles los lugares dentro de la ciudadela donde considera se debe aumentar la iluminación.",
          link: "https://embed.lvn.org/?hid=5263851",
        },
        {
          name: "Samuel",
          quote: "Afirma que él y las personas que conoce en la ciudadela son trabajadores que ganan un salario mínimo; al tener sus viviendas asignadas al estrato 3 los servicios llegan muy caros. En un mes puede llegar a pagar 95 mil por el gas y más de 100 mil por el agua.",
          link: "https://embed.lvn.org/?hid=5263875",
        },
        {
          name: "Estela",
          quote: "Hace una comparación con los costos de servicios en su antigua vivienda en Bogotá, afirma que aunque en la ciudadela 'se vive bonito' pagar los servicios es difícil.",
          link: "https://embed.lvn.org/?hid=5328763",
        },
        {
          name: "Jose",
          quote: "Le preocupa el mantenimiento del alcantarillado.",
          link: "https://embed.lvn.org/?hid=5259808",
        },
        {
          name: "Liliana",
          quote: "Considera que los servicios de aseo en la ciudadela son muy buenos y comparte el agrado que le produce ver que los operarios cuidan la ciudadela.",
          photoStoryUrl: "/images/fotorelatos/Infraestructura/Servicios públicos domiciliarios/Liliana.jpg",
          photoStoryContent: "Liliana comparte en su fotorelato el agrado que le produce ver que los operarios cuidan la ciudadela como si fuera de ellos, capturando a un operador de aseo trabajando en las calles."
        },
        {
          name: "Sandra",
          quote: "Quisiera ver una mayor cantidad y tipos de espacios comerciales en donde se pudieran encontrar supermercados de más bajos precios como un D1.",
          link: "https://embed.lvn.org/?hid=5259763",
        },
        {
          name: "Cecilia",
          quote: "Quisiera ver una mayor cantidad y tipos de espacios comerciales.",
          link: "https://embed.lvn.org/?hid=5263876",
        },
        {
          name: "Marta",
          quote: "Realizan ventas en el espacio público como mecanismo de sustento para sus hogares y aseguran que los arriendos de la galería de comercio son muy elevados.",
          link: "https://embed.lvn.org/?hid=5261136",
        },
        {
          name: "Luz Mery",
          quote: "En su fotorelato se retrata un espacio de comercio formal en desuso.",
          photoStoryUrl: "/images/fotorelatos/Infraestructura/Comercio formal/Luz Mery.jpeg",
          photoStoryContent: "El fotorelato de Luz Mery retrata un espacio de comercio formal en desuso, lo que podría explicarse por los sobrecostos de los arriendos."
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
      <Navigation currentPage="temas" />

      {/* Breadcrumb */}
      <div className="px-6 lg:px-10 pb-4">
        <div className="flex items-center gap-2 text-sm text-black/50">
          <Link href="/" className="hover:text-cv-pink transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/temas" className="hover:text-cv-pink transition-colors">
            Temas
          </Link>
          <span>/</span>
          <span className="text-cv-pink font-medium">{theme.title}</span>
        </div>
      </div>

      {/* Banner Section */}
      <section className="px-6 lg:px-10 py-6 lg:py-8">
        <div className="max-w-[1184px] mx-auto">
          <div
            className={`${theme.bgColor} rounded-lg flex items-center justify-center relative overflow-hidden`}
            style={{ height: "231px" }}
          >
            {/* Decorative Background Element */}
            <div className={`absolute inset-0 ${theme.bgColor} rounded-lg`}>
              <div className="absolute inset-0" style={{ width: "783px", height: "174px", left: "192px", top: "24px" }}>
                {/* Circle 1 */}
                <div 
                  className="absolute"
                  style={{ left: "148px", top: "0px", width: "75px", height: "75px" }}
                >
                  <img 
                    src="/images/decorative/decor-circle-1.png" 
                    alt="" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                {/* Circle 2 */}
                <div 
                  className="absolute"
                  style={{ left: "0px", top: "83px", width: "91px", height: "91px" }}
                >
                  <img 
                    src="/images/decorative/decor-circle-2.png" 
                    alt="" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                {/* Circle 3 */}
                <div 
                  className="absolute"
                  style={{ left: "611px", top: "92px", width: "74px", height: "74px" }}
                >
                  <img 
                    src="/images/decorative/decor-circle-3.png" 
                    alt="" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                {/* Circle 4 */}
                <div 
                  className="absolute"
                  style={{ left: "708px", top: "0px", width: "75px", height: "75px" }}
                >
                  <img 
                    src="/images/decorative/decor-circle-4.png" 
                    alt="" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
            
            {/* Title */}
            <h2 className="text-5xl font-bebas text-black/50 relative z-10">{theme.title}</h2>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-6 lg:px-16 py-12 pb-0">
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

      {/* Graphics Section */}
      <GraphicsSection themeId={theme.id} />

      {/* Subtemas Section */}
      <SubthemesSection
        subThemes={theme.content.subThemes}
        testimonials={theme.content.testimonials}
        themeOverlayColor={theme.overlayColor}
        themeId={theme.id}
      />

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
      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  return themesData.map((theme) => ({
    slug: theme.id,
  }));
}
