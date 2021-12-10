import Machine from "App/Models/Machine";

export default class MachineRepository {

    public async getMachines(query){
        return await Machine.query().where(query.productType).where(query.waterLine)
    }
}
