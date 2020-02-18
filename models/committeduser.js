'use strict';
module.exports = (sequelize, DataTypes) => {
  const CommittedUser = sequelize.define('CommittedUser', { }, {});
  CommittedUser.associate = function(models) {
    CommittedUser.hasOne(models.User)
    CommittedUser.hasOne(models.Request)
  };
  return CommittedUser;
};