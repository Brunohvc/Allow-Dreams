'use strict'

const { test, trait } = use('Test/Suite')('User')
const User = use('App/Models/User')

trait('Test/ApiClient')

test('garantir que usuário foi cadastrado', async ({ assert, client }) => {
  let data = {
    name: 'Gabriel Zanghelini',
    email: 'zanghelinigab@gmail.com',
    nickname: 'zangs',
    birth_date: new Date(1998, 10, 23),
    phone: '999999999',
    password: '123',
    genre: 'male',
    private_profile: false,
    plan_id: 1
  }

  // const response = await client
  //   .post('/api/v1/users')
  //   .send(data)
  //   .end()

  //-----------------

  await User.create(data)

  const response = await client.get('/api/v1/users').end()

  response.assertStatus(200)
  response.assertJSONSubset([{
    name: 'Gabriel Zanghelini',
    email: 'zanghelinigab@gmail.com'
  }])
}).timeout(0)
