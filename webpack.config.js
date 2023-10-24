const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: filename('js')
    },
    resolve: {
        extensions: ['.js', '.json', '.png', '.tsx', '.ts'],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        historyApiFallback: true,
        open: true,
        compress: true,
        port: 9000,
        hot: false,
        liveReload: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '../public/index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),

    ],
    module: {
        rules: [
            { test: /\.svg$/, use: 'svg-inline-loader' },
            { test: /\.s[ac]ss$/i, use: [ 'style-loader', 'css-loader', 'sass-loader' ] },
            { test: /\.(js)$/, use: 'babel-loader' },
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource'
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
        ]
    },

}