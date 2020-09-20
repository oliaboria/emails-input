const { join } = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PATH_DIST = join(__dirname, '../dist');

const CONFIG = {
    entry: {
        index: './src/index.ts',
    },

    output: {
        path: PATH_DIST,
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
    },

    resolve: {
        extensions: ['.ts', '.js', '.css', '.scss'],
    },

    optimization: {
        splitChunks: {
            name: true,
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    test: /[\\]node_modules[\\/]/,
                },
            },
        },
    },

    plugins: [
        new CleanWebpackPlugin({
            verbose: true,
        }),
    ],

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /(node_modules)/,
                use: [
                    'ts-loader',
                    {
                        loader: 'eslint-loader',
                        options: {
                            emitWarning: true,
                        },
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
        ],
    },
};

module.exports = {
    CONFIG,
    PATH_DIST,
};
