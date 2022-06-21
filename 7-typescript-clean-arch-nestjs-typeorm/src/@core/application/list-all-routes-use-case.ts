import { LatLng, Route } from '../domain/route.entity';
import { RouteRepository } from '../domain/route.repository';
// S    OLID

// El caso de uso es agnostico
export class ListAllRoutesUseCase {
  constructor(private routeRepository: RouteRepository) {}

  async execute(): Promise<CreateRouteOutput> {
    const routes = await this.routeRepository.findAll();
    return routes.map((r) => r.toJSON());
  }
}

export type CreateRouteOutput = {
  id: string;
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
}[];
