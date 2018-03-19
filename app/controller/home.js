'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class HomeController extends egg_1.Controller {
    async index() {
                await this.ctx.model.query(' SELECT * FROM user LIMIT 10;');
                await this.ctx.model.User.findAll({ limit: 2 });
        const res = await this.ctx.service.user.list({ limit: 2, orderBy: 'id' });
        this.ctx.body = { code: 200, message: '', data: res };
        this.ctx.service.user.list({});
        this.ctx.model.User.findOne({ where: { name: 'gao' } });
        this.ctx.service.user.update({}, 1);
        // this.ctx.model.Bank.findAndCount();
        // this.ctx.service.user.list()
    }
}
exports.default = HomeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLDZCQUFpQztBQUVqQyxvQkFBb0MsU0FBUSxnQkFBVTtJQUM3QyxLQUFLLENBQUMsS0FBSztRQUNoQixNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQzVELE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEMsc0NBQXNDO1FBQ3RDLCtCQUErQjtJQUNqQyxDQUFDO0NBQ0Y7QUFaRCxpQ0FZQyJ9