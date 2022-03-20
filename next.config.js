
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   env: {
//     PUBLIC_URL: "https://itsuvs.github.io/javascript-bytes",
//     assetPrefix: './'
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////

// const webpack = require('webpack')

// const isProd = (process.env.NODE_ENV || 'production') === 'production'

// const assetPrefix = isProd ? '/javascript-bytes' : ''

// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   exportPathMap: () => ({
//     '/': { page: '/' }
//   }),
//   assetPrefix: assetPrefix,
//   webpack: config => {
//     config.plugins.push(
//       new webpack.DefinePlugin({
//         'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
//       }),
//     )

//     return config
//   },
// }

// module.exports = nextConfig

///////////////////////////////////////////////////////////////////////////////////////////

const debug = process.env.NODE_ENV !== 'production'

const nextConfig = {
  assetPrefix: !debug ? '/javascript-bytes' : '',
}

module.exports = nextConfig
