'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Database = use('Database')


class UserSeeder {
  async run () {
    const plan = await Factory.model("App/Models/Plan").create();
    const user = await Factory.model("App/Models/User").make();
    await user.plan().associate(plan);


  }
}

module.exports = UserSeeder
