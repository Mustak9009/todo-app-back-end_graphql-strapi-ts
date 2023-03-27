/**
 * todo controller
 */

import { factories } from '@strapi/strapi'
import { Context } from 'koa';
export default factories.createCoreController('api::todo.todo',({strapi})=>({
  deleteAllTodo(ctx: Context): Promise<any> { //custom controller
        const result =  strapi.query('api::todo.todo').deleteMany({ //also u use -> strapi.db.query('')
            where: {
                id: {
                  $eq: ctx,
                },
              },
        });
        return result;
      },

}));
