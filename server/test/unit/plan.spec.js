'use strict'

const { test, trait, before } = use('Test/Suite')('Plan')
const Plan = use('App/Models/Plan')

trait('Test/ApiClient')

test('garantir que plano foi criado corretamente', async ({ assert, client }) => {
  let data = {
    name: 'Premium',
    value: '1',
    description: 'Plano de teste'
  }

  await Plan.create(data)

  const response = await client.get('/api/v1/plans').end()
  
  response.assertStatus(200)
  response.assertJSONSubset([{
    name: 'Premium',    
    status: 1
  }])
})