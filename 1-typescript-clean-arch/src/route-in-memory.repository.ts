import { Route } from './route.entity'
import { RouteRepository } from './route.repository'

export class RouteInMemoryRepository implements RouteRepository {
  items: Route[] = []
  async save(route: Route): Promise<void> {
    this.items.push(route)
  }
}
