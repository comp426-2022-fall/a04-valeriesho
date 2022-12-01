#!/usr/bin/env node

import minimist from "minimist";
import express from "express";
import { roll } from "../lib/roll.js";

const args = minimist(process.argv.slice(2));
const app = express();
const port = args.port || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

