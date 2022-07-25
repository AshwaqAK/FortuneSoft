const movieRoute = require("./movie-route");

module.exports = (app) => {
    app.use("/api/movie", movieRoute);
};