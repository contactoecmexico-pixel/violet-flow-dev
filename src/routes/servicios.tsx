import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";

const WA = "https://wa.me/+527713429112";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios | ecoweb" },
      {
        name: "description",
        content:
          "Sistemas conversacionales con IA para clínicas dentales y soluciones digitales a la medida para cualquier negocio.",
      },
      { property: "og:title", content: "Servicios | ecoweb" },
      {
        property: "og:description",
        content:
          "Tecnología que trabaja. Sin que tú la toques. Asistentes con IA, páginas web, automatizaciones y proyectos a medida.",
      },
    ],
  }),
  component: Servicios,
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

function Servicios() {
  const features = [
    "Respuesta automática 24/7 por WhatsApp",
    "Agendamiento en tiempo real",
    "Confirmación automática de citas",
    "Entrenado con los datos de tu clínica",
    "Revisión y optimización mensual",
    "Soporte prioritario en menos de 24 hrs",
    "Sin contrato de permanencia",
  ];

  return (
    <main>
      {/* SECCIÓN 1: HERO */}
      <section style={{ backgroundColor: "#262033", padding: "80px 16px" }}>
        <div className="mx-auto text-center" style={{ maxWidth: "800px" }}>
          <Reveal>
            <div
              className="font-sans uppercase"
              style={{
                fontSize: "13px",
                color: "#1DB86B",
                letterSpacing: "1px",
                marginBottom: "16px",
                fontWeight: 400,
              }}
            >
              Lo que hacemos
            </div>
            <h1
              className="font-display text-[32px] md:text-[48px]"
              style={{ color: "#ffffff", fontWeight: 800, lineHeight: 1.15 }}
            >
              Tecnología que trabaja. Sin que tú la toques.
            </h1>
            <p
              className="mx-auto font-sans"
              style={{
                fontSize: "19px",
                color: "#CCCCCC",
                marginTop: "16px",
                maxWidth: "640px",
              }}
            >
              Instalamos y gestionamos sistemas conversacionales con IA para clínicas
              dentales y desarrollamos soluciones digitales a la medida para cualquier
              tipo de negocio.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECCIÓN 2: SERVICIO PRINCIPAL */}
      <section
        style={{ backgroundColor: "#F5F7F5", padding: "80px 16px" }}
        className="md:!py-20"
      >
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
              Servicio principal
            </div>
            <h2
              className="text-center font-display text-[28px] md:text-[36px]"
              style={{ color: "#262033", marginBottom: "48px", fontWeight: 700 }}
            >
              Para clínicas dentales
            </h2>
          </Reveal>

          <Reveal>
            <div
              className="mx-auto grid grid-cols-1 gap-10 md:grid-cols-[55%_45%] md:gap-12"
              style={{
                maxWidth: "900px",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
                padding: "32px",
                borderTop: "5px solid #1DB86B",
              }}
            >
              {/* Columna izquierda */}
              <div>
                <span
                  className="inline-block font-sans"
                  style={{
                    backgroundColor: "#F0FFF4",
                    border: "1px solid rgba(29,184,107,0.4)",
                    borderRadius: "20px",
                    padding: "5px 14px",
                    fontSize: "13px",
                    color: "#1DB86B",
                    marginBottom: "20px",
                  }}
                >
                  Sistema Conversacional con IA
                </span>
                <h3
                  className="font-display"
                  style={{ fontSize: "28px", color: "#262033", fontWeight: 700 }}
                >
                  Sistema conversacional instalado y gestionado para tu clínica dental
                </h3>
                <p
                  className="font-sans"
                  style={{ fontSize: "16px", color: "#555", marginTop: "16px", lineHeight: 1.7 }}
                >
                  Un asistente que responde consultas de pacientes por WhatsApp 24/7,
                  agenda citas en tu calendario, y confirma asistencias automáticamente —
                  sin que tú ni tu equipo configuren nada.
                </p>
                <p
                  className="font-sans"
                  style={{ fontSize: "16px", color: "#555", marginTop: "16px", lineHeight: 1.7 }}
                >
                  Nosotros lo instalamos, lo entrenamos con los datos de tu clínica, y lo
                  mantenemos actualizado. Si algo cambia, nos avisas y lo ajustamos ese día.
                </p>
                <p
                  className="font-sans"
                  style={{ fontSize: "15px", color: "#888", marginTop: "16px" }}
                >
                  Diseñado para clínicas de 1 a 15 sillones en México.
                </p>
                <div style={{ marginTop: "24px" }}>
                  <PrimaryButton href={WA}>Quiero mi asistente 24/7 →</PrimaryButton>
                </div>
              </div>

              {/* Columna derecha */}
              <div>
                <div style={{ marginBottom: "24px" }}>
                  <div
                    className="font-sans"
                    style={{ fontSize: "12px", color: "#999", marginBottom: "4px" }}
                  >
                    Implementación
                  </div>
                  <div
                    className="font-display"
                    style={{ fontSize: "20px", color: "#262033", fontWeight: 700 }}
                  >
                    $19,999 MXN · pago único
                  </div>

                  <div
                    className="font-sans"
                    style={{ fontSize: "12px", color: "#999", marginTop: "16px", marginBottom: "4px" }}
                  >
                    Servicio mensual
                  </div>
                  <div
                    className="font-display"
                    style={{ fontSize: "32px", color: "#262033", fontWeight: 800 }}
                  >
                    $7,000 – $12,000 MXN
                  </div>
                  <div className="font-sans" style={{ fontSize: "13px", color: "#999", marginTop: "2px" }}>
                    según volumen de tu clínica
                  </div>
                </div>


                <ul>
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 font-sans"
                      style={{ fontSize: "14px", color: "#444", marginBottom: "10px" }}
                    >
                      <CheckCircle size={18} color="#1DB86B" className="mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="flex items-start gap-2"
                  style={{
                    backgroundColor: "#F0FFF4",
                    borderRadius: "12px",
                    padding: "14px 16px",
                    marginTop: "20px",
                  }}
                >
                  <ShieldCheck size={16} color="#1DB86B" className="mt-0.5 shrink-0" />
                  <p className="font-sans" style={{ fontSize: "13px", color: "#555" }}>
                    Si no se paga solo en 30 días, trabajamos gratis hasta lograrlo.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECCIÓN 3: OTROS SERVICIOS */}
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
            <h2
              className="text-center font-display text-[28px] md:text-[36px]"
              style={{ color: "#ffffff", marginBottom: "48px", fontWeight: 700 }}
            >
              Soluciones digitales para cualquier negocio
            </h2>
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

      {/* SECCIÓN 4: CTA FINAL */}
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
