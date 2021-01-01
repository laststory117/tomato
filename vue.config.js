module.exports = {
  runtimeCompiler: true,
  devServer: {
    disableHostCheck: true,
    proxy: {
      // 配置跨域
      '/toolsapi': {
        // 代理接口前缀为/api的请求
        target: 'http://localhost:3001/toolsapi/', // 需要代理到的目标地址
        ws: true,
        changOrigin: true, // 是否跨域
        pathRewrite: {
          '^/toolsapi': '' // 重写路径
        }
      }
    }
  }
}