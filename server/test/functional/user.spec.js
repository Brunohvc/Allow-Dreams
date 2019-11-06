'use strict'

const { test, trait, before } = use('Test/Suite')('User')
const User = use('App/Models/User')

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

trait('Test/ApiClient')

test('garantir que usuário foi cadastrado com plano válido', async ({ assert, client }) => {
  //cria plano
  const plan = await Factory.model("App/Models/Plan").create()
  const planId = plan['$attributes'].id

  const planResponse = await client.get(`/api/v1/plans/${planId}`).end()
  console.log(planResponse)

  planResponse.assertStatus(200)
  planResponse.assertJSONSubset([{
    id: planId
  }])

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
  
  await User.create(data)
  
  const userResponse = await client.get('/api/v1/users').end()
  
  userResponse.assertStatus(200)
  userResponse.assertJSONSubset([{
    name: 'Gabriel Zanghelini',
    email: 'zanghelinigab@gmail.com'
  }])
})
