// const playlistModel = require("../model/playlistModel");

// async function create(data) {

//   // const result = await playlistModel.create(data);
//   // return result;
// }

// async function read(id) {
//   // search for user playlist
//   const result = id
//     ? await playlistModel.findById(id)
//     : await playlistModel.find({});
//   return result;
// }

// async function update(id, data) {
//   const result = await playlistModel.findByIdAndUpdate(id, data);
//   return result;
// }

// async function del(id) {
//   console.log("test res", await playlistModel.findByIdAndDelete(id));
// }

// module.exports = { create, read, update, del };

const mongoose = require("mongoose")
const playlistModel = require("../model/playlistModel")

const create = async (req, res) => {
  // console.log(req.body);
  const { createNewPlaylist } = req.body
  // console.log(createNewPlaylist);
  // const { title, url, id, duration, duration_formatted} = req.body

  // console.log(req.body);
  // console.log(req);

  const newPlaylist = new playlistModel({ name: createNewPlaylist, creator: req.userId, createAt: new Date().toISOString() })


  try {
    await newPlaylist.save()
    res.status(201).json(newPlaylist)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

const readByCreator = async (req, res) => {
  const { pid } = req.params
  // console.log(typeof pid, pid);
  try {
    const playlist = await playlistModel.find({ creator: pid })
    // console.log(playlist);
    res.status(200).json(playlist)

  } catch (error) {
    res.status(400).json({ message: error.message })

  }
}

const read = async (req, res) => {
  const { _id } = req.params
  // console.log("_id", _id);

  try {
    const playlist = await playlistModel.findById(_id)
    // console.log(playlist);
    res.status(200).json(playlist)

  } catch (error) {
    res.status(400).json({ message: error.message })

  }
}

const update = async (req, res) => {
  const { _id } = req.params
  const updatedPlaylist = req.body

  // console.log("_id", _id);
  // console.log("playlist00", req.body);

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("no Playlist with that ID")

  await playlistModel.findByIdAndUpdate(_id, updatedPlaylist, { new: true })

  res.status(200).json(updatedPlaylist)
}

const del = async (req, res) => {
  const { _id } = req.params
console.log(_id);
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No Playlist with that ID.")

  try {
    await playlistModel.findByIdAndDelete(_id)
    res.status(200).json({ message: "Playlist deleted successfully" })

  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}



module.exports = { create, read, readByCreator, update, del }