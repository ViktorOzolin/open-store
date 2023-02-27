import {NextFunction, Request, Response} from 'express';
import {generateJwt} from '../utils/generateJWT';
import {hash, compare} from 'bcrypt';
import ApiError from '../error/Api.error';
import {Cart, User} from '../models';
import {ICart, IUser} from '../types';



class UserController {
    async registration(req: Request, res: Response, next: NextFunction) {
        try {
            const {email, password, role} = req.body as IUser;
            if(!email || !password) {
                return next(ApiError.badRequest('Incorrect username or password'));
            }
            const candidate: IUser = await User.findOne({ where: { email } });
            if(candidate) {
                return next(ApiError.badRequest('User with this email already exists'));
            } else {
                const hashPassword = await hash(password, 5);
                const user: IUser = await User.create({email, password: hashPassword, role});
                const cart: ICart = await Cart.create({userId: user.id});
                const token = generateJwt({id: user.id, email: user.email, role: user.role}, '24h');
                return res.json({token});
            }
        } catch (e) {
            console.log(e);
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const {email, password} = req.body as IUser;
            const user: IUser = await User.findOne({where: {email}});
            if(!user) {
                return next(ApiError.internal('Wrong login or password'));
            }
            const comparePassword = compare(password, user.password);
            if(!comparePassword) {
                return next(ApiError.internal('Wrong login or password'))
            } else {
                const token = generateJwt({id: user.id, email: user.email, role: user.role}, '24h');
                return res.json({token});
            }
        } catch (e) {
            console.log(e);
        }
    }

    async check(req: Request, res: Response) {
        const {id, email, role} = req.user;
        const token = generateJwt({id, email, role}, '24h');
        return res.json({token});
    }
}

export default new UserController();
