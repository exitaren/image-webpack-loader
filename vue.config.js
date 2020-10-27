module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            "file-loader",
            {
              loader: "image-webpack-loader",
              options: {
                svgo: {
                  convertPathData: false,
                }
              }
            }
          ]
        }
      ]
    }
  }
}