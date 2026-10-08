import Image, { StaticImageData } from "next/image";

interface BrowserFrameProps {
    href: string;
    image: StaticImageData;
    label: string;
    sizes: string;
    priority?: boolean;
}

// A screenshot inside a browser window that shows the real address.
// The whole frame is a link to the live demo.
export default function BrowserFrame({
    href,
    image,
    label,
    sizes,
    priority,
}: BrowserFrameProps) {
    const host = new URL(href).host;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group block overflow-hidden rounded-xl border border-line bg-surface transition-transform duration-200 hover:-translate-y-1"
        >
            <div className="flex items-center gap-3 border-b border-line px-3 py-2.5">
                <span aria-hidden="true" className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                </span>
                <span className="min-w-0 flex-1 truncate rounded-md bg-bg px-3 py-1 text-center text-xs text-muted">
                    {host}
                </span>
                <span aria-hidden="true" className="w-10" />
            </div>
            <div className="relative aspect-[2/1] overflow-hidden">
                <Image
                    src={image}
                    alt=""
                    fill
                    sizes={sizes}
                    priority={priority}
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
            </div>
        </a>
    );
}
