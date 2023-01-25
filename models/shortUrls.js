//
const mongoose = require("mongoose");
const shortUniqID = require("short-unique-id");
//
let variavel = new shortUniqID({ length: 10 });
//
const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: variavel(),
  },
});
//
module.exports = mongoose.model("ShortUrl", shortUrlSchema);
//
//
//
