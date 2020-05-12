import {ADD_PRODUCT_BASKET} from './types.js'

export const addBasket = () => {
    return (dispatch) => {
        console.log("Adding to basket");
        dispatch({
                type: ADD_PRODUCT_BASKET
            });
    }
}