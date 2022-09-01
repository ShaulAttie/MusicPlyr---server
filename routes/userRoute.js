// const express = require("express");
// const router = express.Router();

// const userLogic = require("../BL/userLogic");

// router.post("/add", async (req, res) => {
//   try {
//     const result = await userLogic.addUser(req.body);
//     res.status(200).send(result);

//   } catch (error) {
//     res.status(400).send({ error });
//   }
// });

// router.get("/find", async (req, res) => {
//   try {
//     const result = await userLogic.findUser(req.body);
//     res.status(200).send(result);

//   } catch (error) {
//     res.status(401).send({ error });
//   }
// });

// router.put("/updateUser/:id", async (req, res) => {
//     console.log(req.params.id, req.body);
//   try {
//     const result = await userLogic.updateUser(req.params.id, req.body);
//     res.status(200).send(result);
    
//   } catch (error) {
//     res.status(402).send({ error });
//   }
// });

// router.delete("/delUser/:id", async (req, res) => {
//     console.log(req.params.id);
//   try {
//     const result = await userLogic.delUser(req.params.id);
//     res.status(200).send(result);
//   } catch (error) {
//     res.status(403).send({ error });
//   }
// });

// module.exports = router;

const express = require("express")
const router =express.Router()

const usersController = require("../DL/controller/usersController")

router.post("/signin", usersController.signin)
router.post("/signup", usersController.signup)

module.exports = router
