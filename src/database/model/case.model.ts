import {DataTypes, Model, ModelAttributes, Sequelize} from 'sequelize';

import {DbTablesEnum} from '../constants';
import {db} from '../db.provider';
import {DBModelFieldInit} from '../db-structure.model';
import {OfficerDBModel} from './officer.model';

export interface ICase {
  id: number,
  color: string,
  type: string,
  owner: string,
  dateOfTheft: string,
  status: string,
  officerId: number
}

const modelAttributes: DBModelFieldInit<ICase> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  owner: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateOfTheft: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('UTC_TIMESTAMP'),
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  officerId: {
    type: DataTypes.INTEGER
  }
};

export class CaseDBModel extends Model {
}

CaseDBModel.init(
  modelAttributes as ModelAttributes,
  {
    sequelize: db,
    modelName: DbTablesEnum.CASE,
    tableName: DbTablesEnum.CASE,
    timestamps: false
  }
);

CaseDBModel.belongsTo(OfficerDBModel, {foreignKey: 'officerId', constraints: false});
