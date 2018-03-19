import BankService from './bank';
import UserService from './user';

declare module 'egg' {
    export interface IService {
        user: UserService;
        bank: BankService;
    }
}
