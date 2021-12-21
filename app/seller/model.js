const mongoose = require('mongoose')

const sellerSchema = mongoose.Schema({
      name: {
        type: String,
        require: [true, "Nama Harus diisi"],
      },
      dob: {
        type: String,
        require: [true, "Tanggal Lahir Harus diisi"],
      },
      gender: {
        type: String,
        require: [true, "Gender Harus diisi"],
      },
},{timestamps: true});

module.exports = mongoose.model("Seller", sellerSchema);