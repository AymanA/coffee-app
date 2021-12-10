import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Machine from 'App/Models/Machine';
import Model from 'App/Models/Model';
import Type from 'App/Models/Type';

export default class MachineSeeder extends BaseSeeder {
  public async run() {
    await Machine.truncate
    await Model.truncate
    await Type.truncate

    const baseModel = await Model.create({
      name: "BASE_MODEL"
    })
    const premiumModel = await Model.create({
      name: "PREMIUM_MODEL"
    })
    const deluxModel = await Model.create({
      name: "DELUX_MODEL"
    })

    const largeType = await Type.create({
      name: "COFFEE_MACHINE_LARGE"
    })

    const smallType = await Type.create({
      name: "COFFEE_MACHINE_SMALL"
    })

    const espressoType = await Type.create({
      name: "ESPRESSO_MACHINE"
    })

    await Machine.createMany([
      {
        sku: "CM001",
        description: "small machine, base model",
        product_type_id: smallType.id,
        model_id: baseModel.id
      },
      {
        sku: "CM002",
        description: "small machine, premium model",
        product_type_id: smallType.id,
        model_id: premiumModel.id
      },
      {
        sku: "CM003",
        description: "small machine, delux model, water line compatible",
        water_line_compatible: true,
        product_type_id: smallType.id,
        model_id: deluxModel.id
      },
      {
        sku: "CM101",
        description: "large machine, base model",
        product_type_id: largeType.id,
        model_id: baseModel.id
      },
      {
        sku: "CM102",
        description: "large machine, premium model, water line compatible",
        water_line_compatible: true,
        product_type_id: largeType.id,
        model_id: premiumModel.id
      },
      {
        sku: "CM103",
        description: "large machine, deluxe model, water line compatible",
        water_line_compatible: true,
        product_type_id: largeType.id,
        model_id: deluxModel.id
      },
      {
        sku: "EM001",
        description: "espresso machine, base model",
        product_type_id: espressoType.id,
        model_id: baseModel.id
      },
      {
        sku: "EM002",
        description: "espresso machine, premium model",
        product_type_id: espressoType.id,
        model_id: premiumModel.id
      },
      {
        sku: "EM003",
        description: "espresso machine, deluxe model, water line compatible",
        water_line_compatible: true,
        product_type_id: espressoType.id,
        model_id: deluxModel.id
      },
    ])

  }
}
