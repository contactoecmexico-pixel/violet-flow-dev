import { Link } from "@tanstack/react-router";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-bold text-2xl lowercase tracking-tight ${className}`}>
      <span className="text-white">eco</span>
      <span style={{ color: "#1DB86B" }}>web</span>
    </span>
  );
}

const WHATSAPP_URL = "https://wa.me/+527713429112";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/lp", label: "Landing" },
  { to: "/blog", label: "Blog" },
] as const;

export { WHATSAPP_URL, navLinks };
