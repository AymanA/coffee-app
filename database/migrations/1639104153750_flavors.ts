import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Flavors extends BaseSchema {
  protected tableName = 'flavors'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string("name").notNullable();
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
