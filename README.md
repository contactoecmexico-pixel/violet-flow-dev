# Eco Web Studio

Crea un proyecto web con React, TypeScript, Tailwind CSS, y React Router. El sitio tiene 4 páginas con navegación entre ellas:
- / (Inicio)
- /servicios (Servicios)
- /lp (Landing de ventas)
- /blog (Blog)

## DESIGN SYSTEM — NO USES OTROS COLORES NI FUENTES

### Colores (úsalos EXACTOS, no inventes ningún otro):
- Eco Green: #1DB86B → botones primarios, CTAs, íconos, bordes de acento, elementos interactivos
- Deep Violet: #262033 → fondos oscuros, texto principal sobre superficies claras
- Mist White: #F5F7F5 → fondos de sección claros, tarjetas, áreas de descanso visual
- Forest Deep: #0F6E56 → hover en botones, texto sobre fondo verde

### Tipografía (importar de Google Fonts):
- Syne weight 800 → títulos hero, display grande
- Syne weight 700 → headings H2, H3, wordmark del logo, CTAs
- DM Sans weight 400 → cuerpo de texto, descripciones, UI, captions
- Tamaño mínimo: 13px
- Interlineado: 1.6 a 1.7 en body text

### Navbar (presente en TODAS las páginas):
- Fondo: Deep Violet #262033
- A la izquierda: wordmark del logo → texto "eco" en color blanco (#FFFFFF), texto "web" en Eco Green #1DB86B, fuente Syne 700, todo en minúsculas sin espacio entre las dos palabras
- Links de navegación: Inicio (/), Servicios (/servicios), Landing (/lp), Blog (/blog) — color Mist White #F5F7F5, hover con underline Eco Green
- A la derecha: botón CTA "Agenda tu demo →" con fondo Eco Green #1DB86B, texto blanco, hover Forest Deep #0F6E56, border-radius 8px. Este botón lleva a https://wa.me/+527713429112
- En mobile (< 768px): el menú se colapsa en hamburger menu con fondo Deep Violet. El botón CTA se mueve dentro del menú.
- El navbar es sticky (se queda fijo arriba al hacer scroll)

### Footer (presente en TODAS las páginas):
- Fondo: Deep Violet #262033
- Layout en desktop: 4 columnas. En mobile: stack vertical.
- Columna 1: Wordmark "ecoweb" (mismo estilo que el navbar) + debajo el slogan "donde el futuro se construye" en DM Sans 400 color #999
- Columna 2: Links de navegación (Inicio, Servicios, Landing, Blog) en Mist White
- Columna 3: Contacto → teléfono: +52 7713429112 / email: contacto@ecowebmx.com, en Mist White
- Columna 4: Redes sociales con íconos → WhatsApp (https://wa.me/+527713429112), Facebook (https://www.facebook.com/share/1V1gXf2D4i/), Instagram (https://www.instagram.com/ecoweb.mx/)
- Línea divisora sutil color #333 arriba del footer
- Copyright: "© 2025 EcoWeb. Todos los derechos reservados." centrado debajo de las columnas

### Botones globales:
- Primario: fondo Eco Green #1DB86B, texto blanco, font Syne 700, hover Forest Deep #0F6E56, border-radius 8px, padding 14px 28px, transición suave de 0.2s
- Secundario: borde 2px Eco Green, texto Eco Green, fondo transparente, hover fondo Eco Green con texto blanco, mismos border-radius y padding
- Todos los botones CTA que digan "Agenda tu demo" o similar deben llevar a https://wa.me/+527713429112

### Responsive:
- Mobile: max 767px
- Tablet: 768px a 1023px
- Desktop: 1024px+
- El sitio debe ser 100% funcional y verse bien en las 3 resoluciones

### Scroll behavior:
- Scroll suave entre secciones (smooth scroll)
- Animaciones sutiles de fade-in al hacer scroll (elementos aparecen cuando entran al viewport)

Por ahora, crea la estructura del proyecto con el navbar, footer, y routing funcionando. Las 4 páginas pueden estar vacías con un heading centrado que diga el nombre de cada página ("Inicio", "Servicios", "Landing", "Blog") para verificar que la navegación funciona.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://violet-flow-dev.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7d311ac1-6965-4e70-884f-63cfe7268b46).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
