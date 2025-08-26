import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import SubthemesSection from "./SubthemesSection";
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
        "El macro proyecto ofrece diversidad de espacios de entretenimiento. Los parques y la infraestructura son algunos de los aspectos que más le agradan a los residentes con un 39% y 15% respectivamente. Los sitios que más evocaron los habitantes y participantes en la investigación fueron los parques de la lectura y el Logroño por las jornadas de actividad física que se realizan. Otro de los sitios del cual se habla es el parque cerritos; por todas las actividades que se pueden hacer: asados, jugar tejo o rana, entre otras. Los demás parques son usados, pero sus nombres no se distinguen, allí se encuentran zonas de juegos para niños, canchas de baloncesto, microfútbol, pista de patinaje como de skate. Uno de los lugares favoritos de las familias es el parque de la niebla denominado la montaña.\n\nAlgunos citoverdinos usan las zonas comunes para generar ingresos en las principales esquinas de la ciudadela. Ofrecen en su gran mayoría hortalizas, frutas, verduras y comidas rápidas. Lo que causa diferentes emociones entre vecinos, las cuales se pueden leer enseguida.",
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
            "Esta actividad genera diversas emociones. La primera puede ser preocupación, que es el caso de July ya que ve como estigmatizan el trabajo del vendedor informal; ha buscado la manera de adquirir un local, pero los precios son elevados por eso se sigue vendiendo en los andenes. Palabras con las que está de acuerdo Sandra, quién ve la necesidad de contar con ellos debido a que los C. Comerciales no dan abasto.\n\nLa segunda, es de indignación palabra expresada por Edward al ver desorden en el uso de los andenes y ciclovías por parte de ellos. Él manifiesta que se le dificulta salir con el coche de su bebe y dar una vuelta. Emoción que comparte Geovanny a través de su foto tomada al frente del C. Comercial Prado Verde, allí se puede ver cómo utilizan las macetas para colocar sus productos.",
          image: "/images/photo1.jpg",
        },
        {
          id: "basuras",
          title: "Basuras",
          content:
            "El común denominador en las calles de la ciudadela es ver un entorno limpio, algunas excepciones se presentan por desconocimiento o por no disponer los residuos o escombros de manera adecuada. Esto lo muestra Gilbert en la foto, la esquina del romboy es un lugar para dejar residuos de construcción. Es tanto el interés por cuidar la ciudadela que diferentes habitantes proponen alternativas interesantes para el cuidado de los recursos naturales. A Alejandra le gustaría que la capaciten en temas de conciencia ecológica, realizar jornadas de limpieza y participar en talleres direccionados por influencers. Conor quisiera liderar la conformación de una dependencia de medio ambiente en la cual den talleres de como separar en la fuente y otros temas de educación ambiental. Por último, Lady se propone educar a sus hijos a separar en la fuente y cuidar el entorno.",
          image: "/images/photo3.jpg",
        },
        {
          id: "areas-verdes",
          title: "Áreas verdes - parques",
          content:
            "Los espacios comunes, en su mayoría verdes, inspiran a Luis y muchos otros participantes. De ahí el sentido que tiene el nombre de Ciudad Verde para sus habitantes. Él indica que le gustaría promover jornadas médicas de atención primaria con enfoque preventivo y así llegar a más colegas que vivan allí y puedan apoyar la jornada. Por su parte, Alejandra quisiera participar en actividades de educación ambiental y jornadas de limpieza de las zonas verdes. En el caso de Julián el solo caminar por los alrededores de la montaña y ver un show de motorizados (como se ve en la foto) lo hace visualizarse estudiando ingeniería mecánica. Estos relatos permiten entender la importancia material y simbólica que el acceso a estos espacios tiene para los habitantes.\n\nLa mayoría de citoverdinos disfrutan estar en los parques, el 39% de los encuestados afirman que estos lugares es lo que más les agrada de su lugar de vivienda. El 47% de los encuestados afirma que su lugar favorito son las zonas verdes. Un ejemplo de ello es Claribel, quien va con su familia a hacer picnic casi todos los domingos. Las temporadas que más le gustan son agosto para elevar cometa y diciembre por el alumbrado. Por otro lado, Alfredo compara a Cazuca con la ciudadela y se siente feliz de poder salir con sus hijos y hacer asados en los parques cerca a la montaña. Visión que comparte Vicente enfatizando que el parque de la lectura es su lugar favorito, allí comparte un helado con sus hijos y juega con su mascota. Este lugar se puede apreciar en su foto.\n\nUn aspecto negativo que le sucedió a Fanny en horas de la tarde-noche fue escuchar disparos en el parque cerca del Conjunto Hortensia. Esto hizo que pensara que su hijo estaba en peligro ya que estaba próximo a llegar a casa, por fortuna nada pasó con él.",
          image: "/images/photo4.jpg",
        },
        {
          id: "recreacion-deporte",
          title: "Recreación, deporte, actividad física",
          content:
            "Ciudad Verde es un lugar para reactivar el cuerpo por medio de actividades deportivas. Una participante frecuente es Rosa, a ella le gustan las jornadas aeróbicas para el adulto mayor que se realizan dos días a la semana con horarios flexibles que pueden ser de 6:00 a 7:00 am o de 7:00 am a 8:00 am y son realizadas por el IMRD; la agrupación también las hace y están abiertas a cualquier público. Algunos habitantes como Armando prefieren salir a caminar con los vecinos. Otros como Yeison les encanta participar en las actividades lúdicas que hacen las escuelas deportivas para las familias, tal como se aprecia en la foto.\n\nEn un futuro Ana Elsa le gustaría ver un centro de cultura para que los jóvenes aprovechen su tiempo libre y Ricardo propone que se hagan maratones para todas las edades como una alternativa de cuidar el estado físico de los habitantes de la ciudadela.",
          image: "/images/photo5.jpg",
        },
        {
          id: "naturaleza",
          title: "Naturaleza",
          content:
            "Ciudad Verde es un contraste entre urbanismo y naturaleza, tal como se ve en la foto tomada por Karen. Allí se hace referencia a los buenos momentos de recreación ya sean físicos como espirituales. Opinión que comparte Katherine al identificar ese espacio como su polo a tierra en donde se pueden hacer asados y despejarse de una vida rutinaria. Es tan agradable el entorno que a Andrea Paola le gustaría participar en campañas de arborización o de siembra que realicen en la ciudadela.",
          image: "/images/photo1.jpg",
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
        "Conforme a la caracterización realizada por la Corporación Responder la seguridad es un tema de discusión entre los habitantes. Mientras el 39% de los residentes reconoce la tranquilidad como el aspecto que más les agrada de lugar de vivienda, la inseguridad del sector es un tema que preocupa al 24% de los residentes de la ciudadela (Corporación Responder, 2022). En relación con las problemáticas entre vecinos el 67% considera que nunca se presentan conflictos verbales, el 13% de los encuestados afirma que a veces se presentan y el 3% dice que siempre. Comportamiento similar tiene la ausencia del consumo de sustancias psicoactivas con un 67%.\n\nLos habitantes relacionan las ventas informales en los espacios comunes como lugares propensos al hurto y expendio de sustancias psicoactivas. Son conscientes que en la actualidad es un tema que se presenta tanto en Bogotá como en Soacha. Que el día a día con sus afanes hace que se alteren y se den discusiones. Los habitantes quisieran que el papel de las autoridades policiales frente al uso del espacio público y mediación de conflictos fuese más activo.",
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
            "En los parques Teresa ha visto jóvenes consumir drogas, situación que le preocupa como se ve en la foto. Según la encuesta realizada a residentes la frecuencia del consumo de sustancias psicoactivas varía: 12% dice que a veces se presenta, 9% casi siempre y 5% siempre. Para ilustrar la apreciación anterior Rosa cuenta que en los parques cerca de los colegios en las noches ha visto grupos de entre 6,7 y/o 8 jóvenes vendiendo y consumiendo, lo que expone a los estudiantes. Por su parte, Marina cree que la gente que viene a vender drogas es de los barrios cercanos. Por otro lado, cuando Nubia los ve intenta hablar con ellos para que hagan actividades deportivas o busquen trabajo.",
          image: "/images/photo1.jpg",
        },
        {
          id: "robos",
          title: "Robos",
          content:
            "Presenciar o ser víctima de robos puede ser una experiencia bastante traumática. Mercedes vivió esto cerca de la frontera donde toma el SITP alrededor de las 4:00 am. Al ver un robo huyó y corrió. Esta situación la dejó con una sensación de estar predispuesta a vivir algo similar. Otra experiencia en las calles la vivió Andrea Paola, quien evitó que le robaran el celular en un bus y quedó asustada de solo pensar que se bajara y hubieran represalias. A su vez, Julián retrata en la fotografía como en el parque que queda al lado de su conjunto una persona robó a un vecino.\n\nEn los conjuntos también roban, John manifiesta que desocupan los apartamentos y nadie dice nada. Al vecino Marco Tulio le da inseguridad vivir en conjuntos con tantas personas que no conoce y que pueden ser agresivas. Él ha tenido que presenciar conflictos con armas y ver la muerte de una persona al frente de su conjunto tan solo por hurtarle algo. La inseguridad es una de las problemáticas que más aquejan al lugar de vivienda de los citoverdinos con el 24% de los encuestados.",
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
            "Al haber desempleo las personas adoptan el rebusque como la alternativa a corto plazo para subsistir y usan el espacio público para vender productos. La intolerancia es un factor de múltiples conflictos. Ejemplo de ellos es el caso de unos vendedores informales que le lanzaron una silla al esposo de Marta, todo por un acto de intolerancia. Otra situación similar es la de Lady y sus hijos, ellos tuvieron que presenciar la muerte de alguien que robaron, esta situación los dejó marcados. Nicol narra que fue retenida junto con sus compañeros por unos vendedores informales, quienes los confundieron con jíbaros, luego de aclarar la confusión pudieron irse. Desde ese día intenta no pasar por el parque que se ve en la foto.",
          image: "/images/photo4.jpg",
        },
        {
          id: "policia",
          title: "Policía",
          content:
            "Algunos lugares críticos son los que colindan con las fronteras ya que se pueden presentar situaciones de peligro, al ser solitarios como el lugar que se muestra en la foto de Diana. Situación que le angustia al pensar que les puede pasar algo a los hijos, pues ellos deben pasar cerca a esos lugares para llegar al conjunto, salir le da temor a ciertas horas. Tal como le pasó a Conor cuando iba a sembrar unos girasoles a la montaña allí se topó con un robo a una pareja. Salió a buscar ayuda, la policía llegó pero hicieron poco y eso le generó tristeza. Por todo esto, Jairo solicita mayor presencia de la policía en las fronteras y articulación con la vigilancia privada.\n\nPara Edward es importante que ayuden a organizar el uso que les están dando los vendedores informales a las zonas peatonales y ciclovías ya que desplazarse con el coche de su bebe es difícil por tanto puestos informales. Así que, al ser una ciudadela en la que viven un número amplio de personas y la población es flotante, los habitantes ven la necesidad de que se realice un esquema de seguridad que contemple un mayor control en los límites con Bosa y Hogares Soacha. Para ellos es pertinente aumentar la frecuencia en sus recorridos en horarios nocturnos como en las mañanas, específicamente en los parques, la montaña y la frontera. Los habitantes consideran que pueden ayudarse con la vigilancia privada.",
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
