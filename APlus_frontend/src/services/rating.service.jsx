import axios from "axios"

export const Ratingservice = {
    async getRatingById(id){
        const responce =  await axios.get(`https://localhost:7269/userrating?userId=${id}`);
        return responce.data;
    },
    async getGpaById(id){
        const responce = await axios.get(`https://localhost:7269/getgpa?userId=${id}`);
        return responce.data;
    },
    async getPassById(id){
        const responce = await axios.get(`https://localhost:7269/getpasses?useId=${id}`);
        return responce.data;
    },
    async getRageById(id){
        const responce = await axios.get(`https://localhost:7269/lastgrade?userId=${id}`);
        return responce.data;
    }
}