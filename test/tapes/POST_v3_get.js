var path = require("path");

/**
 * POST /v3/get
 *
 * content-type: application/json; charset=UTF-8
 * x-accept: application/json
 * host: getpocket.com
 * content-length: 146
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("cache-control", "no-store, no-cache, must-revalidate, post-check=0, pre-check=0");
  res.setHeader("content-type", "application/json");
  res.setHeader("date", "Sun, 09 Jul 2017 16:43:38 GMT");
  res.setHeader("expires", "Thu, 19 Nov 1981 08:52:00 GMT");
  res.setHeader("p3p", "policyref=\"/w3c/p3p.xml\", CP=\"ALL CURa ADMa DEVa OUR IND UNI COM NAV INT STA PRE\"");
  res.setHeader("pragma", "no-cache");
  res.setHeader("server", "Apache");
  res.setHeader("set-cookie", ["PHPSESSID=3m9iho39kjogjl7jidmb66ij22; path=/"]);
  res.setHeader("status", "200 OK");
  res.setHeader("x-frame-options", "SAMEORIGIN");
  res.setHeader("x-limit-key-limit", "10000");
  res.setHeader("x-limit-key-remaining", "9989");
  res.setHeader("x-limit-key-reset", "1932");
  res.setHeader("x-limit-user-limit", "500");
  res.setHeader("x-limit-user-remaining", "489");
  res.setHeader("x-limit-user-reset", "1932");
  res.setHeader("x-source", "Pocket");
  res.setHeader("content-length", "960");
  res.setHeader("connection", "Close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJzdGF0dXMiOjEsImNvbXBsZXRlIjoxLCJsaXN0Ijp7IjM0NzQ1Njg2OCI6eyJpdGVtX2lkIjoiMzQ3NDU2ODY4IiwicmVzb2x2ZWRfaWQiOiIzNDc0NTY4NjgiLCJnaXZlbl91cmwiOiJodHRwczpcL1wvd3d3LmZhc3Rjb21wYW55LmNvbVwvMzAwODM0NlwvZGVlcC1pbnNpZGUtdGFjby1iZWxscy1kb3JpdG9zLWxvY29zLXRhY28iLCJnaXZlbl90aXRsZSI6IiIsImZhdm9yaXRlIjoiMCIsInN0YXR1cyI6IjAiLCJ0aW1lX2FkZGVkIjoiMTQ5OTYxNzA5OSIsInRpbWVfdXBkYXRlZCI6IjE0OTk2MTcwOTkiLCJ0aW1lX3JlYWQiOiIwIiwidGltZV9mYXZvcml0ZWQiOiIwIiwic29ydF9pZCI6MCwicmVzb2x2ZWRfdGl0bGUiOiJEZWVwIEluc2lkZSBUYWNvIEJlbGxcdTIwMTlzIERvcml0b3MgTG9jb3MgVGFjbyIsInJlc29sdmVkX3VybCI6Imh0dHBzOlwvXC93d3cuZmFzdGNvbXBhbnkuY29tXC8zMDA4MzQ2XC9kZWVwLWluc2lkZS10YWNvLWJlbGxzLWRvcml0b3MtbG9jb3MtdGFjbyIsImV4Y2VycHQiOiJJbiBlYXJseSAyMDA5LCB0aHJlZSB5ZWFycyBwcmlvciB0byBUYWNvIEJlbGxcdTIwMTlzIDUwdGggYW5uaXZlcnNhcnksIENFTyBHcmVnIENyZWVkIHdhcyBhbHJlYWR5IGV4cGVyaWVuY2luZyBzb21ldGhpbmcgb2YgYSBtaWRsaWZlIGNyaXNpcy4gXHUyMDFjT3VyIHRhcmdldCBhdWRpZW5jZSBpcyBbY3VzdG9tZXJzXSBpbiB0aGVpciAyMHMuIFR1cm5pbmcgNTAgbWFrZXMgdXMgc291bmQgb2xkLCBhbmQgSSBkaWRuXHUyMDE5dCB3YW50IHRvIHNvdW5kIG9sZCxcdTIwMWQgQ3JlZWQgZXhwbGFpbnMuIiwiaXNfYXJ0aWNsZSI6IjEiLCJpc19pbmRleCI6IjAiLCJoYXNfdmlkZW8iOiIwIiwiaGFzX2ltYWdlIjoiMSIsIndvcmRfY291bnQiOiIyNzE1In19LCJlcnJvciI6bnVsbCwic2VhcmNoX21ldGEiOnsic2VhcmNoX3R5cGUiOiJub3JtYWwifSwic2luY2UiOjE0OTk2MTg2MTh9", "base64"));
  res.end();

  return __filename;
};
