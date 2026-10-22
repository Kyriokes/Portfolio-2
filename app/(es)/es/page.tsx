import type { Metadata } from "next";
import HomePage from "../../components/HomePage";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata("es");

export default function Page() {
    return <HomePage lang="es" />;
}
