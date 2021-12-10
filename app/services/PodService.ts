import PodRepository from "App/repositories/PodRepository";

export default class PodService {
    private podRepository;

    constructor() {
        this.podRepository = new PodRepository()
    }
    public async getPods(data) {
        let query:any = {}

        const productType = data.productType? { product_type_id: data.productType }: {};
        const packSize = data.packSize? { pack_size_id: data.packSize }: {};
        const coffeeFlavor = data.coffeeFlavor? { coffee_flavor_id: data.coffeeFlavor }: {};

        query.productType = productType;
        query.packSize = packSize;
        query.coffeeFlavor = coffeeFlavor;


        let pods =  await this.podRepository.getPods(query)

        return pods.map(pod => pod.sku)
    }
}
