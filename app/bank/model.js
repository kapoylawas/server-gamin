const mongoose = require("mongoose");

let bankSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Nama Pemilik Harus diisi"],
  },
  bankName: {
    type: String,
    require: [true, "Nama Bank Harus diisi"],
  },
  noRekening: {
    type: String,
    require: [true, "No Rekening Bank Harus diisi"],
  },
},{timestamps: true});

module.exports = mongoose.model("Bank", bankSchema);
