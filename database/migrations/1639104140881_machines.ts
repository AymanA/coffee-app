import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Machines extends BaseSchema {
  protected tableName = 'machines'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string("sku", 8).notNullable().primary()
      table.string("description").notNullable()
      table.integer("product_type_id").unsigned().references('id').inTable('types')
      table.integer("model_id").unsigned().references('id').inTable('models')
      table.boolean("water_line_compatible").defaultTo(false)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
