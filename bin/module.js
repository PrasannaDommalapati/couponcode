const sassRegex = /\.(scss|sass|css)$/;
const jsxRegex = /\.(js|jsx)$/;

module.exports = {
  rules: [
    {
      exclude:[/\.(js|jsx|mjs)$/, /\.json$/, /\.html$/, /\.scss$/, /\.css$/],
      loader: 'file-loader'
    },
    {
      test: jsxRegex,
      exclude: /node_modules/,
      use: [
        'babel-loader'
      ],
    },
    {
      test: sassRegex,
      loaders: [
        require.resolve('style-loader'),
        require.resolve('css-loader'),
        require.resolve('sass-loader'),
      ]
    },
  ],
}
