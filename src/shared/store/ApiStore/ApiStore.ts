import {ApiResponse, IApiStore, RequestParams} from "./types";
import qs from "qs";

export default class ApiStore implements IApiStore {
    readonly baseUrl: string;
    constructor(baseUrl) {
        // TODO: Примите из параметров конструктора baseUrl
        // и присвойте его в this.baseUrl
        this.baseUrl=baseUrl
    }

    request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>> {
        // TODO: Напишите здесь код, который с помощью fetch будет делать запрос
        let result = fetch(this.baseUrl, {
            method: params.method.toString()
        }).then((response) => {
            return response.json();
        });

        return result;
    }
}