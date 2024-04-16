const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://krishraj111:z5d9v2lF2XOykhMs@cluster0.8l5bjgy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log(`connected`);
    }).catch((error) => {
        console.log(error);
    })