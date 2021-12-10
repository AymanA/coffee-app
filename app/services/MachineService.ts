import MachineRepository from "App/repositories/MachineRepository";

export default class MachineService {
    private machineRepository;

    constructor() {
        this.machineRepository = new MachineRepository()
    }
    public async getMachines(data) {
        let query:any = {}

        const productType = data.productType? { product_type_id: data.productType }: {};
        const waterLine = data.waterLine? { water_line_compatible: data.waterLine }: {};

        query.productType = productType;
        query.waterLine = waterLine;

        let machines = await this.machineRepository.getMachines(query)

        return machines.map(machine => machine.sku)
    }
}
