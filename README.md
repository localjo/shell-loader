[![NPM Status](https://img.shields.io/npm/v/shell-loader.svg?style=flat)](https://www.npmjs.com/package/shell-loader)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Flocaljo%2Fshell-loader.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Flocaljo%2Fshell-loader?ref=badge_shield)

<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>Shell Loader</h1>
</div>

A [Webpack](https://github.com/webpack/webpack) loader for running arbitrary shell scripts when loading files.

## Install

```bash
npm install --save-dev shell-loader
```

## Usage

[Documentation: Using loaders](https://webpack.js.org/loaders/)

Add shell-loader your Webpack configuration object, setting `options.script` to the shell script you want to run on each file. Example;

```javascript
module: {
  rules: [
    {
      test: /.*\.css$/,
      use: [ 'css-loader', { loader: 'shell-loader', options: {
        script: 'postcss --use autoprefixer'
      }} ]
    }
  ]
}
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Flocaljo%2Fshell-loader.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Flocaljo%2Fshell-loader?ref=badge_large)