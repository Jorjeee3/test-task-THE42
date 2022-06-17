const path = require('path');
var webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
var mode = 'development';
var sourceMap = 'source-map';
module.exports = env => {

    if (env.production !== 'false') {
        mode = 'production';
        sourceMap = 'hidden-source-map';
    }

    return {
        mode: mode,
        devtool: sourceMap,
        optimization: {
            minimize: true
        },
        entry:
            {
                'css/style': './assets/scss/style.scss',
                'css/fonts': './assets/scss/fonts.scss',
                'css/normalize': './assets/scss/_normalize.scss',
                'js/custom': './assets/js/script.js',
                'js/slider': './assets/js/slider.js',
            },
        output: {
            path: path.resolve(__dirname, 'static'),
            filename: '[name].min.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                    }
                },
                {
                    test: /\.(css|sass|scss)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                },
                {
                    test: /\.(png|jpg|ico|svg)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            query: {
                                limit: '10000',
                                name: "[hash].[ext]",
                                outputPath: 'images/',
                                publicPath: '../images/',
                            }
                        }
                    ],
                },
                {
                    test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                    use: [{
                        loader: 'url-loader',
                        query: {
                            limit: '10000',
                            name: "[hash].[ext]",
                            outputPath: 'fonts/',
                            publicPath: '../fonts/',
                        }
                    }]
                }
            ],
        },
        plugins: [
            new FixStyleOnlyEntriesPlugin(),
            new MiniCssExtractPlugin({
                filename: '[name].min.css',
            }),
        ],
    }
};