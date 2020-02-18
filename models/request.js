'use strict';
module.exports = (sequelize, DataTypes) => {
    const Request = sequelize.define('Request', {
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        people_needed: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fulfilled: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        date_fulfilled: {
            type: DataTypes.DATE,
            allowNull: false
        },
    }, {});
    Request.associate = function (models) {
        Request.hasOne(models.User, { as: 'requestor' })
    };
    return Request;
};