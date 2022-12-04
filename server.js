#!/usr/bin/env node

import minimist from "minimist";
import express from "express";
import { roll } from "./lib/roll.js";

const args = minimist(process.argv.slice(2));
const app = express();
const port = args.port || 5000;

app.use(express.urlencoded({extended:true}));
//app.use(express.json());

app.listen(port, () => {
    console.log("Server listening on port " + port + ".");
});

app.get('/app/', (req, res) => {
    res.send("200 OK").end();
});

app.get('/app/roll/', (req, res) => {
    var output = roll(6,2,1);
    res.send(JSON.stringify(output)).end();
});

app.post('/app/roll/', (req, res) => {
    var sides = parseInt(req.body.sides);
    var dice = parseInt(req.body.dice);
    var rolls = parseInt(req.body.rolls);
    var output = roll(sides, dice, rolls);
    res.send(JSON.stringify(output)).end();
});

app.get('/app/roll/:sides/', (req, res) => {
    var sides = parseInt(req.params.sides);
    var output = roll(sides, 2, 1);
    res.send(JSON.stringify(output));
});

app.get('*', (req, res) => {
    res.status(404).send("404 NOT FOUND");
})