'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})



Route.group(() => {

  Route.resource('additional', 'AdditionalController')
  Route.resource('benefits', 'BenefitController')
  Route.resource('comments', 'CommentController')
  Route.resource('curriculums', 'CurriculumController')
  Route.resource('followers', 'FollowerController')
  Route.resource('galleries', 'GalleryController')
  Route.resource('groups', 'GroupController')
  Route.resource('images', 'ImageController')
  Route.resource('invoices', 'InvoiceController')
  Route.resource('likes', 'LikeController')
  Route.resource('plans', 'PlanController')
  Route.resource('post', 'postController')
  Route.resource('settings', 'SettingController')

  Route.resource('users', 'UserController')
  Route.post('users/login', 'UserController.login')
  Route.post('post/feed', 'PostController.feed')

}).prefix('api/v1')