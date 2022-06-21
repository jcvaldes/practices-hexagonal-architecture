import { Route } from './route.entity'

export interface RouteRepository {
  save(route: Route): Promise<void>
}
