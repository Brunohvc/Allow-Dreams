'use strict'

const { test, trait, before } = use('Test/Suite')('User')
const Plan = use('App/Models/User')

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

trait('Test/ApiClient')

test('garantir que usuário foi cadastrado com plano válido', async ({ assert, client }) => {
  //cria plano fake
  const plan = await Factory.model("App/Models/Plan").create()
  const planId = plan['$attributes'].id

  const planResponse = await client.get(`/api/v1/plans/${planId}`).end()

  planResponse.assertStatus(200)

  let data = {
    name: 'Gabriel Zanghelini',
    email: 'zanghelinigab@gmail.com',
    nickname: 'zangs',
    birth_date: new Date(1998, 10, 23),
    phone: '999999999',
    password: '123',
    genre: 'male',
    private_profile: false,
    plan_id: planId
  }
  
  //Testa criação do usuário
  await Plan.create(data)
  
  const userResponse = await client.get('/api/v1/users').end()
  
  userResponse.assertStatus(200)
  userResponse.assertJSONSubset([{
    name: 'Gabriel Zanghelini',
    email: 'zanghelinigab@gmail.com'
  }])
})
