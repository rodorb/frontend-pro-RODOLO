// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const loaders = [
//     //Array de reglas
//     {
//         test: /\.s[a|c]ss$/i,
//         use: [
//             // 3º crea nodos <style> a partir de strings en JS
//             // 'style-loader',
//             MiniCssExtractPlugin.loader,
//             // 2º translate CSS to Commonjs
//             'css-loader',
//             // 1º compila Sass a css
//             'sass-loader'
//         ]
//     },
//     {
//         test: /\.js$/i,
//         exclude: /(node_modules)/i,
//         use: {
//             loader: 'babel-loader',
//             //esto machaca el archivo de configuración de babel que hemos configurado,
//             //si no se pone, tira de ese archivo
//             // options: {
//             //     presets: ['@babel/preset-env']
//             // }
//         }
//     }
// ];
// const plugins = [
//     new HtmlWebpackPlugin({
//         template: './public/index.html',
//         //el archivo que genera a partir de template es index.html
//         filename: 'index.html',
//         //los scripts que va a necesitar index.html es main,
//         //hace referencia a los entrypoints que saca webpack TIENE QUE COINCIDIR CON EL NOMBRE
//         chunks: ['main']
//     }),
//     new HtmlWebpackPlugin({
//         template: './public/detail.html',
//         //el archivo que genera a partir de template es index.html
//         filename: 'detail.html',
//         //los scripts que va a necesitar detail.html es deatail,
//         //hace referencia a los entrypoints que saca webpack TIENE QUE COINCIDIR CON EL NOMBRE
//         chunks: ['detail']
//     }),
//     new MiniCssExtractPlugin({
//         filename: '[name].[contenthash:8].css',
//         chunkFilename: '[id].[contenthash:8].css'
//     })
// ];

// module.exports = {
//     //Inputs y Outputs
//     entry: {
//         //outputs : inputs
//         main: './src/index.js',
//         detail: './src/detail.js'
//     },
//     //evitamos problemas de cache
//     output: {
//         //añade un hash a cada archivo  js para evitarnos problema de cacheo del navegador
//         filename: '[name].[contenthash:8].js',
//         //limpia el dist antes de compilar
//         clean: true
//     },
//     //Webpack Dev Server
//     devServer: {
//         client: {
//             overlay: true
//         }
//     },
//     //Loaders
//     module: {
//         rules: loaders
//     },
//     //plugins para seperar css de js, copiar archivos estáticos, etc
//     plugins: plugins,
//     //No funciona, pero se puede configurar con webpack el máximo de los tamaños de los archivos
//     optimization: {
//         splitChunks: {
//             maxSize: 102400
//         }
//     }
// }