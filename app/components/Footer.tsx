export default function Footer() {
  return (
    <footer className="px-6 lg:px-10 py-8 border-t border-neutral-100">
      <div className="max-w-4xl mx-auto space-y-6 text-sm text-black/50 leading-relaxed">
        {/* Copyright Notice */}
        <div className="text-center">
          <p className="font-medium text-black/50 mb-2">
            La información, relatos y voces presentados en esta página son de
            total autoría y pertenencia de los residentes investigadores y
            participantes de este proceso. Prohibida su reproducción sin previa
            notificación.
          </p>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <p className="font-medium text-black/50">Contacto:</p>
          <p>
            <a
              href="mailto:am.perez1012@alum.mit.edu"
              className="hover:text-cv-purple/70 transition-colors underline"
            >
              am.perez1012@alum.mit.edu
            </a>
          </p>
          <p>
            <a
              href="tel:+573104759327"
              className="hover:text-cv-purple/70 transition-colors"
            >
              +57 3104759327
            </a>
          </p>
        </div>

        {/* Methodology Rights */}
        <div className="text-center">
          <p>
            Los derechos de la metodología de &ldquo;conversaciones cívicas&rdquo; le
            pertenecen al <strong>Real Talk Network</strong>.
          </p>
        </div>

        {/* Data Analysis */}
        <div className="text-center">
          <p>
            La sistematización, codificación y análisis de los datos fue
            realizada por medio de{" "}
            <a
              href="https://app.cortico.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cv-purple/70 transition-colors underline font-medium"
            >
              Cortico
            </a>
          </p>
        </div>

        {/* Credits */}
        <div className="text-center border-t border-neutral-100 pt-6 space-y-2">
          <p>
            Página web hecha por{" "}
            <a
              href="https://www.linkedin.com/in/jairperz/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cv-purple/70 transition-colors"
            >
              <strong>Jair Pérez</strong>
            </a>
          </p>
          <p>
            Ilustraciones hechas por <strong>Camila González</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

