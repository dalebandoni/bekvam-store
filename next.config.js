module.exports = {
  // Target must be serverless
  target: 'serverless',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/p/hello-nextjs': { page: '/product/[id]' },
      '/p/learn-nextjs': { page: '/product/[id]' },
      '/p/deploy-nextjs': { page: '/product/[id]' },
    }
  },
}
