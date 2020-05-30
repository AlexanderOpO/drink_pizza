import { ADD_PRODUCT_TO_BASKET } from "../const/action_types/basket";
 
const initialState = []

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_TO_BASKET:
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}