const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie-controller");

// authorization
const auth = require("../middleware/auth")
router.use(auth)

// get movie list
router.get("/getMovieList", (req, res) => {
    movieController.getMovieList(req).then(response => {
        res.send(response);
    }).catch(err => { res.status(500).send(err) });
});

// get movie list by genres
router.get("/getMovieByGenres", (req, res) => {
    movieController.getMovieByGenres(req).then(response => {
        res.send(response);
    }).catch(err => { res.status(500).send(err) });
});

module.exports = router;