import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { RouteInMemoryRepository } from '../@core/infra/db/in-memory/route-in-memory.repository';
import { CreateRouteUseCase } from '../@core/application/create-route-use-case';
import { RouteRepository } from '../@core/domain/route.repository';
import { ListAllRoutesUseCase } from '../@core/application/list-all-routes-use-case';
import { RouteSchema } from '../@core/infra/db/typeorm/route.schema';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { RouteTypeOrmRepository } from '../@core/infra/db/typeorm/route-typeorm.repository';
import { DataSource } from 'typeorm';
import { Route } from '../@core/domain/route.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RouteSchema])],
  controllers: [RoutesController],
  providers: [
    RoutesService,
    // {
    //   provide: RouteInMemoryRepository,
    //   useClass: RouteInMemoryRepository,
    // },
    {
      provide: RouteTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        return new RouteTypeOrmRepository(dataSource.getRepository(Route));
      },
      inject: [getDataSourceToken()],
    },
    // {
    //   provide: CreateRouteUseCase,
    //   useFactory: (routeRepository: RouteRepository) => {
    //     return new CreateRouteUseCase(routeRepository);
    //   },
    //   inject: [RouteInMemoryRepository],
    // },
    {
      provide: CreateRouteUseCase,
      useFactory: (routeRepository: RouteRepository) => {
        return new CreateRouteUseCase(routeRepository);
      },
      inject: [RouteTypeOrmRepository],
    },
    // {
    //   provide: ListAllRoutesUseCase,
    //   useFactory: (routeRepository: RouteRepository) => {
    //     return new ListAllRoutesUseCase(routeRepository);
    //   },
    //   inject: [RouteInMemoryRepository],
    // },
    {
      provide: ListAllRoutesUseCase,
      useFactory: (routeRepository: RouteRepository) => {
        return new ListAllRoutesUseCase(routeRepository);
      },
      inject: [RouteTypeOrmRepository],
    },
  ],
})
export class RoutesModule {}
