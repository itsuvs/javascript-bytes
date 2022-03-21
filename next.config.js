const debug = process.env.NODE_ENV !== 'production'

const nextConfig = {
  assetPrefix: !debug ? '/javascript-bytes' : '',
}

module.exports = nextConfig
