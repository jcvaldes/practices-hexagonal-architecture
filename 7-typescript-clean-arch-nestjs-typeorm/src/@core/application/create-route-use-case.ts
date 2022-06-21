import { LatLng, Route } from '../domain/route.entity';
import { RouteRepository } from '../domain/route.repository';
// S    OLID

// El caso de uso es agnostico
// reemplaza a los servicios por SRP y evitan los merge de los programadores
export class CreateRouteUseCase {
  constructor(private routeRepository: RouteRepository) {}

  async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
    // operaciones encima de las entidades
    // recibe input y devuelve output
    const route = Route.create(input);
    // antes de retornar la ruta debo almacenar la ruta
    // pero mi caso de uso no sabe como ni donde se esta almacenando por lo tanto
    // saco esa responsabilidad de mi caso de uso
    // solo sabe que fue almacenada
    await this.routeRepository.save(route);

    return route.toJSON();
  }
}

export type CreateRouteInput = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};

export type CreateRouteOutput = {
  id: string;
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};

// esto hace que la capa superior conozca la capa de entity y no esta bueno que eso pase
// type CreateRouteOutput = Route
