import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { RouteInMemoryRepository } from '../@core/infra/db/route-in-memory.repository';
import { CreateRouteUseCase } from '../@core/application/create-route-use-case';
import { RouteRepository } from '../@core/domain/route.repository';
import { ListAllRoutesUseCase } from '../@core/application/list-all-routes-use-case';

@Module({
  controllers: [RoutesController],
  providers: [
    RoutesService,
    {
      provide: RouteInMemoryRepository,
      useClass: RouteInMemoryRepository,
    },
    {
      provide: CreateRouteUseCase,
      useFactory: (routeRepository: RouteRepository) => {
        return new CreateRouteUseCase(routeRepository);
      },
      inject: [RouteInMemoryRepository],
    },
    {
      provide: ListAllRoutesUseCase,
      useFactory: (routeRepository: RouteRepository) => {
        return new ListAllRoutesUseCase(routeRepository);
      },
      inject: [RouteInMemoryRepository],
    },
  ],
})
export class RoutesModule {}
