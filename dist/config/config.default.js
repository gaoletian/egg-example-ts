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
            timestamps: false,
        },
    };
    return config;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb25maWcvY29uZmlnLmRlZmF1bHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2Isb0JBQW9CO0FBQ3BCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEVBQUU7SUFDdkIsTUFBTSxNQUFNLEdBQUcsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUU1Qix1RUFBdUU7SUFDdkUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDO0lBRW5ELHVCQUF1QjtJQUN2QixNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUV2QixNQUFNLENBQUMsU0FBUyxHQUFHO1FBQ2YsT0FBTyxFQUFFLE9BQU87UUFDaEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLFdBQVc7UUFDckIsTUFBTSxFQUFFO1lBQ0osVUFBVSxFQUFFLEtBQUs7U0FDcEI7S0FDSixDQUFDO0lBRUYsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUMifQ==