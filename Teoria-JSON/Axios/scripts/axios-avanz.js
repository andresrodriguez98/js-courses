let datos = {
  title: "NUEVO POST",
  body: "MI CONTENIDO",
};

let mitoken = "Este_es_mi_token";

axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = "Bearer $(mitoken)";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (respuesta) => {
    respuesta.data.customField = "Nuevo campo";
    return respuesta;
  },
  (error) => {
    return Promise.reject(error);
  }
);

let pedido1 = axios.get("https://api.ejemplo.com/data1");
let pedido2 = axios.get("https://api.ejemplo.com/data2");
let pedido3 = axios.get("https://api.ejemplo.com/data3");

axios
  .all([pedido1, pedido2, pedido3])
  .then(
    axios.spread((respuesta1, respuesta2, respuesta3) => {
      //codigo
    })
  )
  .catch((error) => {
    //manejar errores
  });
