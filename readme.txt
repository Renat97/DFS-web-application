
/* 

npm install --save-dev @babel/core @babel/preset-env babel-loader npm install --save core-js@3 regenerator-runtime
*/

from entry: ['babel-polyfill', './src/js/index.js'],  to
entry: ['./src/js/index.js'],



{
    "presets": [
        ["@babel/env", {
            "useBuiltIns": "usage",
            "corejs": "3",
            "targets": {
                "browsers": [
                    "last 5 versions",
                    "ie >= 8"
                ]
            }
        }]
    ]
}