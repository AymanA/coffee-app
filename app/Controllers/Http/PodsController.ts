import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import PodService from "App/services/PodService";

export default class PodsController {
    private podService;
    constructor() {
        this.podService = new PodService()
    }

    public async getPods({ request, response }: HttpContextContract) {
        const data = request.qs()
        const pods = await this.podService.getPods(data)
        
        return response.json({
            data: pods
        });
    }
}
