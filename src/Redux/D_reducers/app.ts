import { handleActions } from "redux-actions";
import { SCREEN, THEME } from "../A_constants/app";
import { defaultAppState, IAppState } from "../C_states/IAppState";

export const app = handleActions<IAppState>(
  {
    [SCREEN]: (state: IAppState, action: any) => ({
      ...state,
      screen: action.payload
    }),

    [THEME]: (state: IAppState, action: any) => ({
      ...state,
      theme: action.payload
    })
  },
  defaultAppState
);
