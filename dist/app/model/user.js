/* tslint:disable */
module.exports = function (app) {
    const DataTypes = app.Sequelize;
    const sequelize = app.model;
    const User = sequelize.define("user", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: "id",
        },
        mobile: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: "mobile",
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: "name",
        },
        idNo: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: "id_no",
        },
        bankCardNo: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: "bank_card_no",
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: "email",
        },
        registerChannelId: {
            type: DataTypes.BIGINT,
            allowNull: true,
            field: "register_channel_id",
        },
        channelUserId: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: "channel_user_id",
        },
        createTime: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            field: "create_time",
        },
        updateTime: {
            type: DataTypes.DATE,
            allowNull: true,
            field: "update_time",
        },
    }, {
        tableName: "user",
    });
    return User;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9tb2RlbC91c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVMsR0FBRztJQUN6QixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQ2hDLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFFNUIsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDbEMsRUFBRSxFQUFFO1lBQ0EsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGFBQWEsRUFBRSxJQUFJO1lBQ25CLEtBQUssRUFBRSxJQUFJO1NBQ2Q7UUFDRCxNQUFNLEVBQUU7WUFDSixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLElBQUk7WUFDZixLQUFLLEVBQUUsUUFBUTtTQUNsQjtRQUNELElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsSUFBSTtZQUNmLEtBQUssRUFBRSxNQUFNO1NBQ2hCO1FBQ0QsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQzNCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsS0FBSyxFQUFFLE9BQU87U0FDakI7UUFDRCxVQUFVLEVBQUU7WUFDUixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLElBQUk7WUFDZixLQUFLLEVBQUUsY0FBYztTQUN4QjtRQUNELEtBQUssRUFBRTtZQUNILElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsSUFBSTtZQUNmLEtBQUssRUFBRSxPQUFPO1NBQ2pCO1FBQ0QsaUJBQWlCLEVBQUU7WUFDZixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLElBQUk7WUFDZixLQUFLLEVBQUUscUJBQXFCO1NBQy9CO1FBQ0QsYUFBYSxFQUFFO1lBQ1gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQzNCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsS0FBSyxFQUFFLGlCQUFpQjtTQUMzQjtRQUNELFVBQVUsRUFBRTtZQUNSLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixTQUFTLEVBQUUsSUFBSTtZQUNmLFlBQVksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDO1lBQ3BELEtBQUssRUFBRSxhQUFhO1NBQ3ZCO1FBQ0QsVUFBVSxFQUFFO1lBQ1IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsS0FBSyxFQUFFLGFBQWE7U0FDdkI7S0FDSixFQUFFO1FBQ0MsU0FBUyxFQUFFLE1BQU07S0FDcEIsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNoQixDQUFDLENBQUMifQ==