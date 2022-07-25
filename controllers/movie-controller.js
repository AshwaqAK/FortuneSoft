const Movie = require("../models/movie-model");

// get movie list
exports.getMovieList = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            const movieResult = await Movie.find({});
            resolve({ message: "Successfully Get Movie List", movieResult })
        } catch (error) {
            reject({ error: error.message });
        }
    });
};

// get movie list
exports.getMovieByGenres = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            const movieResult = await Movie.aggregate([{
                "$project": {
                    "_id": 0,
                    "genres": 1,
                    "director": 1,
                    "imdb_rating": 1,
                    "length": 1,
                    "poster": 1,
                    "title": 1
                }
            }, {
                "$unwind": {
                    "path": "$genres",
                }
            }, {
                "$group": {
                    "_id": { "genres": "$genres" },
                    "movies": { "$push": "$$ROOT" }
                }
            }, {
                "$project": {
                    "genres": "$_id.genres",
                    "movies": 1,
                    "_id": 0
                }
            }, {
                "$unset": [
                    "movies.genres"
                ]
            }]);
            resolve({ message: "Successfull Get By Genres Movie", movieResult })
        } catch (error) {
            reject({ error: error.message });
        }
    });
};
