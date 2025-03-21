const { default: mongoose } = require('mongoose')
const monggose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    duration : {
        type : Number,
        required : true
    },
    genre : {
        type : String,
        required : true
    },
    language : {
        type : String,
        required : true
    },
    releaseDate : {
        type : Date,
        required : true
    },
    poster : {
        type : String,
        required : true
    },
});

const Movies = mongoose.model('movies', movieSchema);
module.exports = Movies;

// title, description, duration, genre, language, releasedata, poster