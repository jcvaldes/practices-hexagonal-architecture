import { DataSource } from 'typeorm';
import { Route, RouteProps } from '../../../domain/route.entity';
import { RouteTypeOrmRepository } from './route-typeorm.repository';
import { RouteSchema } from './route.schema';

describe('RouteTypeOrmRepository', () => {
  it('should save a new route', async () => {
    const dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      logging: true,
      entities: [RouteSchema],
    });
    await dataSource.initialize();
    const ormRepo = dataSource.getRepository(Route);
    const repository = new RouteTypeOrmRepository(ormRepo);
    const routeProps = {
      title: 'mi ruta',
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 3, lng: 4 },
      points: [{ lat: 3, lng: 4 }],
    };
    const route = Route.create(routeProps);
    await repository.save(route);
    const routeFound = await ormRepo.findOneBy({ id: route.id });
    expect(routeFound.toJSON()).toStrictEqual(route.toJSON());
  });
});
