/**
 * @type {import('@rspack/core').Configuration}
 */
module.exports =  {
    context: __dirname,
    entry: {
        main: './src/index.jsx',
    },
    resolve: {
        extensions: ['.jsx', '...']
    },
    optimization: {
        minimize:false
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: [
                    {
                        loader: 'builtin:swc-loader',
                        options: {
                            jsc: {
                              parser: {
                                syntax: 'ecmascript',
                                jsx: true,
                              },
                              transform: {
                                react: {
                                  pragma: 'React.createElement',
                                  pragmaFrag: 'React.Fragment',
                                  throwIfNamespace: true,
                                  development: false,
                                  useBuiltins: false,
                                },
                              },
                            },
                        }
                    }
                ]
            }
        ]
    }
}