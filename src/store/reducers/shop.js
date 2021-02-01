import { fakeData } from "../../constants";
import { ADD_CART, ADD_FAVORITE, DELETE_CART,HAVE_CART } from "../types";

const initialState = {
    dataProduct:fakeData,
    favoriteProduct:[],
    cartProduct:[],
    totalPrice:0,
    totalCount:0,
    haveCart:false,
}

export function shopReducer(state=initialState,action){

    const deleteHandlerToCart = (item) =>{
        if(item.count > 1){
            const cartProducts = state.cartProduct.filter(i=>i.id !== item.id)
            const product = state.cartProduct.find(i=>i.id === item.id)
            console.log(product);
            cartProducts.push(product)
            return cartProducts
        }else{
            return state.cartProduct.filter(_=>_.id !== item.id)
        }
    }

    const changeHandlerCount = (item) =>{
        if(item.count > 1){
            item.count -= 1
            return state.totalCount -= 1 
        }else{
            return 0
        }
    }

    const changeHandlerPrice = (item) =>{
        if(item.count > 1){
            return Number(state.totalPrice - item.price)
        }else{
            return Number(state.totalPrice - (item.count * item.price))
        }
    }

    switch(action.type){
        case ADD_CART:
            return{
                ...state,
                cartProduct:[...state.cartProduct, action.item],
                totalPrice:Number(state.totalPrice+(action.item.price * action.item.count)),
                totalCount:Number(state.totalCount+action.item.count),
                haveCart:true
            }
        case HAVE_CART:
            return{
                ...state,
                haveCart:false
            }    
        case DELETE_CART:
            return{
                ...state,
                cartProduct:deleteHandlerToCart(action.item),
                totalCount:changeHandlerCount(action.item),
                totalPrice:changeHandlerPrice(action.item)
            }  
        case ADD_FAVORITE:
            return{
                ...state,
                favoriteProduct:[...state.favoriteProduct, action.item]
            }      
        default:
            return state
    }
}
