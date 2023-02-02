import axios from "axios"

export class HttpService<T> {
    get(url: string, config?: any): Promise<T> {
        return axios.get(url, config);
    }

    post(url: string, data?: any, config?: any): Promise<T> {
        return axios.post(url, data, config);
    }
}