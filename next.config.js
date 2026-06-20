const withExportImages = require('next-export-optimize-images')

/** @type {import('next').NextConfig} */
const nextConfig = {
      /* config options here */
      output: 'export',
      turbopack: {},
    }

module.exports = nextConfig
module.exports = withExportImages(nextConfig)