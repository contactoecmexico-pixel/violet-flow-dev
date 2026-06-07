import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  BadgeCheck,
  MessageCircle,
  Info,
  Calendar,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import whatsappMockup from "@/assets/whatsapp-mockup.png.asset.json";

const WA_MAIN = "https://wa.me/+527713429112";
const WA_BOT =
  "https://wa.me/+527713429112?text=Hola%2C%20buenas%20tardes%2C%20quisiera%20informaci%C3%B3n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ecoweb — Asistente de WhatsApp para clínicas dentales" },
      {
        name: "description",
        content:
          "Un asistente que atiende por WhatsApp 24/7: agenda citas, responde preguntas y confirma asistencias. Para clínicas dentales en México.",
      },
      {
        property: "og:title",
        content: "ecoweb — Asistente de WhatsApp para clínicas dentales",
      },
      {
        property: "og:description",
        content:
          "Pacientes que preguntan a las 11 de la noche. Citas en tu agenda el lunes por la mañana.",
      },
    ],
  }),
  component: HomePage,
});

function PrimaryButton({
  href,
  children,
  full = false,
  large = false,
}: {
  href: string;
  children: React.ReactNode;
  full?: boolean;
  large?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-md font-sans font-medium text-white transition-colors ${full ? "w-full" : ""} ${large ? "px-8 py-4 text-lg" : "px-6 py-3"}`}
      style={{ backgroundColor: "#1DB86B" }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0F6E56")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1DB86B")}
    >
      {children}
    </a>
  );
}

function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-md border-2 px-6 py-3 font-sans font-medium transition-colors"
      style={{ borderColor: "#1DB86B", color: "#1DB86B", backgroundColor: "transparent" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(29,184,107,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      {children}
    </a>
  );
}

function HomePage() {
  return (
    <>
      {/* SECCIÓN 1 — HERO */}
      <section
        style={{ backgroundColor: "#262033", minHeight: "680px", overflow: "visible" }}
        className="relative px-6 pb-20 pt-[60px] md:pb-[80px] md:pt-[100px]"
      >
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 md:grid-cols-[55%_45%] md:gap-12">
          <Reveal>
            <div className="text-left">
              <p
                className="font-sans"
                style={{
                  color: "#1DB86B",
                  fontSize: "13px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                  fontWeight: 400,
                }}
              >
                Para clínicas dentales de 1 a 10 sillones en México
              </p>
              <h1
                className="font-display text-[32px] md:text-[52px]"
                style={{ color: "#FFFFFF", fontWeight: 800, lineHeight: 1.15 }}
              >
                Pacientes que preguntan a las 11 de la noche. Citas en tu agenda el
                lunes por la mañana.
              </h1>
              <p
                className="font-sans text-[17px] md:text-[20px]"
                style={{ color: "#CCCCCC", marginTop: "20px", fontWeight: 400 }}
              >
                Un asistente que atiende por WhatsApp las 24 horas: agenda citas,
                responde preguntas y confirma asistencias. Nosotros lo instalamos, lo
                entrenamos y lo gestionamos. Tú no tocas nada.
              </p>
              <p
                className="font-sans"
                style={{ color: "#999999", marginTop: "16px", fontSize: "15px", fontWeight: 400 }}
              >
                Sin contrato de permanencia. Si no recupera su costo en 30 días,
                trabajamos gratis hasta lograrlo.
              </p>
              <div className="mt-8 flex">
                <PrimaryButton href={WA_MAIN} large>
                  Quiero mi asistente 24/7 →
                </PrimaryButton>
              </div>
              <p
                className="font-sans"
                style={{ color: "#777", marginTop: "12px", fontSize: "13px", fontWeight: 400 }}
              >
                {"\u200B"}
              </p>
            </div>
          </Reveal>

          <div
            className="relative order-last md:order-none flex justify-center md:block"
            style={{ position: "relative", overflow: "visible", minHeight: "600px" }}
          >
            <img
              src={whatsappMockup.url}
              alt="Mockup de conversación de WhatsApp con el asistente"
              className="md:absolute"
              style={{
                height: "100%",
                minHeight: "600px",
                maxHeight: "750px",
                width: "auto",
                objectFit: "contain",
                bottom: 0,
                right: 0,
                filter: "drop-shadow(0 20px 60px rgba(29,184,107,0.15))",
              }}
            />
          </div>
        </div>
      </section>



      {/* SECCIÓN 2 — TRUST STRIP */}
      <section style={{ backgroundColor: "#1E1730" }} className="px-6 py-8">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 gap-3 md:flex md:flex-row md:items-center md:justify-between md:gap-0">
            {[
              { Icon: ShieldCheck, text: "Sin contrato de permanencia" },
              { Icon: BadgeCheck, text: "Garantía de resultados en 30 días" },
              { Icon: MessageCircle, text: "Funciona por WhatsApp — donde ya están tus pacientes" },
            ].map(({ Icon, text }, i, arr) => (
              <div
                key={text}
                className="flex flex-1 items-center justify-center gap-3 md:px-4"
                style={
                  i < arr.length - 1
                    ? { borderRight: "1px solid #333" }
                    : undefined
                }
              >
                <Icon size={20} color="#1DB86B" />
                <span
                  className="font-sans"
                  style={{ color: "#CCCCCC", fontSize: "14px", fontWeight: 400 }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 — BENEFICIOS */}
      <section
        style={{ backgroundColor: "#F5F7F5" }}
        className="px-6 py-12 md:py-20"
      >
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <h2
              className="text-center font-display text-[28px] md:text-[36px]"
              style={{ color: "#262033", fontWeight: 700 }}
            >
              Lo que cambia cuando tu clínica no para de trabajar
            </h2>
            <p
              className="mx-auto text-center font-sans"
              style={{
                color: "#666",
                fontSize: "17px",
                maxWidth: "600px",
                marginTop: "12px",
                fontWeight: 400,
              }}
            >
              No son funciones. Son las cuatro cosas que dejan de quitarte el sueño
              desde la primera semana.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                title: "Tu clínica responde cuando tú ya no puedes",
                body: (
                  <>
                    El 35% de los pacientes que buscan dentista lo hacen después de
                    las 8 PM. Tu asistente los atiende en menos de 5 segundos:
                    responde precios, da información de servicios y agenda la cita
                    antes de que alguien más lo haga.
                    <br />
                    <br />
                    Sin personal extra. Sin que tu equipo esté disponible fuera de
                    horario.
                  </>
                ),
              },
              {
                title: "El lunes empiezas con la agenda confirmada",
                body: (
                  <>
                    El sistema manda recordatorios 24 horas antes de cada cita. El
                    paciente responde con un simple "sí" o "no". Tú llegas sabiendo
                    exactamente qué esperar, sin sorpresas a las 9 de la mañana.
                    <br />
                    <br />
                    Las clínicas que usan recordatorios automáticos por WhatsApp
                    reducen sus no-shows entre un 40 y un 80%.
                  </>
                ),
              },
              {
                title: "Tu recepcionista atiende personas, no mensajes",
                body: (
                  <>
                    Las 2 o 3 horas diarias que tu equipo dedica a confirmar citas
                    por teléfono se convierten en atención presencial de calidad. El
                    asistente cubre lo operativo para que ellos puedan enfocarse en
                    lo que realmente importa: el paciente que ya está en la clínica.
                  </>
                ),
              },
              {
                title: "Nosotros lo gestionamos. Tú no tocas nada.",
                body: (
                  <>
                    No hay software que instalar. No hay cuenta que administrar. No
                    hay curva de aprendizaje para tu equipo.
                    <br />
                    <br />
                    Levantamos la información de tu clínica, entrenamos el asistente
                    con tus servicios y precios, y lo mantenemos actualizado. Si
                    algo cambia en tu clínica, nos mandas un mensaje y lo ajustamos
                    ese día.
                  </>
                ),
              },
            ].map((card) => (
              <Reveal key={card.title}>
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                    padding: "32px",
                    borderLeft: "4px solid #1DB86B",
                    height: "100%",
                  }}
                >
                  <h3
                    className="font-display"
                    style={{ color: "#262033", fontSize: "20px", fontWeight: 700 }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="font-sans"
                    style={{
                      color: "#555",
                      fontSize: "15px",
                      marginTop: "12px",
                      lineHeight: 1.7,
                      fontWeight: 400,
                    }}
                  >
                    {card.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 — CÓMO FUNCIONA */}
      <section
        style={{ backgroundColor: "#262033" }}
        className="px-6 py-12 md:py-20"
      >
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <h2
              className="text-center font-display text-[28px] md:text-[36px]"
              style={{ color: "#FFFFFF", fontWeight: 700 }}
            >
              Sin reuniones largas, sin manuales, sin complicaciones.
            </h2>
            <p
              className="text-center font-sans"
              style={{ color: "#CCCCCC", fontSize: "17px", marginTop: "8px", fontWeight: 400 }}
            >
              Tres pasos. Todo lo hacemos nosotros.
            </p>
          </Reveal>

          <div className="relative mt-12">
            {/* línea punteada desktop */}
            <div
              className="absolute left-0 right-0 hidden md:block"
              style={{
                top: "26px",
                height: 0,
                borderTop: "2px dashed #444",
                marginLeft: "16.66%",
                marginRight: "16.66%",
              }}
            />
            <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
              {[
                {
                  n: "1",
                  title: "Nos compartes la información de tu clínica",
                  body:
                    "Servicios, precios, horarios y conversaciones comunes. ",
                },
                {
                  n: "2",
                  title: "Instalamos y entrenamos tu asistente",
                  body:
                    "Configuramos el sistema, lo entrenamos con los datos reales de tu clínica y hacemos pruebas antes de activarlo. Tú apruebas cómo suena antes de que hable con un solo paciente.",
                },
                {
                  n: "3",
                  title: "Tu asistente empieza a trabajar",
                  body:
                    "Desde el primer día atiende mensajes, agenda citas y confirma asistencias.",
                },
              ].map((step) => (
                <Reveal key={step.n}>
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="font-display"
                      style={{
                        backgroundColor: "#1DB86B",
                        color: "#FFFFFF",
                        fontWeight: 800,
                        fontSize: "24px",
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {step.n}
                    </div>
                    <h3
                      className="font-display"
                      style={{
                        color: "#FFFFFF",
                        fontSize: "20px",
                        fontWeight: 700,
                        marginTop: "16px",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="font-sans"
                      style={{
                        color: "#CCCCCC",
                        fontSize: "15px",
                        marginTop: "8px",
                        maxWidth: "300px",
                        fontWeight: 400,
                      }}
                    >
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 — MIRA CÓMO FUNCIONA + AGENDA */}
      <section
        style={{ backgroundColor: "#F5F7F5" }}
        className="px-6 py-12 md:py-20"
      >
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-2">
          {/* Columna izquierda */}
          <Reveal>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                height: "100%",
              }}
            >
              <h3
                className="font-display"
                style={{ color: "#262033", fontSize: "24px", fontWeight: 700 }}
              >
                Mira cómo funciona en la práctica
              </h3>
              <p
                className="font-sans"
                style={{
                  color: "#555",
                  fontSize: "15px",
                  marginTop: "12px",
                  lineHeight: 1.7,
                  fontWeight: 400,
                }}
              >
                Escribe a este número y chatea como si fueras un paciente. Pregunta
                precios, pide una cita, consulta horarios — lo que sea. Así funciona
                el asistente que instalamos en tu clínica.
              </p>
              <div style={{ marginTop: "24px" }}>
                <PrimaryButton href={WA_BOT} full>
                  Escribir por WhatsApp →
                </PrimaryButton>
              </div>
              <p
                className="font-sans"
                style={{ color: "#888", fontSize: "13px", marginTop: "16px", fontWeight: 400 }}
              >
                Prueba preguntar cosas como:
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {[
                  "¿Cuánto cuesta una limpieza?",
                  "¿Tienen horario el sábado?",
                  "Quiero agendar para el viernes",
                ].map((c) => (
                  <span
                    key={c}
                    className="font-sans"
                    style={{
                      backgroundColor: "#F0FFF4",
                      border: "1px solid rgba(29,184,107,0.3)",
                      borderRadius: "20px",
                      padding: "6px 14px",
                      fontSize: "13px",
                      color: "#555",
                      fontWeight: 400,
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Columna derecha */}
          <Reveal>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                height: "100%",
              }}
            >
              <h3
                className="font-display"
                style={{ color: "#262033", fontSize: "24px", fontWeight: 700 }}
              >
                Calendario del asistente en vivo
              </h3>
              <p
                className="font-sans"
                style={{ color: "#555", fontSize: "15px", marginTop: "12px", fontWeight: 400, lineHeight: 1.7 }}
              >
                Cuando le pides una cita al asistente por WhatsApp, la agenda
                directamente aquí. Así se ve en tiempo real.
              </p>
              <div
                style={{
                  backgroundColor: "#F0FFF4",
                  borderRadius: "12px",
                  padding: "14px 16px",
                  marginTop: "16px",
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <Info size={16} color="#1DB86B" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span
                  className="font-sans"
                  style={{ color: "#555", fontSize: "13px", fontWeight: 400 }}
                >
                  Escríbele al asistente y pide una cita. Regresa a esta página y
                  verás tu cita reflejada en el calendario.
                </span>
              </div>
              <div
                style={{
                  backgroundColor: "#F9FAF9",
                  border: "2px dashed #DDD",
                  borderRadius: "12px",
                  height: "400px",
                  marginTop: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Calendar size={40} color="#CCC" />
                <p
                  className="font-sans"
                  style={{ color: "#999", fontSize: "15px", marginTop: "12px", fontWeight: 400 }}
                >
                  Calendario — próximamente
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECCIÓN 6 — CTA FINAL */}
      <section
        style={{ backgroundColor: "#262033" }}
        className="px-6 py-20"
      >
        <div className="mx-auto max-w-[700px] text-center">
          <Reveal>
            <h2
              className="font-display text-[28px] md:text-[36px]"
              style={{ color: "#FFFFFF", fontWeight: 800 }}
            >
              ¿Quieres un asistente que trabaje mientras tu clínica descansa?
            </h2>
            <p
              className="font-sans"
              style={{ color: "#CCCCCC", fontSize: "18px", marginTop: "16px", fontWeight: 400 }}
            >
              Agenda una llamada con nosotros y descubre como podemos ayudarte.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-4 md:flex-row md:items-center">
              <PrimaryButton href={WA_MAIN}>Quiero mi asistente 24/7 →</PrimaryButton>
              <SecondaryButton href={WA_BOT}>
                Cotiza ahora
              </SecondaryButton>
            </div>
            <p
              className="font-sans"
              style={{ color: "#999", fontSize: "14px", marginTop: "12px", fontWeight: 400 }}
            >
              Sin compromiso. Sin tarjeta de crédito. Sin presión.
            </p>
            <p
              className="font-sans"
              style={{ color: "#1DB86B", fontSize: "13px", marginTop: "8px", fontWeight: 400 }}
            >
              Si no se paga solo en 30 días, trabajamos gratis hasta lograrlo.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
