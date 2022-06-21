import { Route, RouteProps } from '../../domain/route.entity'
import { RouteInMemoryRepository } from './route-in-memory.repository'

describe('RouteInMemoryRepository', () => {
  it('should save a new route', async () => {
    const repository = new RouteInMemoryRepository()
    let routeProps: RouteProps = {
      title: 'mi ruta',
      startPosition: { lat: 3, lng: 39 },
      endPosition: { lat: 23, lng: 33 }
    }
    const route = new Route(routeProps)
    await repository.save(route)
    expect(repository.items).toHaveLength(1)
    expect(repository.items).toStrictEqual([route])
  })
})
