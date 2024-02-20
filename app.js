const express = require("express")
const app = express();
const path = require("path")
const mongoose = require("mongoose");
const linkRoutes = require("./routes/routes")
const PORT = 3000;

mongoose.connect("mongodb://localhost:27017/encurtador")

app.use("/", express.static(path.join(__dirname, "public")))
app.use("/", linkRoutes);

const db = mongoose.connection;

db.once("open", () =>{
    console.log("Banco de dados aberto")
    app.listen(PORT,() =>{
        console.log("Servidor iniciado na porta", PORT)
    })
})
