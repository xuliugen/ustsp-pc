const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  resolve: {
    alias: {
      src: resolve('src'),
      '@': resolve('src/views'),
      components: resolve('src/components')
    }
  }
}
