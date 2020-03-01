const webpack = require('webpack');
module.exports = {
    entry: './src/index.jsx',
    mode: "production",
    externals: [
        {
            react: {
                root: 'React',
                commonjs2: './react',
                commonjs: ['./react'],
                amd: 'react',
            },
        },
        {
            'react-dom': {
                root: 'ReactDOM',
                commonjs2: './react-dom',
                commonjs: ['./react-dom'],
                amd: 'react-dom',
            },
        },
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ],
                    plugins: [
                        "@babel/plugin-transform-react-jsx"
                    ]
                }
            },
            {
                test: /\.(svg)$/,
                exclude: /fonts/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            noquotes: true,
                        },
                    },
                ],
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                exclude: /images/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts/',
                            name: '[name][hash].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'this'
    },
    plugins: [

    ],
    optimization: {
        namedModules: true,
        namedChunks: true
    }
};