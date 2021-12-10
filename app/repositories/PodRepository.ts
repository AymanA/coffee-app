import Pod from "App/Models/Pod";

export default class PodRepository {

    public async getPods(query){
        return await Pod.query().where(query.productType).where(query.coffeeFlavor)
        .where(query.packSize)
    }
}
