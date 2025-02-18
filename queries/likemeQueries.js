const pool = require('../config/config');

const obtenerPosts = async () => {
  const consulta = "SELECT * FROM posts;"
  const result = await pool.query(consulta);
  console.log(result.rows);
  return result.rows;
};

const actualizarPosts = async (id , titulo ,img , descripcion) => {
  const consulta = "UPDATE posts SET titulo = $1, img = $2, descripcion = $3 , likes = COALESCE(likes, 0) WHERE id = $4;"
  const values = [titulo, img , descripcion,id];
  const result = await pool.query(consulta, values);
  console.log(`Post de titulo ${titulo} actulizado correctamente`,result.rowCount);
}; 

const agregarPost = async (titulo, img, descripcion) => {
  const consulta = "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *;";
  const values = [titulo, img, descripcion];
  const result = await pool.query(consulta, values);
  return result.rows[0]; // 🔥 Retornar el post creado
};


const borrarPost = async (id) => {
  const consulta = "DELETE FROM posts WHERE id = $1;";
  const values = [id];
  const result = await pool.query(consulta, values);
  console.log("Post borrado correctamente", result.row);
};

module.exports = { obtenerPosts , agregarPost , actualizarPosts , borrarPost};