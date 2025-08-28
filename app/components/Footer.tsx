export default function Footer() {
  return (
    <footer className="px-6 lg:px-16 py-12 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 text-xs text-black/50 leading-relaxed">
          {/* Left Column - Main Information */}
          <div className="space-y-6">
            {/* Copyright Notice */}
            <div>
              <p className="font-medium text-black/50 mb-2">
                La información, relatos y voces presentados en esta página son de
                total autoría y pertenencia de los residentes investigadores y
                participantes de este proceso. Prohibida su reproducción sin previa
                notificación.
              </p>
            </div>

            {/* Methodology Rights */}
            <div>
              <p>
                Los derechos de la metodología de &ldquo;conversaciones cívicas&rdquo; le
                pertenecen al <strong>Real Talk Network</strong>.
              </p>
            </div>

            {/* Data Analysis */}
            <div>
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
          </div>

          {/* Right Column - Contact Information & Credits */}
          <div className="space-y-4 lg:min-w-80">
            <div>
              <p className="font-medium text-black/50 mb-1">Contacto:</p>
              <div className="space-y-2">
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
            </div>

            {/* Credits in right column */}
            <div className="space-y-1">
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
        </div>

      </div>
    </footer>
  );
}

