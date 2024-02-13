const path = require('path');

module.exports = {
  entry: './src/main.ts', // Punto de entrada de tu aplicación
  
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    publicPath: 'dist',
    filename: 'main.js', // El archivo de salida
    path: path.resolve(__dirname, 'dist'), // Donde colocar el archivo de salida
  },


  resolve: {
    extensions: ['.ts', '.js'], // Resolver estas extensiones
  },
};
