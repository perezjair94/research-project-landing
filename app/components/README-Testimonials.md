# Sistema de Testimonios Individuales con Fotorelatos

Este sistema permite mostrar testimonios individuales donde cada autor puede tener múltiples fotorelatos por subtema.

## Características

- **Testimonios individuales**: Cada testimonio se muestra como una tarjeta independiente
- **Múltiples fotorelatos por autor**: Un autor puede tener varios fotorelatos por subtema
- **Filtrado por subtema**: Los testimonios se pueden filtrar por subtema activo
- **Consolidación inteligente**: Testimonios múltiples del mismo autor se combinan automáticamente
- **Integración completa**: Compatible con audio, iframes y el sistema de modales existente

## Componentes

### 1. `IndividualTestimonial.tsx`
Componente que muestra un testimonio individual con sus fotorelatos asociados.

**Props:**
- `testimonial`: Objeto testimonio con la nueva estructura
- `onAudioClick`: Callback para reproducir audio
- `onIframeChange`: Callback para cambiar iframe activo

### 2. `TestimonialsContainer.tsx`
Contenedor que organiza y gestiona múltiples testimonios.

**Props:**
- `testimonials`: Array de testimonios
- `activeSubtopic`: Subtema activo para filtrado
- `onIframeChange`: Callback para cambio de iframe

### 3. `TestimonialsExample.tsx`
Componente de ejemplo que demuestra cómo usar el sistema.

## Estructura de Datos

```typescript
interface PhotoStory {
  id: string;
  imageUrl: string;
  content: string;
  subtopic?: string;
}

interface Testimonial {
  name: string;
  quote: string;
  audio?: string;
  link?: string;
  subtopic?: string;
  photoStories?: PhotoStory[];
}
```

## Ejemplo de Uso

```tsx
const testimonios = [
  {
    name: "María Mercedes",
    quote: "La ciudadela es un lugar propicio para el encuentro entre vecinos y sus mascotas.",
    audio: "convivencia-maria-mercedes.mp3",
    subtopic: "manejo-mascotas",
    photoStories: [
      {
        id: "maria-mascotas-1",
        imageUrl: "/images/fotorelatos/maria-mascotas-parque.jpg",
        content: "María fotografió a su perro jugando en el parque...",
        subtopic: "manejo-mascotas"
      }
    ]
  }
];

<TestimonialsContainer 
  testimonials={testimonios}
  activeSubtopic="manejo-mascotas"
  onIframeChange={(url) => console.log(url)}
/>
```

## Integración con el Sistema Existente

El nuevo sistema es compatible con la estructura existente:

1. **Conversión automática**: Los testimonios existentes se convierten automáticamente al nuevo formato
2. **Retrocompatibilidad**: Funciona con testimonios que no tienen fotorelatos
3. **Integración con SubthemesSection**: Se añade como nueva sección en las páginas de temas

## Funcionalidades Implementadas

- ✅ Testimonios individuales por autor
- ✅ Múltiples fotorelatos por autor por subtema  
- ✅ Filtrado por subtema activo
- ✅ Consolidación de testimonios del mismo autor
- ✅ Integración con modales de fotorelatos existentes
- ✅ Soporte para audio e iframes
- ✅ Interfaz responsiva y accesible
- ✅ Grid de imágenes en miniatura para fotorelatos
- ✅ Hover effects y transiciones suaves

## Navegación

- Click en el nombre del autor → Activar iframe/audio
- Click en imagen de fotorelato → Abrir modal con imagen completa
- Selección de subtemas → Filtrar testimonios relevantes

El sistema está completamente integrado y listo para usar en producción.