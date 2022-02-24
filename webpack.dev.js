const { merge } = require('webpack-merge');
const base = require('./webpack.base');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loaders = [
    //Array de reglas
    {
        test: /\.s[a|c]ss$/i,
        use: [
            // 3º crea nodos <style> a partir de strings en JS
            'style-loader',
            // 2º translate CSS to Commonjs
            'css-loader',
            // 1º compila Sass a css
            'sass-loader'
        ]
    }
];


module.exports = merge(base, {
    mode: 'development',
    //Webpack Dev Server
    devServer: {
        client: {
            overlay: true
        }
    },
    module: {
        rules: loaders
    }
});