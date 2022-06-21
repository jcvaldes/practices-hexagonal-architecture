import { RouteInMemoryRepository } from '../infra/db/route-in-memory.repository';
import { CreateRouteUseCase } from './create-route-use-case';

describe('CreateRouteUseCase Test', () => {
  it('should create a new route', async () => {
    const repository = new RouteInMemoryRepository();
    const createRouteUseCase = new CreateRouteUseCase(repository);

    const input = {
      title: 'mi ruta',
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 3, lng: 4 },
    };
    const output = await createRouteUseCase.execute(input);

    expect(output).toStrictEqual({
      id: repository.items[0].id,
      ...input,
      points: [],
    });

    expect(repository.items).toHaveLength(1);
  });
});
