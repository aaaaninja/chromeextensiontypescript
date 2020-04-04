import { ConfigurationFactory } from 'webpack'
import path from 'path'

const config: ConfigurationFactory = () => {
  return {
    entry: `${__dirname}/src/app.ts`,
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /.ts$/,
          use: 'ts-loader',
          exclude: '/node_modules/'
        }
      ]
    },
    resolve: {
      extensions: ['ts', 'js']
    },
    externals: {
      puppeteer: 'require("puppeteer")'
    }
  }
}

export default config
