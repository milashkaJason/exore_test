import axios from "axios";

/**
 * Экземпляр запроса
 */
let instance = axios.create({
    baseURL: "https://fakestoreapi.com/",
});

export const API = {

    getProductsApi(count) {
        return instance.get(`products?limit=${count}`)
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },

    getAllProductsApi() {
        return instance.get(`products`)
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },

    getSingleProductApi(id) {
        return instance.get(`products/${id}`)
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },

    createNewProductApi(data) {
        return instance.post(`products`, data)
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },

    deleteProductApi(id) {
        return instance.delete(`products/${id}`)
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },

    changeProductApi(data) {
        return instance.patch(`products/${data.id}`, data)
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },
}