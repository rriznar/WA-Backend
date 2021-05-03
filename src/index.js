import express from 'express';
import cors from 'cors';

let polje = [];
const app = express();
const port = 3000;
app.use(cors());
app.get('/ponuda', (req, res) => {
    res.send('Sto ima novo?');
});
app.set('/kategorija', (m1, h1) => {
    let BMI = h/m*m
    let m=m1    
    let h=h1
    res.send(lista.toString());
});
app.get('/dohvati', (m1, h1) => {
    res.send(lista.toString());
});