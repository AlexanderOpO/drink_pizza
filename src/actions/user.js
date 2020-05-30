import { UPDATE_USER_STATE } from "../const/action_types/user"

export const updateUserState = userData => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_USER_STATE,
            payload: userData
        });
    }
}