import axios from 'axios'

export const InfoService = {
    async getCount(){
        const responce = await axios.get("https://localhost:7269/getcount");
        return responce.data;
    }
}