var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var mongoURL = process.env.MONGODB_URI;
mongoose.connect(mongoURL);

module.exports = {
  mongoose
}
