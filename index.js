const { exec } = require('child_process');
const loaderUtils = require('loader-utils');

module.exports = function(source) {
    var callback = this.async();
    var options = loaderUtils.getOptions(this);
    var command = exec(options.script, function(err, result) {
        if (err) return callback(err);
        callback(null, result);
    });
    command.stdin.write(source);
    command.stdin.end();
};
module.exports.raw = true;
