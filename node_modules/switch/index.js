! function (definition) {
  if (typeof module == "object" && module.exports) module.exports = definition();
  else if (typeof define == "function") define(definition);
  else this.tz = definition();
} (function () {
// Only local if URL is local.

// Fallback to hash polling. Check frequently.

// On the client, we look at forms and links to determine method.

// Use live or delegate, need to be friendly with a selector langauge.
  var slice = [].slice;
  function Reactor () {
    var reactions = [];
    function on () {
      var vargs = slice.call(arguments, 0),
          reaction = { methods: [], urls: [], callback: vargs.pop() }, i;
      for (i = vargs.length -1; i != -1; i--) {
        if (vargs[i][0] == '/') {
          reaction.urls.push(vargs[i]);
        } else {
          reaction.methods.push(vargs[i]);
        }
      }
      reactions.push(reaction);
    }

    function react (method, url) {
      var vargs = slice.call(arguments, 2), i, reaction, hit;
      for (i = reactions.length -1; i != -1; i--) {
        reaction = reactions[i];
        if (!reaction.methods.length || ~reaction.methods.indexOf(method)) {
          if (~reaction.urls.indexOf(url)) {
            reaction.callback.apply(this, [ method, url ].concat(vargs));
          }
        }
      }
    }

    this.on = on;
    this.react = react;
  }

  return { createReactor: function () { return new Reactor } };
});
