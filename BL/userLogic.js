const usersController = require("../DL/controller/usersController");

async function addUser(data) {
  const result = await usersController.create(data);
  return result;
}

async function updateUser(dataFind, update) {
  const result = await usersController.update({_id: dataFind}, update);
  return result;
}

async function findUser(data) {
  const result = await usersController.read(data);
  return result;
}

async function delUser(id) {
    const result = await usersController.del({_id: id});
    findUser()
  }

module.exports = { addUser, updateUser, findUser, delUser };
