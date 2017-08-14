const path = require('path');

module.exports = {
    entry: './client/src/app.module',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'client/public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};