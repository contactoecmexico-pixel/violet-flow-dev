import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — EcoWeb" },
      { name: "description", content: "Servicios de EcoWeb." },
    ],
  }),
  component: Servicios,
});

function Servicios() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4">
      <h1 className="font-display text-5xl font-extrabold md:text-7xl" style={{ color: "#262033" }}>
        Servicios
      </h1>
    </section>
  );
}
