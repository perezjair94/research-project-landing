import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import SubthemesSection from "./SubthemesSection";
import GraphicsSection from "./GraphicsSection";
import Navigation from "../../components/Navigation";

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
    bgColor: "bg-cv-green/20",
    overlayColor: "bg-cv-green/20",
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
    bgColor: "bg-cv-blue/20",
    overlayColor: "bg-cv-blue/20",
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
          name: "Conor",
          quote:
            "Cuando iba a sembrar unos girasoles a la montaña se topó con un robo a una pareja. Salió a buscar ayuda, la policía llegó pero hicieron poco y eso le generó tristeza.",
          link: "https://embed.lvn.org/?hid=5259745",
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
          link: "https://embed.lvn.org/?hid=5259895",
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
          link: "https://embed.lvn.org/?hid=5259896",
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
          link: "https://embed.lvn.org/?hid=5259897",
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
          link: "https://embed.lvn.org/?hid=5259898",
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
            className={`${theme.bgColor} rounded-lg flex items-center justify-center`}
            style={{ height: "231px" }}
          >
            <h2 className="text-5xl font-bebas text-black/50">{theme.title}</h2>
          </div>
        </div>
      </section>

      {/* Graphics Section */}
      <GraphicsSection themeId={theme.id} />

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
      <SubthemesSection
        subThemes={theme.content.subThemes}
        testimonials={theme.content.testimonials}
        themeOverlayColor={theme.overlayColor}
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
            por{" "}
            <a
              href="https://www.linkedin.com/in/jairperz/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cv-purple/70 transition-colors"
            >
              Jair Pérez
            </a>
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
