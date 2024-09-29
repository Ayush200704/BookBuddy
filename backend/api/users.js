import { signup, login } from '../Controllers/AuthControllers.js';

export default async function handler(req, res) {
    switch (req.method) {
        case 'POST':
            if (req.url.endsWith('/signup')) {
                return await signup(req, res);
            } else if (req.url.endsWith('/login')) {
                return await login(req, res);
            }
            return res.status(404).json({ message: 'Route not found' });

        default:
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
