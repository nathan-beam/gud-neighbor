'use strict';
module.exports = (sequelize, DataTypes) => {
  const RequestSkill = sequelize.define('RequestSkill', {}, {});
  RequestSkill.associate = function(models) {
    RequestSkill.hasOne(models.Request)
    RequestSkill.hasOne(models.Skill)
    RequestSkill.hasOne(models.Proficiency)
  };
  return RequestSkill;
};