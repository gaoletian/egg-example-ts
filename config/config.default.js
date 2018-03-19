"use strict";
/* tslint:disable */
module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + "_1521468411098_1443";

    // add your config here
    config.middleware = [];

    config.sequelize = {
        dialect: "mysql",
        database: "nirvana",
        password: "Gg3619323",
        define: {
            timestamps: false, // true by default
        },
    };

    return config;
};
