import { ADD_CART, ADD_FAVORITE, DELETE_CART,HAVE_CART } from "../types";

export function addCart(item){
    return{
        type:ADD_CART,
        item
    }
}

export function deleteCart(item){
    return{
        type:DELETE_CART,
        item
    }
}

export function addFavorite(item){
    return{
        type:ADD_FAVORITE,
        item
    }
}


export function changeHaveCart(){
    return{
        type:HAVE_CART,
    }
}