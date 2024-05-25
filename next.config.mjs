/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cdn.imagin.studio',
//         port: '',
//         pathname: '/**',
//       },
//     ],
//   },
// };
const nextConfig = {
  images: {
    domains: ['i.ibb.co'],
  },
};


export default nextConfig;