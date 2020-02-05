const { exec } = require('child_process');
const loaderUtils = require('loader-utils');
const omit = require('lodash.omit');

module.exports = function(source) {
    const options = loaderUtils.getOptions(this);
    const callback = this.async();
    const scriptOptions = omit(options, 'script');

    const command = exec(options.script, scriptOptions, function(err, result) {
        if (err) return callback(err);
        callback(null, result);
    });

    command.stdin.write(source);
    command.stdin.end();
};
module.exports.raw = true;
