"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.get('/paper', (req, res) => {
    res.sendFile('index.html', { root: './pages' });
});
app.get('/work', (req, res) => {
    res.sendFile('index.html', { root: './pages' });
});
app.get('/about', (req, res) => {
    res.sendFile('index1.html', { root: './pages' });
});
app.get('/blog', (req, res) => {
    res.sendFile('index2.html', { root: './pages' });
});
app.get('/contact', (req, res) => {
    res.sendFile('index3.html', { root: './pages' });
});
app.listen(8080, () => {
    console.log('server ishga tushdi, 8080 portda');
});
