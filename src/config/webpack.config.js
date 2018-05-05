var path = require('path');
var useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');
 
module.exports = function () {
    var env = process.env.NODE_ENV || 'dev';
    useDefaultConfig.resolve.alias = {
        "@environment": path.resolve(__dirname + '/../../src/config/config.' + env + '.ts'),
    };
    return useDefaultConfig;
};