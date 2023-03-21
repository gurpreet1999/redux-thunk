import axios from "axios";
import fakeStoreApi from "../../apis/fakeStoreApi";
import { actionTypes } from "../constants/action-type";



export const fetchProducts=()=>{

return async function(dispatch){
const response=await axios.get('https://api.storerestapi.com/products')
console.log(response)
dispatch({type:actionTypes.FETCH_PRODUCTS,payload:response.data.data})
}
}



export const fetchSingleProduct=(id)=>{

    return async function(dispatch,getState){
        const response=await fakeStoreApi.get(`/products/${id}`)
        dispatch({type:actionTypes.SELECTED_PRODUCT,payload:response.data})
        }


}










export const setProduct=(products)=>{
    return {
type:actionTypes.SET_PRODUCTS,
payload:products
    }
}


export const selectedProduct=(product)=>{
    return {
        type:actionTypes.SELECTED_PRODUCT,
        payload:product
    }
}

export const removeProduct=()=>{
    return {
        type:actionTypes.REMOVE_SELECTED_PRODUCT,
        
    }
}