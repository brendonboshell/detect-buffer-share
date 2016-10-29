/* globals define */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.detectBufferShare = factory();
  }
}(this, function () {
  var cbs,
      callCbs,
      check,
      interval;

  // Array of functions to call once the Buffer button is clicked.
  cbs = [];

  // Calls the callbacks to notify them of the Buffer share.
  callCbs = function () {
    var cbsCopy,
        i;

    // Copy the callbacks in case the callbacks themselves add more listeners.
    cbsCopy = cbs.slice(0);

    // Remove the listeners.
    cbs = [];

    // There are no more listeners, so no need to perform more checks.
    clearInterval(interval);
    interval = null;

    for (i = 0; i < cbsCopy.length; i++) {
      cbsCopy[i].apply(this);
    }
  };

  // Checks if the Buffer dialog is opened and triggers events if it is.
  check = function () {
    // Buffer inserts an iframe into the page with a particular ID.
    if (document.getElementById("buffer_overlay")) {
      callCbs();
    }
  };

  return {
    // Add a listener to the event of user sharing with Buffer.
    onBuffer: function (cb) {
      cbs.push(cb);

      if (!interval) {
        interval = setInterval(check, 100);
      }
    }
  };
}));
