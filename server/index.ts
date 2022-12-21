import * as dotenv from 'dotenv';
dotenv.config();
import express, {Application} from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import path from 'path';
import {loggerMiddleware} from './middleware/loggerMiddleware';
import {errorMiddleware} from './middleware/errorHandlingMiddleware';
import router from './routes';
import sequelize from './db';


const PORT = process.env.PORT || 7000;

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static/img')));
app.use(fileUpload({}));
app.use(loggerMiddleware);

app.use('/api', router);


app.use(errorMiddleware);


const bootstrap = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT,() => {
            console.log(`Server has started at port ${PORT}`);
        })
    } catch (error) {
        console.log(error)
    }
}

bootstrap();