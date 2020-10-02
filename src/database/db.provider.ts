import * as sequelize from 'sequelize';
import {Sequelize} from 'sequelize';

class DbProvider {
  db: Sequelize;

  constructor() {
    this.db = new (sequelize as any)('bike_stolen', 'root', '119256', {
      dialect: 'mysql',
      host: 'localhost'
    });
  }
}

export const db = (new DbProvider()).db;
