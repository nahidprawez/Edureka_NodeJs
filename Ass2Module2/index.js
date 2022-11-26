import express from 'express';
import fs from 'fs';

const app = express();

const PORT = 6500;

app.get("/", (req, res)=> {
    res.send("<h1>This is a file using Express Server</h1>");
})

app.get("/movies", (req, res)=> {
    fs.readFile("./db.json", (err, result)=> {
         if(err)  {
             throw err;
         } else {
             res.send(JSON.parse(result))
         }
    })
})

app.listen(PORT, ()=> {
    console.log("Server is listening on ", PORT);
})