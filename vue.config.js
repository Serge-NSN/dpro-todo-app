const { defineConfig } = require('@vue/cli-service')
// Use DEV_PUBLIC_HOST to tell the dev-server which public hostname the preview
// is accessible at (for example GitHub Codespaces preview host). When the
// page is served over HTTPS, the dev-server's websocket client must use WSS
// (secure websocket) and the correct hostname/port; this config helps do that.
const publicHost = process.env.DEV_PUBLIC_HOST || process.env.PUBLIC_HOST || 'localhost'

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    allowedHosts: 'all',
    // Configure the client websocket URL so the browser will use wss://<host>:443
    // (useful when the page is loaded over HTTPS via a proxy/preview URL).
    client: {
      webSocketURL: {
        protocol: 'wss',
        hostname: publicHost,
        port: 443,
        pathname: '/ws'
      }
    }
  }
})
