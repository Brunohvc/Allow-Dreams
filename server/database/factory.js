'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use("Hash");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

Factory.blueprint("App/Models/Plan", async faker => {
  return {
    name: 'Gratuíto',
    description: "Plano de teste",
    value: 0,
  };
});

Factory.blueprint("App/Models/User", async faker => {
  return {
    plan_id: 1,
    name: faker.name(),
    nickname: faker.name() ,
    email: faker.name() + "@gmail.com",
    birth_date: '1999-09-09',
    phone: '9409239203902',
    genre: 'male',
    password: await Hash.make(faker.password())
  };
});
