import { Route } from '../domain/route.entity'
import { RouteRepository } from '../domain/route.repository'

export class RouteInMemoryRepository implements RouteRepository {
  items: Route[] = []
  async save(route: Route): Promise<void> {
    this.items.push(route)
  }
}
