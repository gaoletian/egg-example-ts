import {Service} from "egg";

export interface IUserListParam {
    offset?: number;
    limit?: number;
    orderBy?: string;
    order?: string;
}

export default class UserService extends Service {
    public async list(pageParam: IUserListParam = {offset: 0, limit: 10, orderBy: "create_time", order: "DESC"}) {
        const {offset, limit, orderBy, order} = pageParam;
        const result = await this.ctx.model.User.findAll({
            limit,
            offset,
            order: [[orderBy, order]],
        });
        return result;
    }

    public async update(values: object, where: number) {
        return 1;
    }
}
