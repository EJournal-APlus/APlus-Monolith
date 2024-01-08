import axios from "axios";
import { useState } from "react";

export const Usersservice = {
    async getToken(token){
        if(token != null){
            const responce = await axios.get(`https://localhost:7269/authuser?token=${token}`);
            return responce.data;
        }
    },
    async getAvatar(email){
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
    },
    async getUserInfo(email){
        const responce = await axios.get(`https://localhost:7269/getinfo?username=${email}`);
        console.log(responce.data);
        return responce.data;
    }
}