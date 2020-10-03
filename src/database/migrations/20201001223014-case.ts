import {ModelAttributes, QueryInterface, QueryOptions} from 'sequelize';

import {DbTablesEnum} from '../constants';
import {DBModelFieldInit} from '../db-structure.model';
import {ICase, IOfficer} from '../model';
import {migrationWrapper} from '../transaction/migration.wrapper';

export default {
  up: async (queryInterface: QueryInterface, dataTypes: any) => {
    const migration = async (options: QueryOptions) => {

      const caseModelAttributes: DBModelFieldInit<ICase> = {
        id: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        color: {
          type: dataTypes.STRING,
          allowNull: false
        },
        type: {
          type: dataTypes.STRING,
          allowNull: false
        },
        owner: {
          type: dataTypes.STRING,
          allowNull: false
        },
        dateOfTheft: {
          type: dataTypes.DATE,
          defaultValue: dataTypes.DATE,
          allowNull: false
        },
        status: {
          type: dataTypes.STRING,
          allowNull: false
        },
        officerId: {
          type: dataTypes.INTEGER
        }
      };

      await queryInterface.createTable(DbTablesEnum.CASE, caseModelAttributes as ModelAttributes, options);

      const officerModelAttributes: DBModelFieldInit<IOfficer> = {
        id: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: dataTypes.STRING,
          allowNull: false
        },
        caseId: {
          type: dataTypes.INTEGER
        }
      };
      await queryInterface.createTable(DbTablesEnum.OFFICER, officerModelAttributes as ModelAttributes, options);

      return Promise.resolve();
    };

    await migrationWrapper(migration);
  },

  down: async (queryInterface: QueryInterface, Sequelize: any) => {
    const migration = async (options: QueryOptions) => {
      await queryInterface.dropAllTables(options);
    };
    await migrationWrapper(migration);
  }
};
