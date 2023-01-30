import {NextFunction, Request, Response} from 'express';
import {verify} from 'jsonwebtoken';
import {IUser} from '../types/types';

export default (req: Request, res: Response, next: NextFunction) => {
    if(req.method === 'OPTIONS') {
        next();
    }
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if(!token) {
            return res.status(401).json({message: 'Not authorized'})
        }
        req.user = verify(token, String(process.env.SECRET_KEY)) as IUser;
        next();
    } catch (e) {
        if(e instanceof Error) {
            return res.status(401).json({message: 'Not authorized'})
        } else if(typeof e === 'string') {
            return res.status(401).json({message: 'Not authorized'})
        }
    }
}