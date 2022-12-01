#!/usr/bin/env node

import minimist from "minimist";
import express from "express";
import { roll } from "./lib/roll.js";

const args = minimist(process.argv.slice(2));
const app = express();
const port = args.port || 5000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/app/', (req, res, next) => {
    res.send("200 OK").end();
});

app.get('/app/roll/', (req, res, next) => {
    res.send(roll(6,2,1)).end();
});

app.get('/app/roll/', (req, res, next) => {
    res.send(roll()).end();
});

app.listen(port, () => {
    console.log("Server listening on port " + port + ".");
});