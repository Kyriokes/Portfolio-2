import { renderOgImage } from "../../lib/og";

export const alt = "Sergio Ferrari Bryce, Desarrollador Full Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
    return renderOgImage("es");
}
