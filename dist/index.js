"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3003;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/sons', (req, res) => {
    const a = 5;
    if (a >= 5)
        res.send('joy!!!!');
    else
        res.send('Hello Sobaki!!!');
});
app.post('/sons', (req, res) => {
    res.send('Ty create a Sobaku!');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
