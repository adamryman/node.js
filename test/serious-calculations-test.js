var assert = require('assert'),
    vows = require('vows'),
    seriousCalculations = require('../');

vows.describe('serious-calculations').addBatch({
  'When performing serious calculations': {
    topic: seriousCalculations.performSeriousCalculations(6),
    'result should be valid': function (result) {
      assert.isNumber(result);
      assert.equal(result, 12);
    }
  },
  'When this project is on travis ci': {
      topic: function() {
          seriousCalculations.testSplunk(this.callback);
  },
      'splunk should be installed': function (err, result) {
          assert.equal(err, null);
  }
}
}).export(module);

