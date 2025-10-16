/** @type {import('next').NextConfig} */
const nextConfig = {
  // Habilita la exportación estática
  output: 'export',

  // El nombre de tu repositorio de GitHub (comentado para desarrollo local)
  // basePath: '/DR-GUILLERMO-MARTINI-WEB', 

  // Opcional: para que las imágenes funcionen correctamente
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
