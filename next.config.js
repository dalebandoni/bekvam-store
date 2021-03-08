module.exports = {
  // Target must be serverless
  target: 'serverless',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/products': { page: '/products' },
      '/product/1': { page: '/product/[id]' },
    }
  },
}
