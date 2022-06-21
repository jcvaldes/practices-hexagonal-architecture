import { Route } from '../../../domain/route.entity';
import { Repository } from 'typeorm';
import { RouteRepository } from '../../../domain/route.repository';

export class RouteTypeOrmRepository implements RouteRepository {
  constructor(private ormRepo: Repository<Route>) {}

  async save(route: Route): Promise<void> {
    await this.ormRepo.save(route);
  }
  findAll(): Promise<Route[]> {
    return this.ormRepo.find();
  }
}
