const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jillkp:murphy2121@cluster0.v135e.mongodb.net/mongoose-flights?retryWrites=true&w=majority',
    {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});