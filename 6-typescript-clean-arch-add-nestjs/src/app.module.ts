import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutesModule } from './routes/routes.module';

// Decorator es una caracteristica de es7 2016
@Module({
  imports: [RoutesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
