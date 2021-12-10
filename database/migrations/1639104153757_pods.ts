import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pods extends BaseSchema {
  protected tableName = 'pods'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string("sku", 8).notNullable().primary()
      table.string("description").notNullable()
      table.integer("product_type_id").unsigned().references('id').inTable('types')
      table.integer('coffee_flavor_id').unsigned().references('id').inTable('flavors')
      table.integer('pack_size_id').unsigned().references('id').inTable('pack_sizes')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
