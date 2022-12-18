import {NextFunction, Request, Response, Router} from "express";
import {Endpoints} from "../enums/endpoints";

const router = Router();

router.post(Endpoints.REGISTRATION, (req:Request, res:Response, next:NextFunction) => {
    res.json({message: 'OKKK'})
})

export default router;