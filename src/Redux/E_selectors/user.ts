import { AppState } from "../D_reducers/index";

export const getUser = (state: AppState): any => state.user;

export const getListOfNewUsers = (state: AppState) => {
    const user = getUser(state);
    return user.newUsers;
};

export const getUserLogged = (state: AppState) => {
    const user = getUser(state);
    return user.userLogged;
};

export const getIsLogged = (state: AppState) => {
  const user = getUser(state);
  return user.isLogged;
};