import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsFile = path.join(__dirname, "app", "assets", "icons.tsx");
const outputDir = path.join(__dirname, "public", "icons");

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const fileContent = fs.readFileSync(iconsFile, "utf-8");
const urlRegex = /src="(https?:\/\/[^"]+)"/g;

let match;
const urls = [];
while ((match = urlRegex.exec(fileContent)) !== null) {
    urls.push(match[1]);
}

function download(url, dest) {
    const proto = url.startsWith("https") ? https : http;
    return new Promise((resolve, reject) => {
        proto
            .get(url, (res) => {
                if (res.statusCode !== 200) {
                    reject(
                        new Error(`Failed to get '${url}' (${res.statusCode})`)
                    );
                    return;
                }
                const fileStream = fs.createWriteStream(dest);
                res.pipe(fileStream);
                fileStream.on("finish", () => fileStream.close(resolve));
            })
            .on("error", reject);
    });
}

(async () => {
    for (const url of urls) {
        const urlObj = new URL(url);
        let filename = path.basename(urlObj.pathname);
        // Add extension if missing
        if (!/\.(png|jpg|jpeg|svg|webp)$/i.test(filename)) {
            filename += ".png";
        }
        const dest = path.join(outputDir, filename);
        try {
            console.log(`Downloading ${url} -> ${dest}`);
            await download(url, dest);
        } catch (err) {
            console.error(`Error downloading ${url}:`, err.message);
        }
    }
    console.log("Descarga finalizada.");
})();
