
import { httpMethods } from './httpMethods';
import * as ax from 'axios';
import { secureHeaders } from './httpHeaders';

const axios = ax as any;
axios.defaults.headers.common['Content-Type'] = 'application/json';
const secureRequest = axios.create();
const basicRequest = axios.create();

secureRequest.interceptors.request.use(config => {
    config.headers.Authorization = secureHeaders;
    return config;
}, error => {
    return Promise.reject(error);
});

basicRequest.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject({ error });
});

interface RequestType {
    method: string;
    headers: any;
    body?: any;
};

export interface ApiDefinitionType {
    method: string;
    headers?: Object;
    body?: any;
    basePath: string;
    path: string;
    type?: string;
    startWeight?: number;
    endWeight?: number;
    contentType?: string;
};

export default (apiDefinition: ApiDefinitionType) => {
    const headers = new Headers();
    if (apiDefinition.headers) {
        for (const header of Object.keys(apiDefinition.headers)) {
            headers.append(header, apiDefinition.headers[header]);
        }
    }
    const request: RequestType = {
        method: apiDefinition.method,
        headers,
    };

    if (apiDefinition.body && apiDefinition.method !== httpMethods.GET) {
        request.body = apiDefinition.body;
    }

    const url = `${apiDefinition.basePath}${encodeURI(apiDefinition.path)}`;
    const config = {
        url,
        method: request.method.toLowerCase()
    } as any;
    if (request.body) {
        config.data = request.body;
    }
    let requester = basicRequest;
    if (apiDefinition.type && apiDefinition.type === 'basic') {
        requester = basicRequest;
    } else {
        requester = secureRequest;
    }

    return requester(config)
        // tslint:disable-next-line:only-arrow-functions
        .then(function (response: any) {
            if (response.status !== 204) {
                return response.data;
            }
            return response;
        }).catch(error => {
            console.dir(error);
            return error;
        });
};