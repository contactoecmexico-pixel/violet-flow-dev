import { Link } from "@tanstack/react-router";
import { Wordmark, navLinks } from "./brand";

const INSTAGRAM_URL = "https://www.instagram.com/san_mau.ia/";
const TIKTOK_URL = "https://www.tiktok.com/@san_mau.ia";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#262033", borderTop: "1px solid #333" }}>
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Wordmark />
            <p className="mt-3 font-sans text-sm" style={{ color: "#999" }}>
              donde el futuro se construye
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display font-bold text-white">Navegación</h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="font-sans text-sm text-[#F5F7F5] hover:text-[#1DB86B]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display font-bold text-white">Contacto</h4>
            <ul className="space-y-2 font-sans text-sm text-[#F5F7F5]">
              <li>
                <a href="tel:+527713429112" className="hover:text-[#1DB86B]">
                  +52 771 342 9112
                </a>
              </li>
              <li>
                <a href="mailto:contacto@ecowebmx.com" className="hover:text-[#1DB86B]">
                  contacto@ecowebmx.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display font-bold text-white">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#F5F7F5] hover:text-[#1DB86B]"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-[#F5F7F5] hover:text-[#1DB86B]"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.5-5.78 2.89 2.89 0 0 1 2.5 2.5v.33h1.55v-.33A4.44 4.44 0 0 0 15.13 12a4.52 4.52 0 0 0 4.46-4.46V6.69Z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center font-sans text-xs" style={{ color: "#999" }}>
          © 2025 EcoWeb. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
