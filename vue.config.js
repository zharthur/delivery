module.exports = {
  // 选项...
  devServer: {
    proxy: {
      '/api': { // 匹配所有以 '/api'开头的请求路径
        target: 'http://localhost:4000', // 代理目标的基础路径
        changeOrigin: true, // 支持跨域
        pathRewrite: { // 重写路径: 去掉路径中开头的'/api'   让代理服务再转发请求，对路径进行特定修改
          '^/api': ''     //这里会先根据/api/... 得到基础路径，与基础路径拼接，然后重写路径，去掉其中的/api
        }
      },
      '/baidu': { // 匹配所有以 '/baidu'开头的请求路径
        target: 'http://www.baidu.com', // 代理目标的基础路径
        changeOrigin: true, // 支持跨域
        pathRewrite: { // 重写路径: 去掉路径中开头的'/baidu'
          '^/baidu': ''
        }
      }
    }
  }
}