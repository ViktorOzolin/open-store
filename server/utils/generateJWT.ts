import {sign} from 'jsonwebtoken';
import {IGenerateJWT} from '../types/types';

const secretKey = String(process.env.SECRET_KEY);


export const generateJwt = (payload: IGenerateJWT , expiresIn: string) => {
    return sign(payload, secretKey, {expiresIn});
}