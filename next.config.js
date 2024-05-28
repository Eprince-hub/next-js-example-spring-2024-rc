/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    ppr: 'incremental',
  },
};

export default nextConfig;
