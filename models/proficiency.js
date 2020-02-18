'use strict';
module.exports = (sequelize, DataTypes) => {
  const Proficiency = sequelize.define('Proficiency', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Proficiency.associate = function(models) {
  };
  return Proficiency;
};