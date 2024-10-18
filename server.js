const dotenv = require('dotenv');
dotenv.config();
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const db = "./db/connection.js"
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

db.on("connected", () => {
    console.clear()
    console.log(chalk.blue("Connected to MongoDB!"))
    app.listen(PORT, () => {
        console.log('The express app is ready!');
      });
});


