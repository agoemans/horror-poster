const path = require('path');

module.exports = {
    entry: {
        server: path.resolve(__dirname, 'src', 'app.ts'),
    },
    target: "node",
    output: {
        path: path.resolve(__dirname, '_build'),
        filename: 'app.js',
        libraryTarget: 'commonjs',
        clean: true
    },
    optimization: {
        mangleExports: false,
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
        ]
    },
    resolve: {
    extensions: [".js", ".json", ".ts"],
  },
    devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: true
    }
};