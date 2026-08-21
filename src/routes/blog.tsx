import { createFileRoute } from "@tanstack/react-router";

const T = "Blog | EcoWeb";
const D =
  "Ideas y guías sobre automatización de WhatsApp, agenda y atención para clínicas dentales en México.";
const U = "https://violet-flow-dev.lovable.app/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: T },
      { name: "description", content: D },
      { property: "og:title", content: T },
      { property: "og:description", content: D },
      { property: "og:type", content: "website" },
      { property: "og:url", content: U },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: U }],
  }),
  component: Blog,
});

function Blog() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4">
      <h1
        className="font-display text-5xl font-extrabold md:text-7xl"
        style={{ color: "#262033" }}
      >
        Blog
      </h1>
    </section>
  );
}
