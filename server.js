const cors = require('cors');
const express = require('express');
const { obtenerPosts , agregarPost} = require('./consultas');
const app = express();

app.use(cors());
app.use(express.json());
app.listen(3000, console.log('servidor encendido'));


app.get("/posts", async (req, res) => {
  const posts = await obtenerPosts();
  res.json(posts);
});

app.post("/posts", async (req, res) => {
  const {titulo , img , descripcion } = req.body;
  await agregarPost(titulo , img , descripcion )
  res.send("post agregado correctamente")
});
