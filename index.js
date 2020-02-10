const { exec } = require('child_process');
const loaderUtils = require('loader-utils');

module.exports = function(source) {
    const callback = this.async();
    const { script, ...options } = loaderUtils.getOptions(this);
    const command = exec(script, options, function(err, result) {
        if (err) return callback(err);
        callback(null, result);
    });
    command.stdin.write(source);
    command.stdin.end();
};
module.exports.raw = true;
