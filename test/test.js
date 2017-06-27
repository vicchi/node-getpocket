const GetPocket = require('../getpocket');
const assert = require('assert');
const yakbak = require('yakbak');
const http = require('http');
const Promise = require('bluebird');

describe('node-getpocket', function () {
  // Wrap 'get articles' call into a Promise
  var getArticles = function () {
    return new Promise(function (resolve, reject) {
      POCKET.get({
        count: 1,
        state: 'unread',
        detailType: 'simple',
      }, function (err, json) {
        err ? reject(err) : resolve(json.list)
      });
    });
  };

  before(function (done) {
    // Setup API wrapper with real (but outdated) credentials
    POCKET = new GetPocket({
      consumer_key: "consumer_key",
      request_token: "request_token",
      access_token: "access_token",
    }, 'http://localhost:4567');

    // Setup reverse proxy to playback requests
    http.createServer(yakbak('https://getpocket.com', {
      dirname: `${__dirname}/tapes`,
      noRecord: true,
      simpleTapeName: true,
    })).listen(4567, done);
  });

  it('successfully gets articles', function (done) {
    getArticles().then(function (articles) {
      var article = articles['347456868']; // Get a sample article
      assert(article);
      assert(article.item_id);
      done();
    });
  });

  it('successfully deletes articles', function (done) {
    getArticles().then(function (_articles) {
      var formattedIds = [ { item_id: '1217239342' } ];

      POCKET.delete(formattedIds, function (_err, json) {
        assert.strictEqual(_err, undefined);
        assert.equal(json.status, 1);
        done();
      });
    });
  });
});
