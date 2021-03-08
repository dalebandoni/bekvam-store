module.exports = {
  // Target must be serverless
  target: 'serverless',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/product/:id': { page: '/product/[id]' },
    }
  },
}
