
var request = require("request");

exports.performSeriousCalculations = function (x) {
  //
  // Perform very serious calculations on very important data.
  //
  return 2 * x;
};

exports.testSplunk = function () {
    request('http://localhost:8000', function(err, response, body) {
        console.log(err);
        console.log(response);
        console.log(body);

    });

}
