import { getAllApi, getSingleApi, postApi, putApi, deleteApi, searchBook } from '../Controllers/BookControllers.js';
import { AsyncWrapper } from "../Middleware/AsyncWrapper.js";

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            if (req.query.title) {
                return await searchBook(req, res);
            } else if (req.query.id) {
                return await getSingleApi(req, res);
            } else {
                return await getAllApi(req, res);
            }

        case 'POST':
            return await postApi(req, res);

        case 'PUT':
            return await putApi(req, res);

        case 'DELETE':
            return await deleteApi(req, res);

        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
