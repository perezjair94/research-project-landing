export default function Footer() {
  return (
    <footer className="px-10 py-8 text-center">
      <div className="flex items-center justify-center">
        <span className="text-base font-semibold text-black/50">
          Hecho por{" "}
          <a
            href="https://www.linkedin.com/in/jairperz/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cv-purple/70 transition-colors underline"
          >
            Jair Pérez
          </a>
        </span>
      </div>
    </footer>
  );
}