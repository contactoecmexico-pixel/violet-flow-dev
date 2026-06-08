import { Link } from "@tanstack/react-router";
import ecowebLogo from "@/assets/ecoweb-logo.webp.asset.json";

export function Wordmark({
  className = "",
  eager = false,
}: {
  className?: string;
  eager?: boolean;
}) {
  return (
    <img
      src={ecowebLogo.url}
      alt="ecoweb"
      width={1024}
      height={937}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "auto"}
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
