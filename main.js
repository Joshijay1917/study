const express = require("express")
const app = express()
const port = 3001

app.use(express.static(`public`))
app.use(express.urlencoded({extended: true}));

app.get(`/`, (req, res)=>{
    // let csspath = `D:\\Web%20Devlopment\\Video88(express%20js)\\public\\css\\style.css`
    res.sendFile(`index.html`)
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
    
})