import { UPDATE_USER_STATE } from "../const/action_types/user";


const initialState = null

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_STATE:
            if (!action.payload) return null

            const {email, name} = action.payload
            if (email && name) {
                return {
                    email: action.payload.email,
                    name: action.payload.name 
                }
            } else {
                return null
            }
        default:
            return state;
    }
}