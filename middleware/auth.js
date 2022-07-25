module.exports = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        if (token !== 'FSMovies2021') {
            throw new Error()
        }
        next()
    } catch (error) {
        res.status(401).send({ error: "authicatication fail" })
    }
}