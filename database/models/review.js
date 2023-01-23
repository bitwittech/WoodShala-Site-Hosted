const mongoose = require('mongoose')

const review = mongoose.Schema({
    CID: { type: String },
    product_id: { type: String },
    rating: { type: String },
    review: { type: String },
    review_title: { type: String },
    review_images: { type: Array, default: [] },
    yourTube_url: { type: String },
    reviewer_name: { type: String },
    reviewer_email: { type: String },
    date: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('review', review);