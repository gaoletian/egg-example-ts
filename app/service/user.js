"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class UserService extends egg_1.Service {
    async list(pageParam = { offset: 0, limit: 10, orderBy: "create_time", order: "DESC" }) {
        const { offset, limit, orderBy, order } = pageParam;
        const result = await this.ctx.model.User.findAll({
            limit,
            offset,
            order: [[orderBy, order]],
        });
        return result;
    }
    async update(values, where) {
        return 1;
    }
}
exports.default = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBNEI7QUFTNUIsaUJBQWlDLFNBQVEsYUFBTztJQUNyQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQTRCLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQztRQUN2RyxNQUFNLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDLEdBQUcsU0FBUyxDQUFDO1FBQ2xELE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM3QyxLQUFLO1lBQ0wsTUFBTTtZQUNOLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzVCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVNLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBYyxFQUFFLEtBQWE7UUFDN0MsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNiLENBQUM7Q0FDSjtBQWRELDhCQWNDIn0=