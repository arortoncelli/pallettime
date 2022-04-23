const express = require('express');
const route = express.Router();
const controllerCalc = require('../controllers/controllerCalc');
module.exports = route;

route.get("/", controllerCalc.getIndex);
route.post("/calc", controllerCalc.postCalc);
