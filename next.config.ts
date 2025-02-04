import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: "/",
    },
};

export default nextConfig;
