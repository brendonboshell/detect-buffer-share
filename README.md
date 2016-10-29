# Detect Buffer Share

This is a small script that detects when the user clicks the
[Buffer](http://buffer.com) share button in their browser. You can use this
script to track these events in Google Analytics for example.

## Example Usage

### Browser Globals

See `test.html`

```js
detectBufferShare.onBuffer(function () {
  ga('send', 'event', 'Buffer', 'Share');
});
```

### CommonJS

```js
var detectBufferShare = require("detect-buffer-share");

detectBufferShare.onBuffer(function () {
  ga('send', 'event', 'Buffer', 'Share');
});
```
