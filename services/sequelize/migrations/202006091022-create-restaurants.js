module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "restaurants",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      chefId: {
        allowNull: false,
        references: {
          key: "id",
          model: "chefs",
        },
        type: DataTypes.INTEGER.UNSIGNED,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      charset: "utf8",
    }
  );
};

module.exports.down = (queryInterface) => {
  return queryInterface.dropTable("restaurants");
};
