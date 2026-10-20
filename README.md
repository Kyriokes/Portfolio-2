# Portfolio

Sitio personal de Sergio Ferrari Bryce: proyectos, experiencia, skills y contacto, en inglés y
español. En línea en [portfoliosergiofb.vercel.app](https://portfoliosergiofb.vercel.app).

Hecho con Next.js 14 (App Router), React 18, TypeScript y Tailwind CSS. El formulario de
contacto manda el mail con EmailJS y las visitas se miden con Umami.

## Desarrollo

```bash
npm install
npm run dev
```

Abre en [http://localhost:3000](http://localhost:3000). `npm run lint` corre ESLint y
`npm run build` arma la versión de producción.

### Variables de entorno

Van en `.env.local` (no se versiona). Sin ellas el sitio funciona igual, solo que el formulario
de contacto no manda mails y no se registran visitas.

| Variable | Para qué |
|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Servicio de EmailJS |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Plantilla del mail de contacto |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Clave pública de EmailJS |
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | Sitio en Umami |

## Dónde está cada cosa

- `app/data/content.ts`: todos los textos (EN/ES), la experiencia, los skills y los proyectos.
- `app/data/icons.ts`: los iconos de los chips, que viven en `public/icons/`.
- `app/components/`: una sección por componente (`Hero`, `Projects`, `Experience`, `Skills`,
  `ContactForm`) más `Header`, `Footer` y `BrowserFrame` (la captura con marco de navegador).
- `public/`: la foto, los CV en PDF y los iconos.

## Agregar un proyecto

1. Guardar una captura de la demo en `app/assets/<id>.jpg`, en JPG de 1900×917 (relación 2:1).
2. Importarla en `app/data/content.ts` y agregar un objeto al array `projects` con `id`,
   `title`, `year`, `image`, `demo`, `repo`, `stack` (con el helper `s(nombre, icono)`),
   `summary` en los dos idiomas y, si va destacado, `highlights`.
3. El orden del array es el orden en la página: los primeros `FEATURED_COUNT` van con layout
   grande y highlights, el resto en la grilla compacta.

## Deploy

Se despliega en Vercel desde la rama `main`. Node 24 (`engines` en `package.json`).
