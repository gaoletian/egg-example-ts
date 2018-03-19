'use strict';

import {Controller} from 'egg';

export default class UserController extends Controller {
    public async index() {
        this.ctx.body = 'hi, egg';
        const res = await this.ctx.model.query('select 1 + 1;');
    }

    public async users() {
        const model = this.ctx.model;
        return model.User.findById(1);
    }
}
