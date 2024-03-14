import axios from "axios";

export const DebtsService = {
    async getDebtsById(id){
        const responce = await axios.get(`https://localhost:7269/debtsbyid?userId=${id}`);
        return responce.data;
    }
}