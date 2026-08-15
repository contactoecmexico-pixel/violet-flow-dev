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
          "Sistemas conversacionales con IA instalados y gestionados para clínicas dentales en México.",
      },
      { property: "og:title", content: "Servicios | ecoweb" },
      {
        property: "og:description",
        content:
          "Tecnología que trabaja. Sin que tú la toques. Asistente con IA por WhatsApp para clínicas dentales.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Servicios,
});

const PLANS = [
  {
    name: "Base",
    volume: "hasta 2,100 conversaciones/mes (~70 al día)",
    price: "$8,000 MXN",
  },
  {
    name: "Tramo 2",
    volume: "hasta 3,000 conversaciones/mes (~100 al día)",
    price: "$10,500 MXN",
  },
  {
    name: "Tramo 3",
    volume: "hasta 4,500 conversaciones/mes (~150 al día)",
    price: "$13,500 MXN",
  },
];

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
              dentales en México.
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
                  agenda citas en tu calendario, y confirma asistencias automáticamente,
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
                  Diseñado para clínicas de 2 a 15 sillones en México.
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
                    $24,000 MXN (IVA incluido) · pago único
                  </div>
                  <div
                    className="font-sans"
                    style={{ fontSize: "13px", color: "#666", marginTop: "6px", lineHeight: 1.6 }}
                  >
                    Se paga en dos partes: 50% al arrancar y 50% cuando el sistema ya está
                    funcionando en tu clínica.
                  </div>

                  <div
                    className="font-sans"
                    style={{ fontSize: "12px", color: "#999", marginTop: "20px", marginBottom: "8px" }}
                  >
                    Servicio mensual
                  </div>
                  <ul>
                    {PLANS.map((p) => (
                      <li
                        key={p.name}
                        style={{
                          borderTop: "1px solid #eee",
                          paddingTop: "10px",
                          paddingBottom: "10px",
                        }}
                      >
                        <div
                          className="flex flex-wrap items-baseline justify-between gap-2 font-display"
                          style={{ fontSize: "16px", color: "#262033", fontWeight: 700 }}
                        >
                          <span>{p.name}</span>
                          <span style={{ color: "#1DB86B", whiteSpace: "nowrap" }}>
                            {p.price}
                          </span>
                        </div>
                        <div
                          className="font-sans"
                          style={{ fontSize: "13px", color: "#777", marginTop: "2px" }}
                        >
                          {p.volume}
                        </div>
                      </li>
                    ))}
                    <li
                      className="font-sans"
                      style={{
                        borderTop: "1px solid #eee",
                        paddingTop: "10px",
                        fontSize: "13px",
                        color: "#777",
                      }}
                    >
                      Más de 4,500 conversaciones/mes: cotización según necesidades.
                    </li>
                  </ul>
                  <p
                    className="font-sans"
                    style={{ fontSize: "13px", color: "#666", marginTop: "12px", lineHeight: 1.6 }}
                  >
                    Los tres planes incluyen el sistema completo. Pagas por volumen
                    atendido, no por funciones desbloqueadas.
                  </p>
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

      {/* SECCIÓN 3: CIERRE */}
      <section style={{ backgroundColor: "#262033", padding: "80px 16px" }}>
        <div className="mx-auto text-center" style={{ maxWidth: "700px" }}>
          <Reveal>
            <h2
              className="font-display text-[28px] md:text-[36px]"
              style={{ color: "#ffffff", fontWeight: 800 }}
            >
              ¿No sabes en qué plan caes?
            </h2>
            <p
              className="font-sans"
              style={{ fontSize: "17px", color: "#CCCCCC", marginTop: "16px", lineHeight: 1.7 }}
            >
              No lo vas a saber hasta que veamos cuántas conversaciones recibe tu clínica
              en un día normal. Casi nadie las tiene contadas. Agenda una llamada, lo
              revisamos juntos en 15 minutos, y arrancas en el plan Base los primeros 60
              días mientras el sistema mide tu volumen real.
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
          </Reveal>
        </div>
      </section>
    </main>
  );
}
