const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        MQTT_SERVER: JSON.stringify(process.env.MQTT_SERVER || 'localhost')
      })
    ]
  },
  css: {
    sourceMap: true
  },
  publicPath: './'
}
