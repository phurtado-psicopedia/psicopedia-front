import { handleActions } from "redux-actions";
import { 
    SET_NEW_USER,
    USER_LOGIN,
    USER_LOGOUT
} from "../A_constants/user";
import { defaultUserState, IUserState } from "../C_states/IUserState";

export const user = handleActions<IUserState>(
  {
    [SET_NEW_USER]: (
      state: IUserState,
      action: any
    ) => {      
      return {
        ...state,
        newUsers: [
            ...state.newUsers, 
            action.payload
        ]
      };
    },
    [USER_LOGIN]: (
      state: IUserState,
      action: any
    ) => {      
      return {
        ...state,
        userLogged: action.payload,
        isLogged: true
      };
    },
    [USER_LOGOUT]: (
      state: IUserState,
      action: any
    ) => {      
      return {
        ...state,
        userLogged: {},
        isLogged: false
      };
    }
  },
  defaultUserState
);
