import { LatLng, Route } from './route.entity'
import { RouteRepository } from './route.repository'
// S    OLID
class CreateRouteUseCase {
  constructor(private routeRepository: RouteRepository) {}

  async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
    // operaciones encima de las entidades
    // recibe input y devuelve output
    const route = new Route(input)
    // antes de retornar la ruta debo almacenar la ruta
    // pero mi caso de uso no sabe como ni donde se esta almacenando por lo tanto
    // saco esa responsabilidad de mi caso de uso
    // solo sabe que fue almacenada
    await this.routeRepository.save(route)

    return route.toJSON()
  }
}

type CreateRouteInput = {
  title: string
  startPosition: LatLng
  endPosition: LatLng
  paths?: LatLng[]
}

type CreateRouteOutput = {
  title: string
  startPosition: LatLng
  endPosition: LatLng
  paths?: LatLng[]
}

// esto hace que la capa superior conozca la capa de entity y no esta bueno que eso pase
// type CreateRouteOutput = Route
