import express from 'express';
import { MyType } from './types/index';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, TypeScript!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});