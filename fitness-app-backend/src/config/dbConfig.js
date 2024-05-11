// src/config.js

module.exports = {
    port: process.env.PORT || 3000, // The port your application will run on
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/health_tracker', // MongoDB connection string
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret', // Secret for JWT tokens
    googleFitApiKey: process.env.GOOGLE_FIT_API_KEY || 'your_google_fit_api_key', // Google Fit API key
    // Add more configurations as needed
};
