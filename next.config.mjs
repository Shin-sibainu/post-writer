import { createContentlayerPlugin } from "next-contentlayer";
// import "./env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withContentlayer = createContentlayerPlugin({});

export default withContentlayer(nextConfig);
