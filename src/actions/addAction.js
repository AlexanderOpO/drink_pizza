import {ADD_PRODUCT_BASKET} from './types.js'

export const addBasket = (productName) => {
    return (dispatch) => {
        console.log("Adding to basket");
        console.log("Product: ", productName);
        dispatch({
                type: ADD_PRODUCT_BASKET,
            });
    }
}