import {DataTypes, Model, ModelAttributes} from 'sequelize';

import {DbTablesEnum} from '../constants';
import {db} from '../db.provider';
import {DBModelFieldInit} from '../db-structure.model';

export interface IOfficer {
  id: number,
  name: string,
  caseId: number
}

const modelAttributes: DBModelFieldInit<IOfficer> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  caseId: {
    type: DataTypes.INTEGER
  }
};

export class OfficerDBModel extends Model {
}

OfficerDBModel.init(
  modelAttributes as ModelAttributes,
  {
    sequelize: db,
    modelName: DbTablesEnum.OFFICER,
    tableName: DbTablesEnum.OFFICER,
    timestamps: false
  }
);

