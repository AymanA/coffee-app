import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Machine extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public sku: string
  
  @column()
  public description: string
  
  @column()
  public water_line_compatible: boolean
  
  @column()
  public product_type_id: number
    
  @column()
  public model_id: number
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
