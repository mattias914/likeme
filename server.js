const cors = require('cors');
const express = require('express');
const {  } = require('./consultas');
const likemeRoutes = require('./routes/likemeRoutes');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(likemeRoutes);

app.listen(port , () => {
  console.log('Servidor levantado en puerto',port);
});
