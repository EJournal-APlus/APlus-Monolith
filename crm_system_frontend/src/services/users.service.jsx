import axios from "axios";

export const Usersservice = {
    async getAvatar(email){
        const responce = await axios.get(`https://localhost:7269/getavatar?email=${email}`);
        return responce.data;
    },
    async getToken(token){
        if(token != null){
            const responce = await axios.get(`https://localhost:7269/authuser?token=${token}`);
            console.log(responce.data)
            return responce.data;
        }
    },
    async logout(){
        localStorage.removeItem('token');
    }
}