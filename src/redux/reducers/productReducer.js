import { actionTypes } from "../constants/actionTypes"

const initialState = {
    products:[{
        id:1,
        title:'title 1',
        category:'programmer'
    }]
}

const productReducer = (state = initialState,{type,payload}) =>{
    switch(type){
    case actionTypes.SET_PRODUCT:

        return state

    default:
        return state}
}

export default productReducer