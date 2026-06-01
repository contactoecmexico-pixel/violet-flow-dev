import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/lp")({
  head: () => ({
    meta: [
      { title: "Landing — EcoWeb" },
      { name: "description", content: "Landing de ventas EcoWeb." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4">
      <h1 className="font-display text-5xl font-extrabold md:text-7xl" style={{ color: "#262033" }}>
        Landing
      </h1>
    </section>
  );
}
