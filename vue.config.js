// module.exports = {
//   configureWebpack: config => {
//     config.module.rules[
//       {
//         test: /\.(gif|png|jpe?g|svg)$/i,
//         use:[ 
//           'file-loader',
//             {
//             loader: ['image-webpack-loader'],
//             options: {
//               svgo: {
//                 plugins: [
//                   {
//                       removeViewBox: false,
//                   },
//                   {
//                       removeEmptyAttrs: false,
//                   },
//                 ]
//               }
//             }
//           }
//         ]
//       }
//     ];
//   }
// };
module.exports = {
  chainWebpack: config => {
    const imgRule = config.module.rule('images')
      imgRule.use('file-loader')
      .loader('image-webpack-loader')
      .tap(options => {
          const ret = options || {}
          ret.svgo = {
            removeViewBox: false,
            removeEmptyAttrs: false,
          }
          return ret;
          })
      }
}