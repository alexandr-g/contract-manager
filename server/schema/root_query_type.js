const mongoose = require('mongoose')
const graphql = require('graphql')
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql
const SongType = require('./song_type')
const CategoryType = require('./category_type')
const LyricType = require('./lyric_type')
const Lyric = mongoose.model('lyric')
const Categories = mongoose.model('categories')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    categories: {
      type: new GraphQLList(CategoryType),
      resolve() {
        return Categories.find({})
      },
    },
    song: {
      type: SongType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Song.findById(id)
      },
    },
    lyric: {
      type: LyricType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parnetValue, { id }) {
        return Lyric.findById(id)
      },
    },
  }),
})

module.exports = RootQuery
