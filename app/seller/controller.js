const Seller = require('./model')

module.exports = {
    create : async (req, res) => {
        try {
            const { name, dob, gender } = req.body;

            let seller = await Seller({ name, dob, gender });
            await seller.save();
            res.status(201).json({ data : seller })
        } catch (err) {
            res.status(500).json({ message: err.message || `Internal server error` })
        }
    }
}