const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
  /* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' */
  publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',
  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  outputDir: 'dist',
  /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
  assetsDir: 'assets',
  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  productionSourceMap: false,
  /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
  filenameHashing: false,
  /* 代码保存时进行eslint检测 */
  lintOnSave: false,
  /* webpack-dev-server 相关配置 */
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
  transpileDependencies: ['glob'],

  // css: {
  //     loaderOptions: {
  //       sass: {
  //         // 这里假设你有 `src/variables.scss` 文件
  //         data: `@import "~@/variables.scss";`
  //       }
  //     }
  // },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        '@': resolve('src'), // 主目录
        'views': resolve('src/views'), // 页面
        'components': resolve('src/components'), // 组件
        'api': resolve('src/api'), // 接口
        'utils': resolve('src/utils'), // 通用功能
        'assets': resolve('src/assets'), // 静态资源
        'style': resolve('src/style') // 通用样式
      }
    }
  },
  devServer: {
    /* 自动打开浏览器 */
    open: true,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    host: '0.0.0.0',
    port: 8066,
    https: false,
    hotOnly: false,
    /* 使用代理 */
    proxy: {
      '/api': {
        /* 目标代理服务器地址 */
        target: 'http://47.100.47.3/',
        /* 允许跨域 */
        changeOrigin: true
      }
    }
  }
}
