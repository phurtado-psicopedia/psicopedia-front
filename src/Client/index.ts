import axios, { AxiosError, AxiosResponse } from "axios";
import { store } from "../Redux/store";
import { appResetState } from "../Redux/B_actions/app";

export const Axios = axios;

export const setAxiosHeader = (header_name: string, access_token: string): void => {
    Axios.defaults.headers.common[header_name] = access_token;
}

export const deleteAxiosHeader = (header_name: string): void => {
    delete Axios.defaults.headers.common[header_name];
}

Axios.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            store.dispatch(appResetState());
        }
        // console.log(store.getState());
        return Promise.reject(error);
    }
)