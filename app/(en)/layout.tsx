import type { Metadata } from "next";
import type { ReactNode } from "react";
import RootShell from "../components/RootShell";
import { LANG_REDIRECT_SCRIPT } from "../lib/lang";
import { layoutMetadata, viewport as siteViewport } from "../lib/seo";

export const metadata: Metadata = layoutMetadata;
export const viewport = siteViewport;

export default function EnglishLayout({ children }: { children: ReactNode }) {
    return (
        <RootShell
            lang="en"
            head={
                <script
                    dangerouslySetInnerHTML={{ __html: LANG_REDIRECT_SCRIPT }}
                />
            }
        >
            {children}
        </RootShell>
    );
}
