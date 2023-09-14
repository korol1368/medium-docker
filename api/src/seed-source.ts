import { DataSource } from 'typeorm';
import config from './data-source';

const seedconfig = {
  ...config,
  migrations: [__dirname + '/seeds/**/*{.ts,.js}'],
};

export default seedconfig;

export const AppDataSource = new DataSource(seedconfig);
AppDataSource.initialize();
