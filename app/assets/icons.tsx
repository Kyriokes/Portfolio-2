import Image from "next/image";
import React from "react";

interface IconProps {
    className?: string;
}

export function House({ className = "w-6 h-6" }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
        </svg>
    );
}

export function ArrowR({ className = "w-6 h-6" }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
        </svg>
    );
}

export function ArrowL({ className = "w-6 h-6" }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
        </svg>
    );
}

export function ArrowD({ className = "w-6 h-6" }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
}

export function ArrowU({ className = "w-6 h-6" }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
        </svg>
    );
}

export function ArrowA({ className = "w-44 h-44" }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
        </svg>
    );
}

export function Linkedin({ className = "h-20 w-20" }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            viewBox="0 0 48 48"
        >
            <path
                fill="#0078d4"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
            ></path>
            <path
                d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                opacity=".05"
            ></path>
            <path
                d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                opacity=".07"
            ></path>
            <path
                fill="#fff"
                d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
            ></path>
        </svg>
    );
}

export function BlenderIcon({ className = "h-10 w-10" }: IconProps) {
    return (
        <svg
            className={className}
            viewBox=".1 16.7 2472.8 1996.5"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="m2006.5 1485.6c-98.8 100.8-237 157.8-386.7 158-149.8.3-288.1-56.3-386.9-156.8-48.3-49-83.7-105.2-105.7-165.3-21.5-59-29.7-122.1-24.2-184.6 5.3-61 23.3-120.3 53-173.9 28.9-52.4 68.6-99.7 117.6-139.7 96-78.3 218.2-120.6 346.2-120.8s250.1 41.9 346.2 119.8c48.9 39.9 88.6 87 117.4 139.3 29.7 53.6 47.8 112.8 53.1 173.8 5.5 62.6-2.8 125.6-24.3 184.7-22 60-57.5 116.3-105.7 165.5z"
                fill="#fff"
            />
            <path
                d="m1300.4 1143.3c4.5-81.5 44.5-153.4 104.7-204.3 59.1-50.1 138.7-80.6 225.4-80.6 86.8.1 166.3 30.6 225.4 80.6 60.2 51 100.2 122.8 104.8 204.3 4.6 83.8-29.1 161.7-88.2 219.4-60.2 58.7-146 95.6-242 95.6s-181.9-36.9-242.1-95.6c-59-57.7-92.6-135.6-88-219.4z"
                fill="#005385"
            />
            <path
                d="m774.5 1308.3c.6 31.8 10.8 93.8 26 142.3 32.1 102.5 86.5 197.4 162.3 281 77.8 85.9 173.4 154.9 284 203.8 116.3 51.5 242.2 77.8 372.9 77.5 130.7-.2 256.6-26.9 372.8-78.8 110.5-49.5 206.1-118.7 283.8-204.8 75.7-84 130-179 162.1-281.5 16-51.1 26.3-103.8 30.5-157.1 4-52 2.3-104.4-5-156.1-14.4-101.4-49.5-196.5-103.5-283.2-49.5-79.6-113.1-149.4-188.8-208.2l.1-.1-763.8-586.4c-.6-.5-1.3-1.1-1.9-1.6-50.3-38.4-134.5-38.3-189.6.3-55.8 39-62.1 103.5-12.6 144.2l-.2.1 318.6 259.2-971.3 1h-1.3c-80.2.1-157.4 52.8-172.7 119.3-15.6 67.8 38.9 124 122.4 124.4l-.1.3 492.3-1-878.5 674.3c-1.1.9-2.3 1.7-3.3 2.5-82.8 63.4-109.6 169-57.5 235.8 53 67.9 165.6 68 249.4.3l479.4-392.3s-7 53-6.5 84.8zm1232 177.3c-98.8 100.8-237 157.8-386.7 158-149.8.3-288.1-56.3-386.9-156.8-48.3-49-83.7-105.2-105.7-165.3-21.5-59-29.7-122.1-24.2-184.6 5.3-61 23.3-120.3 53-173.9 28.9-52.4 68.6-99.7 117.6-139.7 96-78.3 218.2-120.6 346.2-120.8s250.1 41.9 346.2 119.8c48.9 39.9 88.6 87 117.4 139.3 29.7 53.6 47.8 112.8 53.1 173.8 5.5 62.6-2.8 125.6-24.3 184.7-22 60-57.5 116.3-105.7 165.5z"
                fill="#ff7021"
            />
        </svg>
    );
}

export function WhatsApp({ className = "h-20 w-20" }: IconProps) {
    return (
        <Image
            className={className}
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            width={80}
            height={80}
        />
    );
}

export function JavaScriptIcon({ className = "h-8 w-8" }: IconProps) {
    return (
        <Image
            className={className}
            src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
            alt="JavaScript"
            width={32}
            height={32}
        />
    );
}

export function TypeScriptIcon({ className = "h-8 w-8" }: IconProps) {
    return (
        <Image
            className={className}
            src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png"
            alt="TypeScript"
            width={32}
            height={32}
        />
    );
}

export function NestIcon({ className = "h-8 w-8" }: IconProps) {
    return (
        <Image
            className={className}
            src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/519bfaf3-c242-431e-a269-876979f05574"
            alt="Nest"
            width={32}
            height={32}
        />
    );
}

export function PostgreSQLIcon({ className = "h-8 w-8" }: IconProps) {
    return (
        <Image
            className={className}
            src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png"
            alt="PostgreSQL"
            width={32}
            height={32}
        />
    );
}

