import { Base } from "./base.interface";
export interface User extends Base {
    pseudo: string;
    email: string;
}
