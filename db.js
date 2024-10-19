const mongoose = require('mongoose');
require('dotenv').config();

const url =process.env.URL ; // Update the URL if needed


const connectDB = async () => {
    try {
       
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Server Connected');
    } catch (err) {
    
        console.error('MongoDB Server Error:', err);
    }
};


connectDB();


mongoose.connection.on('connected', () => {
    console.log('MongoDB Connection Established');
});

mongoose.connection.on('error', (err) => {
    console.log('MongoDB Connection Error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB Server Disconnected');
});

console.log('Script started');


module.exports = mongoose.connection;
