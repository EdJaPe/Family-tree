const express = require('express');
const mongoose = require('mongoose');
const app = express();

//  app.use
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Mongoose stuff
mongoose.connect(
    'mongodb://localhost/familyTree',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
const db=mongoose.connection;

//Connection methods
db.once('open', () => {
    console.log(`🌎 Connected to MongoDB at ${db.host}:${db.port}`);
})

db.on('error', err => {
    console.error(`🔥Database Error:\n${err}`);
});

// Route
app.get('/', (req, res ) => {
    res.json({message:'🐸'});
});


app.listen(3000 || process.env.PORT, () => console.log(`🎧 Yout are listening to the smooth sounds of port ${3000 || process.env.PORT}🎧`))