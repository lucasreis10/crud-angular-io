import { json, urlencoded } from 'body-parser';
import cors from 'cors';

export default function (app) {

    app.use(urlencoded({ extended: true }));
    app.use(json());
    app.use(cors());

}