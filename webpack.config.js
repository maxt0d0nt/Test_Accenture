const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

            const ruleForJavaScript = {
                test:/\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env', ['@babel/preset-react',{"runtime": "automatic"}]
                        
                           ],
                }
            }

            const ruleForCSS =
                  {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                  }

    const rules = [ruleForJavaScript, ruleForCSS]

    module.exports = {
        output: {
            path: path.resolve('./build')
        },

        mode: 'development',

      
        devServer: {
            
              port: 3000
        },

        plugins: [
           new HtmlWebpackPlugin({ 
            title: "insigthscan",   

            template: './public/index.html'
          }),
        ],
    
        module: { rules }
}