import { actionTypes } from "../constants/actionTypes"

export const setProducts = (products) =>{
    return{
        type:actionTypes.SET_PRODUCT,
        payload : products
    }
}

export const selectedProduct = (product) =>{
    return{
        type:actionTypes.SELECTED_PRODUCT,
        payload : product
    }
}