import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MachineService from 'App/services/MachineService';

export default class MachinesController {
    private machineService;
    constructor() {
        this.machineService = new MachineService()
    }

    public async getMachines({ request, response }: HttpContextContract) {
        const data = request.qs()
        const machines = await this.machineService.getMachines(data)
        
        return response.json({
            data: machines
        });
    }

}
