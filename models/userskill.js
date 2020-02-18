'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserSkill = sequelize.define('UserSkill', {
  }, {});
  UserSkill.associate = function(models) {
    UserSkill.hasOne(models.User)
    UserSkill.hasOne(models.Skill)
    UserSkill.hasOne(models.Proficiency)
  };
  return UserSkill;
};