var path = require("path");

/**
 * POST /v3/send
 *
 * content-type: application/json; charset=UTF-8
 * x-accept: application/json
 * host: getpocket.com
 * content-length: 173
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("cache-control", "no-store, no-cache, must-revalidate, post-check=0, pre-check=0");
  res.setHeader("content-type", "application/json");
  res.setHeader("date", "Sun, 09 Jul 2017 16:43:39 GMT");
  res.setHeader("expires", "Thu, 19 Nov 1981 08:52:00 GMT");
  res.setHeader("p3p", "policyref=\"/w3c/p3p.xml\", CP=\"ALL CURa ADMa DEVa OUR IND UNI COM NAV INT STA PRE\"");
  res.setHeader("pragma", "no-cache");
  res.setHeader("server", "Apache");
  res.setHeader("set-cookie", ["PHPSESSID=9kt6f7a8na25ohqvlol27gs2l0; path=/"]);
  res.setHeader("status", "200 OK");
  res.setHeader("x-frame-options", "SAMEORIGIN");
  res.setHeader("x-limit-key-limit", "10000");
  res.setHeader("x-limit-key-remaining", "9988");
  res.setHeader("x-limit-key-reset", "1931");
  res.setHeader("x-limit-user-limit", "500");
  res.setHeader("x-limit-user-remaining", "488");
  res.setHeader("x-limit-user-reset", "1931");
  res.setHeader("x-source", "Pocket");
  res.setHeader("content-length", "36");
  res.setHeader("connection", "Close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJhY3Rpb25fcmVzdWx0cyI6W3RydWVdLCJzdGF0dXMiOjF9", "base64"));
  res.end();

  return __filename;
};
