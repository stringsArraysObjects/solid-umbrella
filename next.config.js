// /** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: 'src/components/Menu.tsx',
  },
}
 
module.exports = nextConfig
  
