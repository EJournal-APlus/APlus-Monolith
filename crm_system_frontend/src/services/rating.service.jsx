import axios from "axios"

export const Ratingservice = {
    async getRatingById(id){
        const responce =  await axios.get(`https://localhost:7269/userrating?userId=${id}`);
        return responce.data;
    }
}