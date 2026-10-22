import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { Lang, PROFILE_PHOTO, SITE_URL, ui } from "../data/content";

// Link preview image (LinkedIn, WhatsApp, X...). Rendered once at build time.

export const OG_SIZE = { width: 1200, height: 630 };

type FontWeight = 400 | 700;

// Google Fonts serves TTF to non-browser clients, which is what the image
// renderer needs. If the download fails the image uses the default font.
async function loadFont(family: string, weight: FontWeight, text: string) {
    try {
        const cssUrl = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(text)}`;
        const css = await (await fetch(cssUrl)).text();
        const fontUrl = css.match(
            /src: url\((.+?)\) format\('(opentype|truetype)'\)/
        )?.[1];
        if (!fontUrl) return null;
        const response = await fetch(fontUrl);
        return response.ok ? await response.arrayBuffer() : null;
    } catch {
        return null;
    }
}

export async function renderOgImage(lang: Lang) {
    const role = ui.hero.role[lang];
    const statement = ui.hero.statement[lang];
    const host = new URL(SITE_URL).host;

    const [photo, display, body] = await Promise.all([
        readFile(join(process.cwd(), "public", PROFILE_PHOTO)),
        loadFont("Bricolage+Grotesque", 700, `SergioFerariBryc${role}`),
        loadFont("Instrument+Sans", 400, `${statement}${host}`),
    ]);

    const fonts = [
        display && { name: "Display", data: display, weight: 700 as const },
        body && { name: "Body", data: body, weight: 400 as const },
    ].filter((font) => font !== null);

    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    gap: 64,
                    padding: "64px 72px",
                    background: "#eae6e5",
                    color: "#1c2321",
                    fontFamily: "Body",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            fontFamily: "Display",
                            fontWeight: 700,
                            fontSize: 96,
                            lineHeight: 0.95,
                            letterSpacing: -3,
                        }}
                    >
                        <span>Sergio</span>
                        <span>Ferrari</span>
                        <span>Bryce</span>
                    </div>
                    <div
                        style={{
                            marginTop: 32,
                            fontFamily: "Display",
                            fontWeight: 700,
                            fontSize: 40,
                            color: "#17606f",
                        }}
                    >
                        {role}
                    </div>
                    <div
                        style={{
                            marginTop: 16,
                            fontSize: 26,
                            lineHeight: 1.4,
                            color: "#55605c",
                        }}
                    >
                        {statement}
                    </div>
                    <div
                        style={{ marginTop: 32, fontSize: 22, color: "#55605c" }}
                    >
                        {host}
                    </div>
                </div>
                {/* The photo is most of the PNG weight. At this size the image
                    stays under 300 KB, the limit for WhatsApp previews. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={`data:image/jpeg;base64,${photo.toString("base64")}`}
                    alt=""
                    width={320}
                    height={400}
                    style={{
                        objectFit: "cover",
                        borderRadius: 24,
                        border: "2px solid rgba(28, 35, 33, 0.16)",
                    }}
                />
            </div>
        ),
        { ...OG_SIZE, fonts: fonts.length > 0 ? fonts : undefined }
    );
}
