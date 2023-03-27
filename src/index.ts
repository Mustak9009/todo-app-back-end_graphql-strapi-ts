interface IdsType {
  ids: string[]
}
const TodoTypesDefsGq = `
  type value {
    count:Int
  }
  type Mutation{
    deleteAllTodo(ids:[String!]):value!
  } 
`;
export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const extensionService = strapi.plugin('graphql').service('extension');
    extensionService.use({
      typeDefs: TodoTypesDefsGq,
      resolvers: {
        Mutation: {
          deleteAllTodo: {
            resolve: async (parent, args, context) => {
              const { ids }: IdsType = args;
              const result = await strapi.controller('api::todo.todo').deleteAllTodo(ids); //Call controller -> deleteAll
              return result;
            }
          }
        }
      },
      resolversConfig: {
        'Mutation.deleteAllTodo': {
          /**
          * Querying the Restaurants content-type
          * requires the deleteAll permission
          * on the 'todo' content-type
          * of the 'todo' API
          */
          auth: {
            scope: ['api::todo.todo.deleteAllTodo'] //Permission allowed...
          }
        }
      }
    });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) { },
};
