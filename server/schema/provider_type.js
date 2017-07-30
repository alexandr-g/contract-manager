const mongoose = require('mongoose')
const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
} = graphql
const Lyric = mongoose.model('lyric')

const ProviderType = new GraphQLObjectType({
  name: 'ProviderType',
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    song: {
      type: require('./category_type'),
      resolve(parentValue) {
        return Lyric.findById(parentValue).populate('song').then(lyric => {
          console.log(lyric)
          return lyric.song
        })
      },
    },
  }),
})

module.exports = ProviderType
