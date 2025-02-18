/*const {Pool} = require('pg');


const pool = new Pool({
  host: 'localhost',
  user: 'matiasrojas',
  password: 'matiasrojas123',
  database: 'likeme',
  allowExitOnIdle: true,
  port: 5434,
});

const obtenerPosts = async () => {
  const result = await pool.query("SELECT * FROM posts;");
  console.log(result.rows);
  return result.rows;
};

const agregarPost = async (titulo , img , descripcion ) => {
  const consulta = "INSERT INTO posts (titulo , img , descripcion, likes) VALUES ($1 , $2 , $3, $4)";
  const values = [titulo , img , descripcion , 0]
  const result = await pool.query(consulta,values);
  console.log("post agregado correctamente", result.rowsCount);
};

(async () => {
  await obtenerPosts();
 // await agregarUsuarios("matias", "rojas", 9, "chile");
})();



module.exports = { obtenerPosts , agregarPost};*/