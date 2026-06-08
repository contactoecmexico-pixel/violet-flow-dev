import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/lp")({
  head: () => ({
    meta: [
      { title: "Asistente WhatsApp 24/7 para clínicas dentales | EcoWeb" },
      {
        name: "description",
        content:
          "Atiende, responde y agenda citas por WhatsApp 24/7 sin que tú ni tu equipo hagan nada. Para clínicas dentales en México.",
      },
    ],
  }),
  component: LP,
});

const WA = "https://wa.me/+527713429112";
const VIOLET = "#262033";
const VIOLET_2 = "#2E2841";
const MIST = "#F5F7F5";
const GREEN = "#1DB86B";
const FOREST = "#0F6E56";
const RED = "#E53E3E";

const fmt = (n: number) =>
  "$" + Math.round(n).toLocaleString("en-US").replace(/,/g, ",") + " MXN";
const fmtNoUnit = (n: number) =>
  "$" + Math.round(n).toLocaleString("en-US");

/* ------------------------ PRIMITIVES ------------------------ */

function Section({
  dark,
  children,
  wide = false,
  className = "",
}: {
  dark?: boolean;
  children: React.ReactNode;
  wide?: boolean;
  className?: string;
}) {
  return (
    <section
      className={`px-4 py-12 md:py-20 ${className}`}
      style={{ backgroundColor: dark ? VIOLET : MIST }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: wide ? 1100 : 800 }}
      >
        {children}
      </div>
    </section>
  );
}

function PrimaryCTA({
  href = WA,
  children,
  big = false,
  external = true,
}: {
  href?: string;
  children: React.ReactNode;
  big?: boolean;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-block rounded-lg font-display font-bold text-white transition-colors"
      style={{
        backgroundColor: GREEN,
        padding: big ? "18px 40px" : "14px 28px",
        fontSize: big ? 18 : 16,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = FOREST)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = GREEN)}
    >
      {children}
    </a>
  );
}

/* ------------------------ DENTAL CHAIR ------------------------ */

function Chair({ lost, ticket }: { lost: boolean; ticket: number }) {
  const color = lost ? RED : GREEN;
  return (
    <div className="flex flex-col items-center" style={{ minWidth: 56 }}>
      <svg
        width="44"
        height="44"
        viewBox="0 0 64 64"
        style={{
          color,
          opacity: lost ? 0.45 : 1,
          filter: lost ? "none" : `drop-shadow(0 0 6px ${GREEN}80)`,
          transition: "all 0.3s ease",
        }}
        fill="currentColor"
      >
        <path d="M14 10h6v22h-6z" />
        <path d="M18 32h28a4 4 0 014 4v6H14v-6a4 4 0 014-4z" />
        <path d="M20 42h24v6H20z" />
        <path d="M28 48h8v8h-8z" />
        <circle cx="48" cy="14" r="4" />
        <path d="M46 18h4v14h-4z" />
      </svg>
      <span
        className="mt-1 font-sans text-[11px]"
        style={{ color: lost ? RED : "#888", opacity: lost ? 1 : 0.6 }}
      >
        {lost ? fmtNoUnit(ticket) : ""}
      </span>
    </div>
  );
}

/* ------------------------ MAIN PAGE ------------------------ */

