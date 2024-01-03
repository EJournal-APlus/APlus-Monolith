import axios from "axios";

export const Usersservice = {
    async getAvatar(email){
        const responce = await axios.get(`https://localhost:7269/api/user/avatar?email=${email}`);
        return responce.data;
    }
}