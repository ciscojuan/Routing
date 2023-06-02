import axios from "axios"

export const api = axios.create({
    baseURL: "https://routing-api.onrender.com"
})

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url)
    setData(respuesta.data)
}