'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BenefitPlanSchema extends Schema {
  up () {
    this.create('benefit_plans', (table) => {
      table.increments()
      table.integer('plan_id').unsigned().references('id').inTable('plans')
      table.integer('benefit_id').unsigned().references('id').inTable('benefits')
      table.timestamps()
    })
  }

  down () {
    this.drop('benefit_plans')
  }
}

module.exports = BenefitPlanSchema
