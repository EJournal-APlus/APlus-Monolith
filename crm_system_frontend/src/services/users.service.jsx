import axios from "axios";

export const Usersservice = {
    async getToken(token){
        if(token != null){
            const responce = await axios.get(`https://localhost:7269/authuser?token=${token}`);
            console.log(responce.data)
            return responce.data;
        }
    },
    async logout(){
        localStorage.removeItem('token');
    },
    async getAvatar(email){
        if(email!=null){
            const responce = await axios.get(`https://localhost:7269/getavatar?email=ex@mail.ru`)
            console.log(responce)
            return responce;
        }
    }
}