import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — EcoWeb" },
      { name: "description", content: "Blog de EcoWeb." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4">
      <h1 className="font-display text-5xl font-extrabold md:text-7xl" style={{ color: "#262033" }}>
        Blog
      </h1>
    </section>
  );
}