export function ExpressIcon({ className = "h-8 w-8" }: IconProps) {
    return (
        <Image
            className={className}
            src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png"
            alt="Express"
            width={32}
            height={32}
        />
    );
}

export function PrismaIcon({ className = "h-8 w-8" }: IconProps) {
    return (
        <Image
            className={className}
            src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_light_prisma_icon_130444.png"
            alt="Prisma"
            width={32}
            height={32}
        />
    );
}

export function ReactIcon({ className = "h-8 w-8" }: IconProps) {
    return (
        <Image
            className={className}
            src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
            alt="React"
            width={32}
            height={32}
        />
    );
}

export function ReduxIcon({ className = "h-8 w-8" }: IconProps) {
    return (
        <Image
            className={className}
            src="https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png"
            alt="Redux"
            width={32}
            height={32}
        />
    );
}

export function ViteIcon({ className = "h-8 w-8" }: IconProps) {
    return (
        <Image
            className={className}
            src="https://github-production-user-asset-6210df.s3.amazonaws.com/62091613/261395532-b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35.png"
            alt="Vite"
            width={32}
            height={32}
        />
    );
}

export function NextIcon({ className = "h-8 w-8" }: IconProps) {
    return (
        <Image
            className={className}
            src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704"
            alt="Next"
            width={32}
            height={32}
        />
    );
}

export function HTMLIcon({ className = "h-8 w-8" }: IconProps) {
    return (
        <Image
            className={className}
            src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"
            alt="HTML"
            width={32}
            height={32}
        />
    );
}

export function CSSIcon({ className = "h-8 w-8" }: IconProps) {
    return (
        <Image
            className={className}
            src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
            alt="CSS"
            width={32}
            height={32}
        />
    );
}

export function TailwindIcon({ className = "h-8 w-8" }: IconProps) {
    return (
        <Image
            className={className}
            src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png"
            alt="Tailwind"
            width={32}
            height={32}
        />
    );
}

export function VSCodeIcon({ className = "h-8 w-8" }: IconProps) {
    return (
        <Image
            className={className}
            src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png"
            alt="VSCode"
            width={32}
            height={32}
        />
    );
}

export function NodeJSIcon({ className = "h-8 w-8" }: IconProps) {
    return (
        <Image
            className={className}
            src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"
            alt="NodeJs"
            width={32}
            height={32}
        />
    );
}

export function UnityIcon({ className = "h-8 w-8" }: IconProps) {
    return (
        <Image
            className={className}
            src="https://user-images.githubusercontent.com/25181517/193427941-9437dbbe-376f-40dc-9573-0ef5c02a26a7.png"
            alt="Unity"
            width={32}
            height={32}
        />
    );
}

export function GitIcon({ className = "h-8 w-8" }: IconProps) {
    return (
        <Image
            className={className}
            src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png"
            alt="Git"
            width={32}
            height={32}
        />
    );
}

export function GitHubIcon({
    className = "h-8 w-8",
    x = 8,
    y = 8,
}: IconProps & { x?: number; y?: number }) {
    return (
        <Image
            className={className}
            src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png"
            alt="GitHub"
            width={x * 4}
            height={y * 4}
        />
    );
}

export function NPMIcon({ className = "h-8 w-8" }: IconProps) {
    return (
        <Image
            className={className}
            src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png"
            alt="NPM"
            width={32}
            height={32}
        />
    );
}

export function YARNIcon({ className = "h-8 w-8" }: IconProps) {
    return (
        <Image
            className={className}
            src="https://user-images.githubusercontent.com/25181517/183049794-a3dfaddd-22ee-4ffe-b0b4-549ccd4879f9.png"
            alt="YARN"
            width={32}
            height={32}
        />
    );
}

export function NeonIcon({ className = "h-8 w-8" }: IconProps) {
    return (
        <Image
            className={className}
            src="https://avatars.githubusercontent.com/u/77690634?v=4"
            alt="Neon"
            width={32}
            height={32}
        />
    );
}

export function CsharpIcon({ className = "h-8 w-8" }: IconProps) {
    return (
        <Image
            className={className}
            src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/c%23.svg"
            alt="C#"
            width={32}
            height={32}
        />
    );
}

export function FireBaseIcon({ className = "h-8 w-8" }: IconProps) {
    return (
        <Image
            className={className}
            src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/cloud/firebase.svg"
            alt="FireBase"
            width={32}
            height={32}
        />
    );
}
export function SupaBaseIcon({ className = "h-8 w-8" }: IconProps) {
    return (
        <Image
            className={className}
            src="https://raw.githubusercontent.com/BekCodingAddict/Icons/ad230fdf76196aa3fc47625aa7db1fa4c1d014dd/icons/supabase/supabase-original.svg"
            alt="SupaBase"
            width={32}
            height={32}
        />
    );
}

export function ArgIcon() {
    return (
        <Image
            
            src="https://raw.githubusercontent.com/giift/npm-country-flags/9fa8aa88fd70374776eda19b8cc57d5a74b01849/assets/svg/ar.svg"
            alt="Arg"
            width={32}
            height={32}
        />
    );
}

export function UsaIcon() {
    return (
        <Image
            
            src="https://raw.githubusercontent.com/giift/npm-country-flags/9fa8aa88fd70374776eda19b8cc57d5a74b01849/assets/svg/us.svg"
            alt="Usa"
            width={32}
            height={32}
        />
    );
}