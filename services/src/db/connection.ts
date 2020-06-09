import { Sequelize } from "sequelize-typescript";

import accessEnv from "#root/helpers/accessEnv";

const DB_URL = accessEnv("DB_URL");

const sequelize = new Sequelize(DB_URL, {
  dialectOptions: {
    charset: "utf8",
    multipleStatements: true,
  },
  logging: false,
});

export default sequelize;
