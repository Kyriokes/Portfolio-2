import type { Metadata } from "next";
import HomePage from "../components/HomePage";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata("en");

export default function Page() {
    return <HomePage lang="en" />;
}
