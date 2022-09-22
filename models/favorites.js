const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var favoriteSchema = new Schema({
    favorite:  {
        type: Boolean,
        required: false
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dish: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish'
    }
}, {
    timestamps: true
});

var Favorites = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorites;