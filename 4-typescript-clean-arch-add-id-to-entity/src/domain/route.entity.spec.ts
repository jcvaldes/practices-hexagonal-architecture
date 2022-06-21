import { LatLng, Route, RouteProps } from './route.entity'

describe('Route Tests', () => {
  test('constructor', () => {
    let routeProps: RouteProps = {
      title: 'mi ruta',
      startPosition: { lat: 3, lng: 39 },
      endPosition: { lat: 23, lng: 33 }
    }
    let route = new Route(routeProps)

    expect(route.props).toStrictEqual({
      ...routeProps,
      points: []
    })

    routeProps = {
      title: 'mi ruta',
      startPosition: { lat: 3, lng: 39 },
      endPosition: { lat: 23, lng: 33 },
      points: [
        {
          lat: 23,
          lng: 33
        }
      ]
    }
    route = new Route(routeProps)
    expect(route.id).toBeDefined()
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [
        {
          lat: 23,
          lng: 33
        }
      ]
    })
  })

  test('updateTitle method', () => {
    const routeProps: RouteProps = {
      title: 'mi ruta',
      startPosition: { lat: 3, lng: 39 },
      endPosition: { lat: 23, lng: 33 }
    }
    const route = new Route(routeProps)
    route.updateTitle('title updated')
    expect(route.title).toStrictEqual('title updated')
  })

  test('updatePosition method', () => {
    const routeProps: RouteProps = {
      title: 'mi ruta',
      startPosition: { lat: 3, lng: 39 },
      endPosition: { lat: 23, lng: 33 }
    }
    const route = new Route(routeProps)
    const startPosition: LatLng = { lat: 3, lng: 39 }
    const endPosition: LatLng = { lat: 23, lng: 33 }
    route.updatePosition(startPosition, endPosition)
    expect(route.startPosition).toStrictEqual(startPosition)
    expect(route.endPosition).toStrictEqual(endPosition)
  })
  test('updatePoints method', () => {
    const routeProps: RouteProps = {
      title: 'mi ruta',
      startPosition: { lat: 3, lng: 39 },
      endPosition: { lat: 23, lng: 33 }
    }
    const route = new Route(routeProps)
    const points: LatLng[] = [{ lat: 3, lng: 39 }]

    route.updatePoints(points)
    expect(route.points).toHaveLength(1)
    expect(route.points).toStrictEqual(points)
  })
})
