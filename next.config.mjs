const isDev = process.env.NODE_ENV !== "production";

// Third parties the page talks to: Umami (analytics) and EmailJS (contact form).
// Next.js injects inline scripts and styles, so 'unsafe-inline' stays.
const csp = [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline' https://cloud.umami.is${isDev ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    `connect-src 'self' https://api.emailjs.com https://gateway.umami.is${isDev ? " ws: wss:" : ""}`,
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
    { key: "Content-Security-Policy", value: csp },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
    },
    // No Cross-Origin-Opener-Policy: it breaks Lighthouse / PageSpeed traces
    // (NO_NAVSTART), and the site opens no popups (external links use noopener).
];

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    experimental: {
        // Two root layouts (/ and /es) need a global 404.
        globalNotFound: true,
    },
    async headers() {
        return [{ source: "/:path*", headers: securityHeaders }];
    },
};

export default nextConfig;
