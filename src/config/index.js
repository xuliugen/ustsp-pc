// 不同环境引入不同配置
if (process.env.NODE_ENV === 'development') {
  require('./config.dev.js')
} else {
  require('./config.prod.js')
}
