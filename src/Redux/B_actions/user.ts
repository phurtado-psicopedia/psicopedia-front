import { createAction } from "redux-actions";
import { 
    SET_NEW_USER,
    USER_LOGIN,
    USER_LOGOUT

} from "../A_constants/user";

export const setNewUser = createAction(SET_NEW_USER, (payload : any) => payload);
export const userLogin = createAction(USER_LOGIN, (payload : any) => payload);
export const userLogout = createAction(USER_LOGOUT);