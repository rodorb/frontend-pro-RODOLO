const { merge } = require('webpack-merge');
const base = require('./webpack.base');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loaders = [
    //Array de reglas
    {
        test: /\.s[a|c]ss$/i,
        use: [
            // 3º crea nodos <style> a partir de strings en JS
            // 'style-loader',
            MiniCssExtractPlugin.loader,
            // 2º translate CSS to Commonjs
            'css-loader',
            // 1º compila Sass a css
            'sass-loader'
        ]
    }
];
const plugins = [
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash:8].css',
        chunkFilename: '[id].[contenthash:8].css'
    })
];

module.exports = merge(base, {
    mode: 'production',
    //evitamos problemas de cache
    output: {
        //añade un hash a cada archivo  js para evitarnos problema de cacheo del navegador
        filename: '[name].[contenthash:8].js',
        //limpia el dist antes de compilar
        clean: true
    },
    module: {
        rules: loaders
    },
    plugins: plugins,
    //Se puede configurar con webpack el máximo de los tamaños de los archivos
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
});