import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PackSizes extends BaseSchema {
  protected tableName = 'pack_sizes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string("name").notNullable()
      table.integer("value").notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
