import axios from "axios";
export const Usersservice = {
    async getToken(token){
        if(token != null){
            const responce = await axios.get(`https://localhost:7269/authuser?token=${token}`);
            return responce.data;
        }
    },
    async getUserInfo(email){
        if(email != null){
            const responce = await axios.get(`https://localhost:7269/getinfo?username=${email}`);
            return responce.data;
        }
    },
    async register(name, lastname, surname, phone, email, password){ 
        try{
            await axios.post("https://localhost:7269/register", {
                name: name,
                lastname: lastname,
                surname: surname,
                phone: phone,
                email: email,
                password: password
            });
            window.location.href = '/profile';
        }catch(error){
            console.error('Error: ', error)
        }
    },
    async getAll(){
        const responce = await axios.get('https://localhost:7269/getall');
        return(responce.data);
    },
    async getUserById(id){
        const responce = await axios.get(`https://localhost:7269/getinfobyid?userId=${id}`);
        return responce.data;
    },
    async UpdateUserInfo(id, name, lastname, surname, email){
        const responce = await axios.put('https://localhost:7269/updateinfo', {
            id,
            name,
            lastname,
            surname,
            email,
        });
        return responce;
    },
    async getWaitingUser(){
        const responce = await axios.get('https://localhost:7269/waitingusers');
        return responce.data;
    }
}