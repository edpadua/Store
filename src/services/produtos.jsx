import instance from "../common/config/api"

const produtosService = {
  buscar: async () => {
    const resp = await instance.get('/produtos');
    console.log("produtos",resp.data);
    return resp.data;
  }
}

export default produtosService;