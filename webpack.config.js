const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //__dirname redirecciona a la carpeta que estamos utilizando
        filename: 'main.js', //el archivo donde va a trabajar webpack
    },
    resolve: {
        extensions: ['.js'] //aca van los tipos de extenciones que vamos a usar, en este ejemplo javascript.
    }
}