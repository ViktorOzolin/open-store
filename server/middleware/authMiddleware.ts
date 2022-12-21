import {NextFunction, Request, Response} from 'express';
import {verify} from 'jsonwebtoken';
import {IUser} from '../types/types';
import ApiError from '../error/Api.error';

export default (req: Request, res: Response, next: NextFunction) => {
    if(req.method === 'OPTIONS') {
        next();
    }
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if(!token) {
            return next(ApiError.unauthorized('Not authorized'));
        }
        req.user = verify(token, String(process.env.SECRET_KEY)) as IUser;
        next();
    } catch (e) {
        if(e instanceof Error) {
            return next(ApiError.unauthorized(e.message));
        } else if(typeof e === 'string') {
            return next(ApiError.unauthorized(e));
        }
    }
}