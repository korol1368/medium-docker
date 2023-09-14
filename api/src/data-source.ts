import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'api_db',
  port: 5432,
  username: 'admin',
  password: 'root',
  database: 'medium_db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  migrationsTableName: 'custom_migrations',
  logging: true,
};

export default config;

export const AppDataSource = new DataSource(config);
AppDataSource.initialize();
