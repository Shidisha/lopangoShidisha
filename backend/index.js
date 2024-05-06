const express = require("express");

const App = express();
const port = 3001

App.listen(port, ()=>{
    console.log(`le server a démarré sur le port ${port}`)
});

App.get("/post", (req, res) =>{
    res.json({message: "les données sont bien recupérées"})
});