const express = require("express")
const cors = require("cors");
const path = require("path")
const app = express()
const port = 3001
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));

app.get(`/`, (req, res)=>{
    const filepath1 = path.join(__dirname, "public", "index.html")
    res.sendFile(filepath1)
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
    
})