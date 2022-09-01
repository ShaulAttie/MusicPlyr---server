const mongoose = require("mongoose")


const searchLogic = require("../../BL/searchLogic");

const read = async (req, res) => {
    try {

        // console.log("/search params", req.params);
        const result = await searchLogic.search(req.params);

        // console.log("searchRoute res", result);
        res.status(200).send(result);

    } catch (error) {
        console.log("/search error", error);

        if (error.code && error.code < 1000) {
            res.status(400).send(error.msg);
            // res.status(error.code).send(error.msg);

        } else {
            res.status(500).send("/search something went wrong");
        }
    }
};



module.exports = { read }