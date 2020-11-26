import Sequelize, {Optional, Model} from 'sequelize';
import {Link} from './link';
import database from '../database';

// Instrução que ao criar um novo link o id é opcional
interface ILinkCreationAttributes extends Optional<Link, "id">{}

export interface ILinkModel extends Model<Link, ILinkCreationAttributes>, Link {}

const LinkModel = database.define<ILinkModel>('Link', {
  id: {
    type:Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  url: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  code: {
    type: Sequelize.STRING(20),
    unique: true,
    allowNull: false
  },
  hits: {
    type:Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  }
})

export default LinkModel;