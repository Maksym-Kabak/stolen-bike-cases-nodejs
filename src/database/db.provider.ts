import * as sequelize from 'sequelize';
import {Sequelize} from 'sequelize';
import {configs} from '../configs';

class DbProvider {
  db: Sequelize;

  constructor() {
    this.db = new (sequelize as any)(
      configs.DB_NAME,
      configs.DB_USER,
      configs.DB_PASS, {
        dialect: 'mysql',
        host: configs.DB_HOST
      });
  }
}

export const db = (new DbProvider()).db;
