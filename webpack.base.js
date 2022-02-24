const HtmlWebpackPlugin = require('html-webpack-plugin');
const loaders = [

    {
        test: /\.js$/i,
        exclude: /(node_modules)/i,
        use: {
            loader: 'babel-loader',
            //esto machaca el archivo de configuración de babel que hemos configurado,
            //si no se pone, tira de ese archivo
            // options: {
            //     presets: ['@babel/preset-env']
            // }
        }
    }
];
const plugins = [
    new HtmlWebpackPlugin({
        template: './public/index.html',
        //el archivo que genera a partir de template es index.html
        filename: 'index.html',
        //los scripts que va a necesitar index.html es main,
        //hace referencia a los entrypoints que saca webpack TIENE QUE COINCIDIR CON EL NOMBRE
        chunks: ['main']
    }),
    new HtmlWebpackPlugin({
        template: './public/detail.html',
        //el archivo que genera a partir de template es index.html
        filename: 'detail.html',
        //los scripts que va a necesitar detail.html es deatail,
        //hace referencia a los entrypoints que saca webpack TIENE QUE COINCIDIR CON EL NOMBRE
        chunks: ['detail']
    })
];

module.exports = {
    //Inputs y Outputs
    entry: {
        //outputs : inputs
        main: './src/index.js',
        detail: './src/detail.js'
    }, //Loaders
    module: {
        rules: loaders
    },
    //plugins para seperar css de js, copiar archivos estáticos, etc
    plugins: plugins,

}