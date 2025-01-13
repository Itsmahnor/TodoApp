const express = require('express');
const app = express();
const cors = require("cors");
require('./Conn/conn');
const path = require("path");
const auth = require('./Router/auth');
const List = require('./Router/list');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api/viv", auth);
app.use("/api/list", List);



app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "Frontend", "dist")));  
  res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html")); 
});


app.use(express.static(path.join(__dirname, 'dist')));

app.listen(8001, () => {
  console.log('Server is running on port 8001');
});
