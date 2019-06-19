/* jshint indent: 2 */

export default function(sequelize, DataTypes) {
  return sequelize.define('ProductSpec', {
    product_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    barcode: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cost: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    price: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    weight: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    volume: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    moq: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'productSpec'
  });
};