function LP() {
  // Calc 1 inputs
  const [ticket, setTicket] = useState(1500);
  const [msgsWeek, setMsgsWeek] = useState(30);
  const [convPct, setConvPct] = useState(30); // % lost
  const [closedDays, setClosedDays] = useState(2);

  // Calc 2 input
  const [plan, setPlan] = useState(7000);

  const calc = useMemo(() => {
    const lostPatientsMonth = Math.round(msgsWeek * (convPct / 100) * 4);
    const lostMoneyMonth = lostPatientsMonth * ticket;
    const lostYear = lostMoneyMonth * 12;

    const breakeven = Math.ceil(plan / ticket);
    const extraMonth = lostMoneyMonth - plan;
    const extraYear = extraMonth * 12;
    const roiPct =
      plan > 0
        ? ((lostMoneyMonth * 12 - plan * 12) / (plan * 12)) * 100
        : 0;

    return {
      lostPatientsMonth,
      lostMoneyMonth,
      lostYear,
      breakeven,
      extraMonth,
      extraYear,
      roiPct,
    };
  }, [ticket, msgsWeek, convPct, closedDays, plan]);

  // chairs: 10 total. lost count = round(convPct/10)
  const lostChairs = Math.min(10, Math.max(0, Math.round(convPct / 10)));

  // break-even bar
  const barTotal = Math.max(calc.lostMoneyMonth, plan);
  const planPct = barTotal > 0 ? (plan / barTotal) * 100 : 100;
  const negative = calc.extraMonth < 0;

  return (
    <div>
      {/* SECCIÓN 1 — HERO */}
      <Section dark>
        <Reveal>
          <div className="text-center">
            <h1
              className="font-display font-extrabold text-white"
              style={{ fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.1 }}
            >
              ¿Cuántos pacientes te escribieron anoche y se fueron con tu competencia?
            </h1>
            <p
              className="mx-auto mt-4 font-sans"
              style={{
                color: "#CCCCCC",
                fontSize: "clamp(17px, 1.8vw, 20px)",
                maxWidth: 720,
              }}
            >
              EcoWeb instala un asistente que atiende, responde y agenda citas por WhatsApp
              24/7. Sin que tú ni tu equipo hagan nada.
            </p>
            <p
              className="mx-auto mt-6 font-sans text-base"
              style={{ color: "#999999", maxWidth: 680 }}
            >
              35% de tus pacientes potenciales te buscan después de las 8 PM. A esa hora, tu
              clínica ya cerró. Los que no reciben respuesta no esperan hasta mañana.
            </p>
            <div className="mt-8">
              <PrimaryCTA href="#oferta" external={false}>
                Ver cómo funciona →
              </PrimaryCTA>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* SECCIÓN 2 — PROBLEMA */}
      <Section>
        <Reveal>
          <h2
            className="font-display font-bold"
            style={{ color: VIOLET, fontSize: "clamp(28px, 3.5vw, 36px)" }}
          >
            El lunes más caro de la semana
          </h2>
          <div className="mt-6 space-y-5 font-sans text-base" style={{ color: "#444444" }}>
            <p>Es lunes en la mañana y ya arrancaste atrás.</p>
            <p>
              Tu recepcionista llegó y tiene 30 mensajes sin responder del fin de semana.
              Pacientes que preguntaron precios de brackets el sábado a las 9 de la noche.
              Pacientes que querían saber si aceptas su seguro el domingo a las 11. Tres
              personas que escribieron con dolor de muela y nunca recibieron respuesta.
            </p>
            <p>
              De esos 30, quizá 5 todavía están esperando. Los otros 25 ya agendaron en otro
              lado.
            </p>
            <p>
              Y lo peor no es perder esos pacientes. Lo peor es que ya sabes que va a pasar
              otra vez el próximo fin de semana. Y el siguiente. Y que no hay absolutamente
              nada que puedas hacer desde tu sillón con las manos dentro de la boca de otro
              paciente.
            </p>
            <p>
              Meses así se acumulan. Las citas vacías se acumulan. Y sin que te des cuenta,
              tu clínica está perdiendo entre $30,000 y $80,000 pesos al mes. No porque no
              haya pacientes buscándote, sino porque nadie les está respondiendo cuando
              preguntan.
            </p>
            <p>
              Ese número no aparece en ningún estado de cuenta. No hay una factura que diga
              "pacientes perdidos por no responder". Pero está ahí. Todos los meses.
              Silencioso.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* SECCIÓN 3 — SOLUCIÓN */}
      <Section dark>
        <Reveal>
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}
          >
            Hay una razón por la que esto sigue pasando. Y no es culpa tuya
          </h2>
          <div className="mt-6 space-y-5 font-sans text-base" style={{ color: "#CCCCCC" }}>
            <p>La razón es simple: no puedes estar en dos lugares al mismo tiempo.</p>
            <p>
              No puedes atender a un paciente con la silla inclinada y al mismo tiempo
              responder WhatsApps de pacientes nuevos. No puedes pedirle a tu recepcionista
              que atienda presencialmente Y responda mensajes fuera de horario Y haga
              confirmaciones telefónicas Y llame a los no-shows.
            </p>
            <p>
              El problema no es tu equipo. El problema es que nadie cubre el canal de las 8
              PM a las 8 AM.
            </p>
          </div>
          <div
            className="mt-8 rounded-r-lg p-6"
            style={{
              backgroundColor: VIOLET_2,
              borderLeft: `4px solid ${GREEN}`,
            }}
          >
            <p className="font-sans text-base text-white">
              Somos EcoWeb. Instalamos y gestionamos sistemas conversacionales para clínicas
              dentales en México. Específicamente para clínicas de 1 a 15 sillones como la
              tuya.
            </p>
          </div>
          <div className="mt-6 space-y-5 font-sans text-base" style={{ color: "#CCCCCC" }}>
            <p>
              Queremos instalarte un asistente que responda por WhatsApp cuando tu clínica
              cierra. Que atienda los mensajes de las 11 PM. Que agende citas para el lunes.
              Que responda precios y confirme citas automáticamente para reducir tus
              no-shows.
            </p>
            <p>
              Tú no tocas nada. Ni lo configuras, ni lo actualizas, ni lo mantienes.
              Nosotros nos encargamos de todo.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* SECCIÓN 4 — CREDENCIALES */}
      <Section>
        <Reveal>
          <h2
            className="font-display font-bold"
            style={{ color: VIOLET, fontSize: "clamp(28px, 3.5vw, 36px)" }}
          >
            Lo que dicen los números del mercado dental en México
          </h2>
          <p className="mt-4 font-sans text-base" style={{ color: "#666" }}>
            Antes de hablar de EcoWeb, hablan los datos:
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {[
              {
                n: "35%",
                t: "de los pacientes que buscan dentista lo hacen después de las 8 PM, cuando la mayoría de las clínicas ya cerraron",
              },
              {
                n: "25-40%",
                t: "de las citas en clínicas sin confirmación automática terminan en no-show",
              },
              {
                n: "40-80%",
                t: "reducción de no-shows en clínicas que activaron recordatorios automáticos por WhatsApp",
              },
              {
                n: "60%",
                t: "de las citas nuevas se agendan fuera del horario laboral una vez que hay respuesta activa 24/7",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="rounded-xl bg-white p-6"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
              >
                <div
                  className="font-display font-extrabold"
                  style={{ color: GREEN, fontSize: 40 }}
                >
                  {c.n}
                </div>
                <p className="mt-2 font-sans text-[15px]" style={{ color: "#555" }}>
                  {c.t}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex justify-center">
            <div
              className="w-full rounded-xl bg-white p-6 md:w-[calc(50%-10px)]"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
            >
              <div
                className="font-display font-extrabold"
                style={{ color: GREEN, fontSize: 40 }}
              >
                8-12
              </div>
              <p className="mt-2 font-sans text-[15px]" style={{ color: "#555" }}>
                citas recuperadas al mes en promedio durante los primeros 30 días, que antes
                simplemente no existían
              </p>
            </div>
          </div>
          <p
            className="mt-8 text-center font-sans text-base italic"
            style={{ color: "#666" }}
          >
            No son promesas. Son resultados de clínicas dentales con el mismo perfil que el
            tuyo.
          </p>
        </Reveal>
      </Section>

      {/* SECCIÓN 5 — BENEFICIOS */}
      <Section dark>
        <Reveal>
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}
          >
            Lo que cambia en tu clínica y en tu vida desde la primera semana
          </h2>
          <div className="mt-10 space-y-10">
            {[
              {
                h: "Tu clínica ya no pierde el fin de semana.",
                t: "Los pacientes que escriben el viernes a las 9 PM reciben respuesta en 1 minuto. Precios, horarios, información del doctor. Si quieren agendar, quedan agendados antes de que te vayas a dormir. El lunes llegas con una agenda más llena — sin haber hecho absolutamente nada.",
              },
              {
                h: "Dejas de revisar el WhatsApp entre paciente y paciente.",
                t: "Hay alguien cubriendo ese canal. Cuando volteas el teléfono ya no hay 15 mensajes urgentes esperando — hay citas nuevas confirmadas. La sensación de \"estoy perdiendo pacientes mientras atiendo pacientes\" desaparece.",
              },
              {
                h: "Tu recepcionista deja de ser operadora telefónica.",
                t: "Las 2-3 horas diarias que tu equipo gasta llamando para confirmar citas se convierten en atención presencial de calidad. El sistema confirma automáticamente 24 horas antes — el paciente responde \"Sí\" o \"No\" y tú ya sabes qué esperar el día siguiente.",
              },
              {
                h: "Tus pacientes notan la diferencia.",
                t: "Respuesta inmediata. Lenguaje natural y profesional, en el español que usamos en México. Sin esperas, sin errores, sin \"te llamo en un momento\". La percepción de tu clínica cambia: de \"el consultorio que a veces contesta\" a \"la clínica que siempre está disponible\". Eso construye reputación — y la reputación trae referidos.",
              },
              {
                h: "Y tú no configuras nada. Nunca.",
                t: "No hay cuenta nueva que administrar. No hay nada que romper. Nosotros lo instalamos, lo entrenamos con los datos de tu clínica, y lo mantenemos. Si algo cambia, ya sea precios, horarios o doctores, nos mandas un mensaje y lo actualizamos ese día.",
              },
            ].map((b, i) => (
              <div key={i}>
                <h3
                  className="font-display font-bold"
                  style={{ color: GREEN, fontSize: 20 }}
                >
                  {b.h}
                </h3>
                <p className="mt-3 font-sans text-base" style={{ color: "#CCCCCC" }}>
                  {b.t}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* SECCIÓN 6 — CALCULADORAS */}
      <Section wide>
        <Reveal>
          <h2
            className="font-display font-bold"
            style={{ color: VIOLET, fontSize: "clamp(28px, 3.5vw, 36px)" }}
          >
            ¿Cuánto está perdiendo tu clínica?
          </h2>
          <p className="mt-3 font-sans text-base" style={{ color: "#666" }}>
            Mueve los controles para ver un estimado basado en los datos de tu consultorio.
          </p>

          {/* Sliders */}
          <div className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-2">
            <SliderRow
              label="Ticket promedio por paciente"
              value={`$${ticket.toLocaleString("en-US")} MXN`}
            >
              <Slider
                value={[ticket]}
                onValueChange={(v) => setTicket(v[0])}
                min={500}
                max={5000}
                step={100}
              />
            </SliderRow>
            <SliderRow
              label="Mensajes fuera de horario por semana"
              value={`${msgsWeek}`}
            >
              <Slider
                value={[msgsWeek]}
                onValueChange={(v) => setMsgsWeek(v[0])}
                min={5}
                max={200}
                step={5}
              />
            </SliderRow>
            <SliderRow
              label="De cada 10 que escriben, ¿cuántos agendan?"
              value={`${convPct}%`}
            >
              <Slider
                value={[convPct]}
                onValueChange={(v) => setConvPct(v[0])}
                min={10}
                max={80}
                step={5}
              />
            </SliderRow>
            <SliderRow
              label="Días que cierra la clínica por semana"
              value={`${closedDays}`}
            >
              <Slider
                value={[closedDays]}
                onValueChange={(v) => setClosedDays(v[0])}
                min={1}
                max={3}
                step={1}
              />
            </SliderRow>
          </div>

          {/* Result cards */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            <ResultCard label="Pacientes perdidos / mes" value={calc.lostPatientsMonth.toString()} color={RED} />
            <ResultCard label="Dinero perdido / mes" value={fmt(calc.lostMoneyMonth)} color={RED} />
            <ResultCard
              label="Pérdida proyectada / año"
              value={fmt(calc.lostYear)}
              color={RED}
              big
              outlined
            />
          </div>

          {/* Chairs */}
          <div className="mt-10">
            <p className="mb-4 font-sans text-sm" style={{ color: "#666" }}>
              De cada 10 pacientes potenciales, así se ven los que pierdes (en rojo) vs los que sí agendan (en verde):
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-5">
              {Array.from({ length: 10 }).map((_, i) => (
                <Chair key={i} lost={i < lostChairs} ticket={ticket} />
              ))}
            </div>
          </div>
        </Reveal>

        {/* CALCULADORA 2 */}
        <div className="mt-16">
          <Reveal>
            <h2
              className="font-display font-bold"
              style={{ color: VIOLET, fontSize: "clamp(28px, 3.5vw, 36px)" }}
            >
              ¿Cuánto ganarías con EcoWeb?
            </h2>
            <p className="mt-3 font-sans text-base" style={{ color: "#666" }}>
              Usamos los mismos datos de arriba. Solo agrega el plan de EcoWeb.
            </p>

            <div className="mt-8 max-w-md">
              <SliderRow
                label="Plan mensual de EcoWeb"
                value={`$${plan.toLocaleString("en-US")} MXN/mes`}
              >
                <Slider
                  value={[plan]}
                  onValueChange={(v) => setPlan(v[0])}
                  min={7000}
                  max={12000}
                  step={500}
                />
              </SliderRow>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              <ResultCard
                label="Citas para cubrir el costo de EcoWeb"
                value={`${calc.breakeven} citas/mes`}
                color={GREEN}
                sub={`Solo necesitas recuperar ${calc.breakeven} citas al mes para que se pague solo`}
              />
              <ResultCard
                label="Ingreso adicional estimado / mes"
                value={fmt(Math.max(calc.extraMonth, 0))}
                color={GREEN}
              />
              <ResultCard
                label="Ingreso adicional estimado / año"
                value={fmt(Math.max(calc.extraYear, 0))}
                color={GREEN}
                big
              />
              <ResultCard
                label="ROI proyectado a 12 meses"
                value={`${Math.round(calc.roiPct)}%`}
                color={GREEN}
                big
                sub={`${fmt(Math.max(calc.extraYear, 0))} de retorno`}
              />
            </div>

            {/* Break-even bar */}
            <div className="mt-10">
              {negative ? (
                <div>
                  <div
                    className="rounded-lg"
                    style={{ height: 40, backgroundColor: RED, opacity: 0.85 }}
                  />
                  <p className="mt-3 font-sans text-sm" style={{ color: RED }}>
                    Con este volumen de mensajes, el plan seleccionado puede no ser la mejor
                    opción. Contáctanos para un plan ajustado.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="mb-2 flex justify-between font-sans text-xs" style={{ color: "#555" }}>
                    <span>Costo de EcoWeb: {fmt(plan)}</span>
                    <span>Ganancia neta: {fmt(calc.extraMonth)}</span>
                  </div>
                  <div
                    className="flex overflow-hidden rounded-lg"
                    style={{ height: 40 }}
                  >
                    <div
                      style={{
                        width: `${planPct}%`,
                        backgroundColor: RED,
                        opacity: 0.85,
                        transition: "width 0.3s",
                      }}
                    />
                    <div
                      style={{
                        width: `${100 - planPct}%`,
                        backgroundColor: GREEN,
                        transition: "width 0.3s",
                      }}
                    />
                  </div>
                  <p className="mt-2 text-center font-sans text-xs" style={{ color: "#666" }}>
                    Break-even mensual marcado donde termina el rojo
                  </p>
                </div>
              )}
            </div>

            {/* Closing block */}
            <div
              className="mt-12 rounded-2xl p-10 text-center"
              style={{ backgroundColor: VIOLET }}
            >
              <p className="font-display font-bold text-white" style={{ fontSize: 20 }}>
                Tu clínica está perdiendo {fmt(calc.lostYear)} al año.
              </p>
              <p
                className="mt-4 font-display font-extrabold"
                style={{ color: GREEN, fontSize: 28 }}
              >
                Con EcoWeb lo conviertes en {fmt(Math.max(calc.extraYear, 0))} de ganancia.
              </p>
              <div className="mt-8">
                <PrimaryCTA big>Quiero recuperar mi inversión →</PrimaryCTA>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* SECCIÓN 7 — OFERTA */}
      <Section className="scroll-mt-24" >
        <div id="oferta" />
        <Reveal>
          <h2
            className="font-display font-bold"
            style={{ color: VIOLET, fontSize: "clamp(28px, 3.5vw, 36px)" }}
          >
            Exactamente qué obtienes con EcoWeb Profesional
          </h2>
          <p className="mt-3 font-sans text-base" style={{ color: "#666" }}>
            Este es el plan que recomendamos para clínicas de 1-15 sillones:
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Asistente conversacional 24/7 por WhatsApp — responde en 1 minuto, cualquier hora del día, cualquier día del año",
              "Agendamiento en tiempo real — las citas van directo al calendario, sin dobles reservas ni errores",
              "Confirmaciones automáticas — el sistema manda recordatorio 24 horas antes; el paciente responde; tú sabes exactamente qué esperar cada día",
              "Revisión y optimización mensual — nuestro equipo revisa conversaciones reales y ajusta lo que sea necesario",
              "Soporte prioritario con respuesta en menos de 24 horas",
              "Instalación y configuración completa — absorbida",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full font-bold text-white"
                  style={{ backgroundColor: GREEN, fontSize: 14 }}
                >
                  ✓
                </span>
                <span className="font-sans text-base" style={{ color: "#333" }}>
                  {t}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-8 font-sans text-[15px]" style={{ color: "#666" }}>
            El setup normalmente cuesta $19,999 MXN. Incluye levantamiento de información de
            tu clínica, configuración técnica, entrenamiento del asistente con tus servicios
            y precios, pruebas de flujo y la primera semana de monitoreo intensivo.
          </p>

          <h3
            className="mt-12 font-display font-bold"
            style={{ color: VIOLET, fontSize: 24 }}
          >
            Tu inversión: $7,000 – $12,000 MXN/mes
          </h3>
          <p className="mt-3 font-sans text-[15px]" style={{ color: "#666" }}>
            El costo mensual se adapta al volumen real de mensajes de tu clínica. No es lo
            mismo una clínica que recibe 100 mensajes al mes que una que recibe 100 al día —
            y tú no deberías pagar por capacidad que no necesitas.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table
              className="w-full border-collapse overflow-hidden rounded-lg bg-white font-sans text-sm"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
            >
              <thead>
                <tr style={{ backgroundColor: VIOLET, color: "white" }}>
                  <th className="p-4 text-left">Concepto</th>
                  <th className="p-4 text-left">Costo</th>
                  <th className="p-4 text-left">Cobertura</th>
                </tr>
              </thead>
              <tbody style={{ color: "#444" }}>
                <tr style={{ borderBottom: "1px solid #eee" }}>
                  <td className="p-4">Recepcionista tiempo completo</td>
                  <td className="p-4">$12,000–$15,000/mes</td>
                  <td className="p-4">8 hrs/día, L-V, con vacaciones e incapacidades</td>
                </tr>
                <tr
                  style={{
                    backgroundColor: "#F0FFF4",
                    borderLeft: `4px solid ${GREEN}`,
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <td className="p-4 font-medium" style={{ color: VIOLET }}>
                    EcoWeb Profesional
                  </td>
                  <td className="p-4 font-medium" style={{ color: VIOLET }}>
                    $7,000–$12,000/mes
                  </td>
                  <td className="p-4">
                    24/7, 365 días, sin descansos, nosotros lo gestionamos
                  </td>
                </tr>
                <tr>
                  <td className="p-4">Pacientes perdidos fuera de horario</td>
                  <td className="p-4">$30,000–$80,000/mes</td>
                  <td className="p-4">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p
            className="mt-8 font-sans text-base"
            style={{ color: VIOLET, fontWeight: 500 }}
          >
            La matemática es clara: recuperar 5 citas al mes con ticket promedio de $1,500 =
            $7,500. El sistema ya se pagó. Todo lo demás es ganancia.
          </p>
        </Reveal>
      </Section>

      {/* SECCIÓN 8 — ESCASEZ */}
      <Section dark>
        <Reveal>
          <div className="mx-auto text-center" style={{ maxWidth: 700 }}>
            <h2 className="font-display font-bold text-white" style={{ fontSize: 28 }}>
              Una nota antes de seguir
            </h2>
            <div
              className="mt-6 space-y-5 text-left font-sans text-base"
              style={{ color: "#CCCCCC" }}
            >
              <p>Instalamos máximo 3 clínicas por semana.</p>
              <p>
                No es estrategia de marketing. Es una limitación real de nuestro proceso:
                cada instalación incluye levantamiento personalizado, configuración,
                entrenamiento, pruebas, y go-live acompañado. No podemos hacerlo bien si lo
                hacemos a granel.
              </p>
              <p>
                Casi siempre hay lugar en la semana siguiente. Pero el precio actual no va a
                durar indefinidamente. Estamos en fase de crecimiento y los precios se
                ajustan conforme crecemos.
              </p>
              <p>Si estás considerando esto, el momento de hacer la demo es ahora.</p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* SECCIÓN 9 — GARANTÍA */}
      <Section>
        <Reveal>
          <div
            className="mx-auto rounded-2xl bg-white p-10"
            style={{ border: `2px solid ${GREEN}`, maxWidth: 800 }}
          >
            <h2
              className="font-display font-bold"
              style={{ color: VIOLET, fontSize: 32 }}
            >
              Nuestro compromiso, sin letras chicas:
            </h2>
            <blockquote
              className="mt-6 rounded-lg p-6"
              style={{
                backgroundColor: "#F0FFF4",
                borderLeft: `4px solid ${GREEN}`,
              }}
            >
              <p
                className="font-display font-bold"
                style={{ color: VIOLET, fontSize: 20 }}
              >
                Si en los primeros 30 días el sistema no genera suficientes citas para
                cubrir su costo, seguimos trabajando gratis hasta lograrlo.
              </p>
            </blockquote>
            <div className="mt-6 space-y-5 font-sans text-base" style={{ color: "#555" }}>
              <p>
                No es un reembolso. Un reembolso termina la relación y te quedas sin
                solución. Nuestra garantía dice: "No nos vamos hasta que esto funcione."
              </p>
              <p>
                ¿Por qué podemos ofrecer esto? Porque nosotros controlamos el sistema.
                Sabemos qué ajustar si los números no cuadran. Y sabemos que para cualquier
                clínica con tráfico real de pacientes, el ROI llega — en el primer mes o en
                el segundo.
              </p>
              <p>
                El único requisito: que tu clínica tenga al menos 50 consultas entrantes al
                mes. Si tienes menos que eso, el problema que tienes no es el asistente — es
                captación, y eso es una conversación diferente.
              </p>
              <p>
                ¿Quieres irte después? Sin contrato de permanencia. Sin penalidades.
                Cancelas con 30 días de aviso. Eso es todo.
              </p>
            </div>
            <p
              className="mt-6 font-sans font-bold"
              style={{ color: VIOLET, fontSize: 18 }}
            >
              Cero riesgo para ti.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* SECCIÓN 10 — CTA PRINCIPAL */}
      <Section dark>
        <Reveal>
          <div className="mx-auto text-center" style={{ maxWidth: 700 }}>
            <h2
              className="font-display font-extrabold text-white"
              style={{ fontSize: "clamp(32px, 4vw, 40px)" }}
            >
              El siguiente paso son 15 minutos
            </h2>
            <div
              className="mt-6 space-y-5 text-left font-sans"
              style={{ color: "#CCCCCC", fontSize: 18 }}
            >
              <p>No una llamada de ventas. No un PDF con características.</p>
              <p>
                Agenda una llamada de 15 minutos y te mostramos cómo funciona el asistente
                . Ves cómo responde, cómo agenda, cómo suena. Y decides.
              </p>
              <p>
                Si te convence, te digo exactamente cuándo podemos instalarlo. Si no, no
                pierdes nada.
              </p>
            </div>
            <div className="mt-8">
              <PrimaryCTA big>Quiero mi asistente 24/7 →</PrimaryCTA>
            </div>
            <p className="mt-4 font-sans text-sm" style={{ color: "#999" }}>
              Sin compromiso. Sin tarjeta de crédito. Sin presión.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* SECCIÓN 11 — ADVERTENCIA */}
      <Section>
        <Reveal>
          <h2
            className="font-display font-bold"
            style={{ color: VIOLET, fontSize: 32 }}
          >
            Lo que pasa si esperas otro mes
          </h2>
          <div className="mt-6 space-y-5 font-sans text-base" style={{ color: "#555" }}>
            <p>Este lunes va a llegar igual que el anterior.</p>
            <p>
              Tu recepcionista va a entrar y encontrar los mensajes del fin de semana.
              Algunos pacientes todavía están esperando; la mayoría ya no. El sillón de las
              10 AM va a quedar vacío porque nadie confirmó la cita. Y tú vas a pasar el día
              atendiendo, sin poder hacer absolutamente nada al respecto.
            </p>
            <p>El siguiente fin de semana, igual.</p>
            <p>No es catastrofismo. Es aritmética.</p>
          </div>

          <div
            className="mt-10 rounded-xl p-8 text-center"
            style={{ backgroundColor: VIOLET }}
          >
            <p
              className="font-display font-extrabold"
              style={{ color: RED, fontSize: 24 }}
            >
              $40,000 al mes × 12 meses = $480,000 al año
            </p>
            <p className="mt-4 font-sans text-base" style={{ color: "#CCCCCC" }}>
              en pacientes que te buscaron, que querían atenderse contigo, y que se fueron
              con alguien que simplemente les contestó más rápido.
            </p>
          </div>

          <div className="mt-8 space-y-5 font-sans" style={{ color: "#555", fontSize: 18 }}>
            <p>El problema se resuelve una vez que decides.</p>
            <p>La única pregunta es: ¿cuántos lunes más vas a esperar?</p>
          </div>

          <div className="mt-8">
            <PrimaryCTA>Agenda tu demo ahora →</PrimaryCTA>
          </div>
        </Reveal>
      </Section>

      {/* SECCIÓN 12 — P.D. */}
      <Section dark className="!py-24 md:!py-28">
        <Reveal>
          <div className="mx-auto text-center" style={{ maxWidth: 700 }}>
            <p
              className="text-left font-sans text-base"
              style={{ color: "#CCCCCC" }}
            >
              <span
                className="font-display font-bold"
                style={{ color: GREEN }}
              >
                P.D.{" "}
              </span>
              Si llegaste hasta aquí, el dolor es real. Ya sabes que estás perdiendo
              pacientes fuera de horario. Ya sabes que tu recepcionista no puede cubrir las
              24 horas. Y ya sabes que no tienes tiempo de configurar otra herramienta.
            </p>
            <p
              className="mt-6 text-left font-sans text-base"
              style={{ color: "#CCCCCC" }}
            >
              La única cosa que separa tu clínica de una agenda más llena es alguien que
              responda cuando tú no puedes.
            </p>
            <p
              className="mt-8 font-sans text-white"
              style={{ fontSize: 18, fontWeight: 500 }}
            >
              EcoWeb lo instala. Nosotros lo gestionamos. Tú no tocas nada.
            </p>
            <p className="mt-4 font-sans text-[15px]" style={{ color: "#999" }}>
              Instalamos 3 clínicas por semana. Los slots casi siempre están tomados.
            </p>
            <div className="mt-8">
              <PrimaryCTA big>Agenda tu demo de 15 minutos →</PrimaryCTA>
            </div>
            <p className="mt-4 font-sans text-sm" style={{ color: GREEN }}>
              Si no recuperas tu inversión en los primeros 30 días, trabajamos gratis hasta
              lograrlo.
            </p>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}

/* ------------------------ HELPERS ------------------------ */

function SliderRow({
  label,
  value,
  children,
}: {
  label: string;
  value: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <span className="font-sans text-sm" style={{ color: "#555" }}>
          {label}
        </span>
        <span
          className="font-display font-bold"
          style={{ color: GREEN, fontSize: 18 }}
        >
          {value}
        </span>
      </div>
      {children}
    </div>
  );
}

function ResultCard({
  label,
  value,
  color,
  big = false,
  outlined = false,
  sub,
}: {
  label: string;
  value: string;
  color: string;
  big?: boolean;
  outlined?: boolean;
  sub?: string;
}) {
  return (
    <div
      className="rounded-xl bg-white p-6"
      style={{
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        border: outlined ? `2px solid ${color}` : "1px solid #eee",
      }}
    >
      <p className="font-sans text-xs uppercase tracking-wide" style={{ color: "#888" }}>
        {label}
      </p>
      <p
        className="mt-2 font-display font-extrabold leading-none"
        style={{ color, fontSize: big ? 48 : 40, wordBreak: "break-word" }}
      >
        {value}
      </p>
      {sub && (
        <p className="mt-3 font-sans text-[13px]" style={{ color: "#666" }}>
          {sub}
        </p>
      )}
    </div>
  );
}
