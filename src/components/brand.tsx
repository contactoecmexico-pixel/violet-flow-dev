import { Link } from "@tanstack/react-router";
import ecowebLogo from "@/assets/ecoweb-logo.png.asset.json";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <img
      src={ecowebLogo.url}
      alt="ecoweb"
      className={`h-12 w-auto md:h-14 ${className}`}
    />
  );
}

const WHATSAPP_URL = "https://wa.me/+527713429112";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/lp", label: "Solución" },
  { to: "/blog", label: "Blog" },
] as const;

export { WHATSAPP_URL, navLinks };
