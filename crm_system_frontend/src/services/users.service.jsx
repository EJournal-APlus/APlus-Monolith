import axios from "axios";
export const Usersservice = {
    async getToken(token){
        if(token != null){
            const responce = await axios.get(`https://localhost:7269/authuser?token=${token}`);
            return responce.data;
        }
    },
    async getAvatar(email){
        if(email != null){
            try {
                const response = await axios.get(`https://localhost:7269/api/user/api/getimage?avatarName=${email}`, { 
                    responseType: 'arraybuffer' 
                });
                const imageType = response.headers['content-type']; 
                const imageData = new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '');
                const base64Image = `data:${imageType};base64,${btoa(imageData)}`; 
                return base64Image;
            } catch (error) {
                console.error("Failed to fetch avatar:", error);
                return null; 
            }
        }
    },
    async getUserInfo(email){
        const responce = await axios.get(`https://localhost:7269/getinfo?username=${email}`);
        return responce.data;
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
    }
}