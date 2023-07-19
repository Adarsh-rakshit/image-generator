import cors from "cors";
import express from 'express';
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

app.get('/', async(req,res) => {
    res.send('hello from dalle');
});

const startServer = async () => {
    app.listen(8080, () => {
        console.log("hello server");
    })
};

startServer();
