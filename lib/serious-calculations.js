
var request = require("request");

exports.performSeriousCalculations = function (x) {
  //
  // Perform very serious calculations on very important data.
  //
  return 2 * x;
};

exports.testSplunk = function (callback) {
    var that = this;
    request('http://localhost:8000', function(err, response, body) {
        callback(err, body);
    });
};
