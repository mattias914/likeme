// Reemplazar por la URL de la API
const URL_API = "http://localhost:3000/posts";

export const getPosts = async () => {
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
};

export const addPost = async (post) => {
  const response = await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status}: No se pudo agregar el post`);
  }

  const data = await response.json();
  return data;
};


export const deletePost = async (id) => {
  await fetch(`${URL_API}/${id}`, {
    method: "DELETE",
  });
};

export const likePost = async (id) => {
  await fetch(`${URL_API}/like/${id}`, {
    method: "PUT",
  });
};
