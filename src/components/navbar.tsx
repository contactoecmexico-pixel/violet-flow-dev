import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark, WHATSAPP_URL, navLinks } from "./brand";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const minimal = pathname === "/solucion" || pathname === "/solucion/";

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: "#262033" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-5">
        <Link to="/" onClick={() => setOpen(false)} aria-label="Inicio">
          <Wordmark eager />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {(minimal ? [] : navLinks).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-sans text-[15px] text-[#F5F7F5] transition-colors hover:underline hover:decoration-[#1DB86B] hover:decoration-2 hover:underline-offset-8"
              activeProps={{ style: { color: "#1DB86B" } }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-lg px-6 py-3 font-display font-bold text-white transition-colors md:inline-block"
          style={{ backgroundColor: "#1DB86B" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0F6E56")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1DB86B")}
        >
          Quiero mi asistente 24/7 →
        </a>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden"
          style={{ backgroundColor: "#262033", borderTop: "1px solid #333" }}
        >
          <div className="flex flex-col gap-4 px-4 py-6">
            {(minimal ? [] : navLinks).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-sans text-[15px] text-[#F5F7F5]"
                activeProps={{ style: { color: "#1DB86B" } }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block rounded-lg px-6 py-3 text-center font-display font-bold text-white"
              style={{ backgroundColor: "#1DB86B" }}
            >
              Quiero mi asistente 24/7 →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
