// import { createContentlayerPlugin } from "next-contentlayer"
const { createContentlayerPlugin } = require("next-contentlayer");

// import "./env.mjs"
import("./env.mjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

// export default withContentlayer(nextConfig)
module.exports = withContentlayer(nextConfig);
