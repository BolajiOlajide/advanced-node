const repl = require('repl');

let replInstance = repl.start({
  ignoreUndefined: true,
  replMode: repl.REPL_MODE_STRICT,
  prompt: '#> '
});

// ramda is now available in the repl context
replInstance.context.omit = require('ramda').omit;
