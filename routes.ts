/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import LogicasController from 'App/Controllers/Http/LogicasController'

Route.get('/', async () => {
  return { hello: 'world' }
})
Route.get('/data','LogicasController.data').as('data')
Route.any('/method','LogicasController.method').as('method')
Route.any('/methods/:id?','LogicasController.allMethods').as('all')



Route.post ('get/data','LogicasController.getData');
