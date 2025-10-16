/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // Lee la variable de entorno BASE_PATH, si no existe, no usa nada.
  basePath: process.env.BASE_PATH || '',

  images: {
    unoptimized: true,
  },
};

export default nextConfig;