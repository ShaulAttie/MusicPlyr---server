// const mongoose = require("mongoose");

// const playlistSchema = new mongoose.Schema({
//   name: {
//     type: String,
//   },
//   songs: [
//     {
//       type: mongoose.SchemaTypes.ObjectId,
//       ref: "song",
//     },
//   ],
//   user: {
//     type: mongoose.SchemaTypes.ObjectId,
//     ref: "user",
//   },
// });

// const playlistModel = mongoose.model("playlist", playlistSchema);

// module.exports = playlistModel;

// song_1:
// channel: {name: 'Nirvana', icon: 'https://yt3.ggpht.com/ytc/AMLnZu8YmsZBlpRC3o3OF-DoTHmBOnFI8btnsNglzP4Vhg=s0-c-k-c0x00ffffff-no-rj', id: 'UCFMZHIQMgBXTSxsr86Caazw'}
// description: null
// duration: 279000
// duration_formatted: "4:39"
// id: "hTWKbfoikeg"
// live: false
// private: false
// ratings: {likes: 0, dislikes: 0}
// tags: {}
// thumbnail: {url: 'https://i.ytimg.com/vi/hTWKbfoikeg/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLDOXcjryaadaZF0DVr8KBWIfqPGGw', height: 404, id: 'hTWKbfoikeg', width: 720}
// title: "Nirvana - Smells Like Teen Spirit (Official Music Video)"
// type: "video"
// uploadedAt: "13 years ago"
// url: "https://www.youtube.com/watch?v=hTWKbfoikeg"
// views: 1528917079

const mongoose = require("mongoose")

const playlistSchema = new mongoose.Schema({
    creator: { type: String },
    name: {
        type: String,
        default: "MyPlaylist"
    },
    createAt: {
        type: Date,
        default: new Date(),
    },
    songs: [{
        title: { type: String },
        url: { type: String },
        id: { type: String },
        duration: { type: Number },
        duration_formatted: { type: String },
    }]
})

const playlistModel = mongoose.model("playlist", playlistSchema)
module.exports = playlistModel 
