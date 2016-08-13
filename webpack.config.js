var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry: './app.js',
    output: {path: path.resolve(__dirname), filename:'bundle.js'},

    module:
    {
        loaders:[
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node-modules/,
                query: {
                    presets:['es2015', 'react']
                }
            }
        ]
    },
};