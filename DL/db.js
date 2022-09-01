const mongoose = require('mongoose')

const MONGO_URL = `mongodb+srv://ShaulA:${process.env.MONGO_PASS}@cluster0.dnhd1.mongodb.net/playlist?retryWrites=true&w=majority`

const connect = async () => {
    try {
        await mongoose.connect(MONGO_URL, { useNewUrlParser: true }), (err) => {
            if (err) throw err

            console.log('Connection Success, State', mongoose.connection.readyState);
        }
    } catch (error) {
        console.log('error mongoose', error);
    }
}

module.exports = {connect}
