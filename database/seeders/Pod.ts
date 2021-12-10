import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Flavor from 'App/Models/Flavor';
import Pod from 'App/Models/Pod';
import Size from 'App/Models/Size';
import Type from 'App/Models/Type';

export default class PodSeeder extends BaseSeeder {
  public async run () {

    const large = await Type.create({
      name: "COFFEE_POD_LARGE"
    });

    const small = await Type.create({
      name: "COFFEE_POD_SMALL"
    });

    const espresso = await Type.create({
      name: "ESPRESSO_POD"
    });

    const vanilla = await Flavor.create({
      name: "COFFEE_FLAVOR_VANILLA"
    });

    const caramel = await Flavor.create({
      name: "COFFEE_FLAVOR_CARAMEL"
    });
    
    const psl = await Flavor.create({
      name: "COFFEE_FLAVOR_PSL"
    });
   
    const mocha = await Flavor.create({
      name: "COFFEE_FLAVOR_MOCHA"
    }); 

    const hazelnut = await Flavor.create({
      name: "COFFEE_FLAVOR_HAZELNUT"
    });

    const oneDozen = await Size.create({
      name: "1 dozen",
      value: 12
    });

    const threeDozen = await Size.create({
      name: "3 dozen",
      value: 36
    });

    const fiveDozen = await Size.create({
      name: "5 dozen",
      value: 60
    });

    const sevenDozen = await Size.create({
      name: "7 dozen",
      value: 84
    });

    await Pod.createMany([
      {
        sku: "CP001",
        description: "small coffee pod, 1 dozen, vanilla",
        product_type_id: small.id,
        pack_size_id: oneDozen.id,
        coffee_flavor_id: vanilla.id
      },
      {
        sku: "CP003",
        description: "small coffee pod, 3 dozen, vanilla",
        product_type_id: small.id,
        pack_size_id: threeDozen.id,
        coffee_flavor_id: vanilla.id
      },
      {
        sku: "CP011",
        description: "small coffee pod, 1 dozen, caramel",
        product_type_id: small.id,
        pack_size_id: oneDozen.id,
        coffee_flavor_id: caramel.id
      },
      {
        sku: "CP013",
        description: "small coffee pod, 3 dozen, caramel",
        product_type_id: small.id,
        pack_size_id: threeDozen.id,
        coffee_flavor_id: caramel.id
      },
      {
        sku: "CP021",
        description: "small coffee pod, 1 dozen, psl",
        product_type_id: small.id,
        pack_size_id: oneDozen.id,
        coffee_flavor_id: psl.id
      },
      {
        sku: "CP023",
        description: "small coffee pod, 3 dozen, psl",
        product_type_id: small.id,
        pack_size_id: threeDozen.id,
        coffee_flavor_id: psl.id
      },
      {
        sku: "CP031",
        description: "small coffee pod, 1 dozen, mocha",
        product_type_id: small.id,
        pack_size_id: oneDozen.id,
        coffee_flavor_id: mocha.id
      },
      {
        sku: "CP033",
        description: "small coffee pod, 3 dozen, mocha",
        product_type_id: small.id,
        pack_size_id: threeDozen.id,
        coffee_flavor_id: mocha.id
      },
      {
        sku: "CP041",
        description: "small coffee pod, 1 dozen, hazelnut",
        product_type_id: small.id,
        pack_size_id: oneDozen.id,
        coffee_flavor_id: hazelnut.id
      },
      {
        sku: "CP043",
        description: "small coffee pod, 3 dozen, hazelnut",
        product_type_id: small.id,
        pack_size_id: threeDozen.id,
        coffee_flavor_id: hazelnut.id
      },
      {
        sku: "CP101",
        description: "large coffee pod, 1 dozen, vanilla",
        product_type_id: large.id,
        pack_size_id: oneDozen.id,
        coffee_flavor_id: vanilla.id
      },
      {
        sku: "CP103",
        description: "large coffee pod, 3 dozen, vanilla",
        product_type_id: large.id,
        pack_size_id: threeDozen.id,
        coffee_flavor_id: vanilla.id
      },
      {
        sku: "CP111",
        description: "large coffee pod, 1 dozen, caramel",
        product_type_id: large.id,
        pack_size_id: oneDozen.id,
        coffee_flavor_id: caramel.id
      },
      {
        sku: "CP113",
        description: "large coffee pod, 3 dozen, caramel",
        product_type_id: large.id,
        pack_size_id: threeDozen.id,
        coffee_flavor_id: caramel.id
      },
      {
        sku: "CP121",
        description: "large coffee pod, 1 dozen, psl",
        product_type_id: large.id,
        pack_size_id: oneDozen.id,
        coffee_flavor_id: psl.id
      },
      {
        sku: "CP123",
        description: "large coffee pod, 3 dozen, psl",
        product_type_id: large.id,
        pack_size_id: threeDozen.id,
        coffee_flavor_id: psl.id
      },
      {
        sku: "CP131",
        description: "large coffee pod, 1 dozen, mocha",
        product_type_id: large.id,
        pack_size_id: oneDozen.id,
        coffee_flavor_id: mocha.id
      },
      {
        sku: "CP133",
        description: "large coffee pod, 3 dozen, mocha",
        product_type_id: large.id,
        pack_size_id: threeDozen.id,
        coffee_flavor_id: mocha.id
      },
      {
        sku: "CP141",
        description: "large coffee pod, 1 dozen, hazelnut",
        product_type_id: large.id,
        pack_size_id: oneDozen.id,
        coffee_flavor_id: hazelnut.id
      },
      {
        sku: "CP143",
        description: "large coffee pod, 3 dozen, hazelnut",
        product_type_id: large.id,
        pack_size_id: threeDozen.id,
        coffee_flavor_id: hazelnut.id
      },
      {
        sku: "EP003",
        description: "espresso pod, 3 dozen, vanilla",
        product_type_id: espresso.id,
        pack_size_id: threeDozen.id,
        coffee_flavor_id: vanilla.id
      },
      {
        sku: "EP005",
        description: "espresso pod, 5 dozen, vanilla",
        product_type_id: espresso.id,
        pack_size_id: fiveDozen.id,
        coffee_flavor_id: vanilla.id
      },
      {
        sku: "EP007",
        description: "espresso pod, 7 dozen, vanilla",
        product_type_id: espresso.id,
        pack_size_id: sevenDozen.id,
        coffee_flavor_id: vanilla.id
      },
      {
        sku: "EP013",
        description: "espresso pod, 3 dozen, caramel",
        product_type_id: espresso.id,
        pack_size_id: threeDozen.id,
        coffee_flavor_id: caramel.id
      },
      {
        sku: "EP015",
        description: "espresso pod, 5 dozen, caramel",
        product_type_id: espresso.id,
        pack_size_id: fiveDozen.id,
        coffee_flavor_id: caramel.id
      },
      {
        sku: "EP017",
        description: "espresso pod, 7 dozen, caramel",
        product_type_id: espresso.id,
        pack_size_id: sevenDozen.id,
        coffee_flavor_id: caramel.id
      }
    ]);  }
}
