const express = require('express');
const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
 }).then(con => {
    console.log(`MongoDB Database connected`)
 })
}

module.exports = connectDatabase