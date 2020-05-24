export interface IAppState {
  screen: string;
  theme: string;
  language: string;
}

export const defaultAppState: IAppState = {
  screen: "",
  theme: "",
  language: ""
};
