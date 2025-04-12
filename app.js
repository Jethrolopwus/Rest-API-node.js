require('dotenv').config({path: `${process.cwd()}/.env`});

const express = require('express');
const authRouter = require("./route/authRoute");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: "My Rest API is working", 
    });
});

// Auth routes
app.use('/api/v1/auth', authRouter);

// 404 Handler
app.all('*path', (req, res) => {
    res.status(404).json({
        status: 'fail',
        message: 'Endpoint not found',
    });
});

const PORT = process.env.APP_PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);  
});
