const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema({
  name: { type: String },
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'user',
  // },
  // lyrics: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'lyric',
  //   },
  // ],
})

// CategorySchema.statics.addLyric = function(id, content) {
//   const Lyric = mongoose.model('lyric')

//   return this.findById(id).then(song => {
//     const lyric = new Lyric({ content, song })
//     song.lyrics.push(lyric)
//     return Promise.all([lyric.save(), song.save()]).then(
//       ([lyric, song]) => song
//     )
//   })
// }

// CategorySchema.statics.findLyrics = function(id) {
//   return this.findById(id).populate('lyrics').then(song => song.lyrics)
// }

mongoose.model('categories', CategorySchema)
