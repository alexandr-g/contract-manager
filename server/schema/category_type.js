const mongoose = require('mongoose')
const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql
// const LyricType = require('./lyric_type')
// const Song = mongoose.model('song')

const GategoryType = new GraphQLObjectType({
  name: 'GategoryType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    // lyrics: {
    //   type: new GraphQLList(LyricType),
    //   resolve(parentValue) {
    //     return Song.findLyrics(parentValue.id)
    //   },
    // },
  }),
})

module.exports = GategoryType
