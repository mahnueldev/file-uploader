const corsOptions = {
    origin: ['http://localhost:3008', 'http://127.0.0.1:5000', 'http://localhost:5050'],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204 
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}

module.exports = corsOptions;
