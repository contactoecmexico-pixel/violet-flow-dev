import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inicio — EcoWeb" },
      { name: "description", content: "EcoWeb — donde el futuro se construye." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4">
      <h1 className="font-display text-5xl font-extrabold md:text-7xl" style={{ color: "#262033" }}>
        Inicio
      </h1>
    </section>
  );
}
