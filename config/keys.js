//keys.js - figure out set of credentials to return
if (process.env.NODE_ENV === "production") {
  //we are in production -- return prod keys
  module.exports = require("./prod");
} else {
  //we are in development -- return dev keys
  module.exports = require("./dev");
}


// if (process.env.NODE_ENV === 'production') {
//   module.exports = require('./prod'); // Ensure './prod' exists
// } else {
//   module.exports = require('./dev'); // Ensure './dev' exists
// }
