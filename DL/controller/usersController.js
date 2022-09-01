// const userModel = require("../model/userModel");

// async function create(data) {
//   const result = await userModel.create(data);
//   return result;
// }

// async function read(data) {
//   const result = await userModel.find(data);
//   return result;
// }

// async function update(dataFind, update) {
//   const result = await userModel.findOneAndUpdate(dataFind, update, {
//     new: true,
//   });
//   return result;
// }

// async function del(data) {
//   const result = await userModel.findOneAndDelete(data);
//   find()
// }

// module.exports = { create, read, update, del };


///////////////////////////////////////////////////////////

const bcrypt = require("bcrypt")
const saltRounds = 12

const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET

const userModel = require("../../DL/model/userModel")

const signin = async (req, res) => {
    const { email, password } = req.body

    try {

        const existingUser = await userModel.findOne({ email })

        if (!existingUser) return res.status(404).json({ message: "User doesn't exists" })

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

        if (!isPasswordCorrect) return res.status(400).json({ message: "Incorrect Password" })

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, JWT_SECRET, {})

        // console.log(token)

        res.status(200).json({ result: existingUser, token })

    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}

const signup = async (req, res) => {

    const { email, password, confirmPassword, firstName, lastName } = req.body

    try {
        if (!email || !password || !confirmPassword || !firstName || !lastName)
            return res.status(400).json({ message: "Required Information is Missing!!!" })

        const existingUser = await userModel.findOne({ email })

        if (existingUser) return res.status(400).json({ message: "User already exists!!!" })

        if (password !== confirmPassword) return res.status(400).json({ message: "Password don't match!!!" })

        const hashedPassword = await bcrypt.hash(password, saltRounds)

        const result = await userModel.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` })

        const token = jwt.sign({ mail: result.email, id: result._id }, JWT_SECRET, {})

        res.status(200).json({ result, token })

    } catch (error) {
        res.status(500).json({ message: "Something went wrong!!!" })
    }

}

module.exports = { signin, signup }