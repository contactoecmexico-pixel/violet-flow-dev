import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";

const WA = "https://wa.me/+527713429112";

export const Route = createFileRoute("/soluciones-digitales")({
  head: () => ({
    meta: [
      { title: "Soluciones digitales a la medida | ecoweb" },
      {
        name: "description",
        content:
          "Páginas web profesionales, e-commerce, automatizaciones con IA y proyectos digitales a la medida para cualquier negocio.",
      },
      { property: "og:title", content: "Soluciones digitales a la medida | ecoweb" },
      {
        property: "og:description",
        content:
          "Páginas web, tiendas en línea, automatizaciones con IA y desarrollo a la medida.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SolucionesDigitales,
});

function PrimaryButton({
  href,
  children,
  large = false,
}: {
  href: string;
  children: React.ReactNode;
  large?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-md font-sans font-medium text-white transition-colors ${large ? "px-9 py-4 text-lg" : "px-6 py-3"}`}
      style={{ backgroundColor: "#1DB86B" }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0F6E56")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1DB86B")}
    >
      {children}
    </a>
  );
}

function OutlineButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full items-center justify-center rounded-md border-2 px-5 py-3 font-sans text-sm font-medium transition-colors"
      style={{ borderColor: "#1DB86B", color: "#1DB86B", backgroundColor: "transparent" }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(29,184,107,0.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
    >
      {children}
    </a>
  );
}

function OtherCard({
  badge,
  title,
  text,
  priceLabel,
  priceAmount,
  priceSub,
  cta,
}: {
  badge: string;
  title: string;
  text: string;
  priceLabel: string;
  priceAmount: string;
  priceSub: string;
  cta: string;
}) {
  return (
    <div
      className="flex flex-col rounded-2xl p-8"
      style={{ backgroundColor: "#2E2841", borderTop: "3px solid #1DB86B" }}
    >
      <span
        className="inline-block self-start rounded-full font-sans"
        style={{
          backgroundColor: "rgba(29,184,107,0.1)",
          border: "1px solid rgba(29,184,107,0.3)",
          padding: "4px 12px",
          fontSize: "12px",
          color: "#1DB86B",
        }}
      >
        {badge}
      </span>
      <h3
        className="font-display"
        style={{ fontSize: "22px", color: "#ffffff", marginTop: "16px", fontWeight: 700 }}
      >
        {title}
      </h3>
      <p
        className="font-sans"
        style={{ fontSize: "14px", color: "#AAAAAA", marginTop: "12px", lineHeight: 1.7 }}
      >
        {text}
      </p>
      <div style={{ marginTop: "20px" }}>
        <div className="font-sans" style={{ fontSize: "12px", color: "#777" }}>
          {priceLabel}
        </div>
        <div
          className="font-display"
          style={{ fontSize: "26px", color: "#ffffff", fontWeight: 700 }}
        >
          {priceAmount}
        </div>
        <div className="font-sans" style={{ fontSize: "13px", color: "#777" }}>
          {priceSub}
        </div>
      </div>
      <div className="mt-auto pt-5">
        <OutlineButton href={WA}>{cta}</OutlineButton>
      </div>
    </div>
  );
}

function WebPlanCard({
  badge,
  title,
  subtitle,
  price,
  priceLabel,
  features,
  cta,
}: {
  badge: string;
  title: string;
  subtitle: string;
  price: string;
  priceLabel: string;
  features: string[];
  cta: string;
}) {
  return (
    <div
      className="flex flex-col"
      style={{
        backgroundColor: "#2E2841",
        borderRadius: "16px",
        padding: "32px",
        borderTop: "3px solid #1DB86B",
      }}
    >
      <span
        className="inline-block self-start rounded-full font-sans"
        style={{
          backgroundColor: "rgba(29,184,107,0.1)",
          border: "1px solid rgba(29,184,107,0.3)",
          padding: "4px 12px",
          fontSize: "12px",
          color: "#1DB86B",
        }}
      >
        {badge}
      </span>
      <h3
        className="font-display"
        style={{ fontSize: "24px", color: "#ffffff", marginTop: "16px", fontWeight: 700 }}
      >
        {title}
      </h3>
      <p
        className="font-sans"
        style={{ fontSize: "14px", color: "#AAAAAA", marginTop: "8px", lineHeight: 1.6 }}
      >
        {subtitle}
      </p>
      <div style={{ marginTop: "20px" }}>
        <div
          className="font-display"
          style={{ fontSize: "40px", color: "#ffffff", fontWeight: 800, lineHeight: 1 }}
        >
          {price}
        </div>
        <div className="font-sans" style={{ fontSize: "14px", color: "#999", marginTop: "4px" }}>
          {priceLabel}
        </div>
      </div>
      <ul style={{ marginTop: "20px" }}>
        {features.map((f) => (
          <li
            key={f}
            className="flex items-start font-sans"
            style={{ fontSize: "14px", color: "#CCCCCC", marginBottom: "10px", gap: "10px" }}
          >
            <CheckCircle size={16} color="#1DB86B" className="mt-0.5 shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-5">
        <OutlineButton href={WA}>{cta}</OutlineButton>
      </div>
    </div>
  );
}

function SolucionesDigitales() {
  return (
    <main>
      <section style={{ backgroundColor: "#262033", padding: "80px 16px" }}>
        <div className="mx-auto" style={{ maxWidth: "1100px" }}>
          <Reveal>
            <div
              className="text-center font-display uppercase"
              style={{
                fontSize: "14px",
                color: "#1DB86B",
                letterSpacing: "2px",
                marginBottom: "8px",
                fontWeight: 700,
              }}
            >
              También hacemos
            </div>
            <h1
              className="text-center font-display text-[28px] md:text-[36px]"
              style={{ color: "#ffffff", marginBottom: "48px", fontWeight: 700 }}
            >
              Soluciones digitales para cualquier negocio
            </h1>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <WebPlanCard
                badge="Más popular"
                title="Página Web Profesional"
                subtitle="Para negocios que necesitan presencia online efectiva"
                price="$7,000"
                priceLabel="MXN / proyecto"
                features={[
                  "Diseño responsive hasta 5 páginas",
                  "Certificado SSL gratuito",
                  "Formularios de contacto funcionales",
                  "Integración de redes sociales y WhatsApp",
                  "Redacción profesional de textos",
                  "SEO estructurado",
                  "3 revisiones de diseño completas",
                  "Soporte técnico 60 días",
                  "Páginas adicionales: $799 c/u",
                ]}
                cta="Cotizar mi página →"
              />
              <WebPlanCard
                badge="Tienda en línea"
                title="E-commerce"
                subtitle="Solución completa para vender en línea"
                price="$15,000"
                priceLabel="MXN / proyecto"
                features={[
                  "Diseño responsive páginas ilimitadas",
                  "Tienda en línea integrada con carrito y checkout",
                  "Carga inicial de hasta 15 productos",
                  "Certificado SSL gratuito",
                  "Integración de WhatsApp",
                  "Capacitación en ventas y control del sitio",
                  "4 revisiones de diseño completas",
                  "Soporte técnico 90 días",
                  "Producto extra agregado: $50 MXN",
                ]}
                cta="Cotizar mi tienda →"
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <OtherCard
                badge="Automatización"
                title="Automatizaciones con IA para procesos digitales"
                text="Conectamos tus herramientas, automatizamos flujos de trabajo y eliminamos tareas repetitivas. CRM, WhatsApp, inventario, facturación. Lo que necesites conectar, lo conectamos."
                priceLabel="Precio"
                priceAmount="A la medida"
                priceSub="cotización sin costo"
                cta="Cotizar proyecto →"
              />
              <OtherCard
                badge="Desarrollo a medida"
                title="Proyectos digitales complejos y a la medida"
                text="Sistemas personalizados, integraciones avanzadas, dashboards, plataformas y cualquier proyecto que requiera desarrollo a medida. Evaluamos el alcance y te damos un plan claro."
                priceLabel="Precio"
                priceAmount="A la medida"
                priceSub="cotización sin costo"
                cta="Hablar del proyecto →"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ backgroundColor: "#F5F7F5", padding: "80px 16px" }}>
        <div className="mx-auto" style={{ maxWidth: "700px" }}>
          <Reveal>
            <div
              className="text-center"
              style={{
                backgroundColor: "#262033",
                borderRadius: "20px",
                padding: "32px",
              }}
            >
              <h2
                className="font-display text-[28px] md:text-[36px]"
                style={{ color: "#ffffff", fontWeight: 800 }}
              >
                ¿No sabes cuál es el tuyo?
              </h2>
              <p
                className="font-sans"
                style={{ fontSize: "17px", color: "#CCCCCC", marginTop: "16px" }}
              >
                Cuéntanos qué necesitas. Te decimos honestamente si podemos ayudarte y
                cómo.
              </p>
              <div style={{ marginTop: "32px" }}>
                <PrimaryButton href={WA} large>
                  Agenda una llamada →
                </PrimaryButton>
              </div>
              <p
                className="font-sans"
                style={{ fontSize: "13px", color: "#777", marginTop: "12px" }}
              >
                Sin compromiso. Sin presión.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
