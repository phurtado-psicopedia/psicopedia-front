export interface IUser {
    name: string;
    email: string;
    password: string;
}

export interface IUserState {
    newUsers: Array<IUser>;
    userLogged : IUser | {};
    isLogged: boolean;
}
  
export const defaultUserState: IUserState = {
    newUsers: [],
    userLogged: {},
    isLogged: false
};
  