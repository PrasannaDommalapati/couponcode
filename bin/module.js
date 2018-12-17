const sassRegex = /\.(scss|sass)$/;
const jsxRegex =  /\.(js|jsx)$/;

module.exports = {
  rules: [
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
