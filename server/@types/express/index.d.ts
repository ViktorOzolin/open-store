import {IUser} from "../../types/types";

declare global{
    namespace Express {
        interface Request {
            user: IUser
        }
    }
}
