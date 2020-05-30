import { ADD_PRODUCT_TO_BASKET } from "../const/action_types/basket"

export const addProductToBasket = product => {
    return (dispatch) => {
        dispatch({
            type: ADD_PRODUCT_TO_BASKET,
            payload: product
        });
    }
}