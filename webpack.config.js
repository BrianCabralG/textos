const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //__dirname redirecciona a la carpeta que estamos utilizando
        filename: 'main.js', //el archivo donde va a trabajar webpack
    },
    resolve: {
        extensions: ['.js'] //aca van los tipos de extenciones que vamos a usar, en este ejemplo javascript.
    },
    module: {
        rules:[
            {
                test: /\.m?js$/, //le dice a webpack que solo vamos a utilizar los archivos terminados en .mjs o .js
                exclude: /node_modules/, //excluimos los modulos de node para que no se rompa la app
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    },
}