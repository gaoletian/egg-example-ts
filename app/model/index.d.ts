import Egg from 'egg';
import Sequelize from 'sequelize';

declare interface IModel extends Sequelize.Sequelize, ISequelizeModel {
}
/* tslint:disable */
declare module 'egg' {
    export interface Context extends Egg.Context{
        model: IModel;
        Sequelize: Sequelize.DataTypes;
    }
}

declare interface ISequelizeModel {
    User: Sequelize.Model<any, any>;
    Bank: Sequelize.Model<any, any>;
}
