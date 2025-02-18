const { obtenerPosts , agregarPost , actualizarPosts , borrarPost } = require("../queries/likemeQueries");

const obtenerTodosLosPosts = async (req,res) => {
  try {
    const posts = await obtenerPosts();
    res.json(posts); 
  } catch (e) {
    res.status(500).send( `Error al obtener los posts Error: ${e.message}` );
  }
};

const crearPost = async (req, res) => {
  try {
    const { titulo, img, descripcion } = req.body;
    const nuevoPost = await agregarPost(titulo, img, descripcion); // 🔥 Guardar el post creado

    res.status(201).json(nuevoPost); // 🔥 Enviar el post creado como respuesta
  } catch (e) {
    res.status(500).send(`Error al crear el post Error: ${e.message}`);
  }
};


const  modificarPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo , img , descripcion } = req.query;
    await actualizarPosts(id,titulo, img, descripcion);
    res.send("Post actualizado");
  } catch (e) {
    res.status(500).send( `Error al actualizar los datos del post Error: ${e.message}` );
  }
};

const eliminarPost = async (req,res) => {
  try {
    const { id } = req.params;
    await borrarPost(id);
    res.send( `Post con ID ${id} eliminado correctamente` );
  } catch (e) {
    res.status(500).send(`Error al eliminar el post: ${e.message}`);
  }
};

module.exports = { obtenerTodosLosPosts , crearPost , modificarPost , eliminarPost };