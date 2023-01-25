const merge = require('lodash.merge');
const {
  userSchema,
  userResolvers,
} = require('./schemas');
/**
 * PRECAUCIÓN
 * EN EL ORDEN QUE SE DEFINA LOS SCHEMAS Y LOS RESOLVERS
 * AGREGAR EN DICHO ORDEN EN type Query o type Mutation
 */
const globalTypeDefs = `
    # The implementation for this scalar is provided by the
    # 'GraphQLUpload' export from the 'graphql-upload' package
    # in the resolver map below.
    scalar Upload
    scalar Date
    ${userSchema}
    type Query {
      # userSchema
      user: User
      login(email: String!, password: String!): Auth
      sendEmailToRecoverPassword(email: String!): Boolean
    }
    type Mutation {
      # userSchema
      updateUserPassword(code: String!, password: String!): Boolean
      updateUser(input: UserUpdateInput): User
      createUser(input: UserInput): User
      activateUser(code: String!): Boolean
    }
`;

module.exports = {
  globalTypeDefs,
  globalResolvers: merge(
    userResolvers,
    // Poner aquí los otros resolvers
  ),
};
