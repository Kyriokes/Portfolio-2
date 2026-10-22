import type { Metadata } from "next";
import type { ReactNode } from "react";
import RootShell from "../components/RootShell";
import { layoutMetadata, viewport as siteViewport } from "../lib/seo";

export const metadata: Metadata = layoutMetadata;
export const viewport = siteViewport;

export default function SpanishLayout({ children }: { children: ReactNode }) {
    return <RootShell lang="es">{children}</RootShell>;
}
