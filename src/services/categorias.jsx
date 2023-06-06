import instance from "../common/config/api";

const categoriasService = {
  buscar: async () => {
    const resp = await instance.get('/categorias');
    console.log("categorias",resp.data);
    return resp.data;
  }
}

export default categoriasService;