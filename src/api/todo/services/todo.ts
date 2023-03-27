/**
 * todo service
 */

import { factories } from '@strapi/strapi';
import { Context } from 'koa';
interface IdsType{
    ids:string[]
}
export default factories.createCoreService('api::todo.todo');
