'use strict';

import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
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
