import axios from "axios"

export const api = axios.create({
    baseURL: "https://juan-e-commerce-api.onrender.com/db"
})

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url)
    setData(respuesta.data)
}