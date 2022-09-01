
const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET

const auth = async (req, res, next) => {
    
    try {

        const token = req?.headers?.authorization?.split(" ")[1]

        const isCustomAuth = token.length < 500 // google token has more than 500

        // console.log(token, isCustomAuth);

        var decodedData

        if (token && isCustomAuth) {

            decodedData = jwt.verify(token, JWT_SECRET)
            req.userId = decodedData?.id

        } else {//for google token

            decodedData = jwt.decode(token)
            req.user.Id = decodedData?.sub
        }
        next()

    } catch (error) {
        console.log(error)
    }
}

module.exports = { auth }