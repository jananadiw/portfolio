/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  ...nextTranslate()
}

module.exports = nextConfig
