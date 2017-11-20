const mongoose = require('mongoose')
const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql

const GategoryType = new GraphQLObjectType({
  name: 'GategoryType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
})

module.exports = GategoryType
