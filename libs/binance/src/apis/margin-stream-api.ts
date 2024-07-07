/* tslint:disable */
/* eslint-disable */
/**
 * Binance Public Spot API
 * OpenAPI Specifications for the Binance Public Spot API  API documents:   - [https://github.com/binance/binance-spot-api-docs](https://github.com/binance/binance-spot-api-docs)   - [https://binance-docs.github.io/apidocs/spot/en](https://binance-docs.github.io/apidocs/spot/en)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { InlineResponse200124 } from '../models';
/**
 * MarginStreamApi - axios parameter creator
 * @export
 */
export const MarginStreamApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Close out a user data stream.  Weight: 1
         * @summary Close a ListenKey (USER_STREAM)
         * @param {string} [listenKey] User websocket listen key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sapiV1UserDataStreamDelete: async (listenKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sapi/v1/userDataStream`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-MBX-APIKEY")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-MBX-APIKEY"] = localVarApiKeyValue;
            }

            if (listenKey !== undefined) {
                localVarQueryParameter['listenKey'] = listenKey;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Start a new user data stream. The stream will close after 60 minutes unless a keepalive is sent. If the account has an active `listenKey`, that `listenKey` will be returned and its validity will be extended for 60 minutes.  Weight: 1
         * @summary Create a ListenKey (USER_STREAM)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sapiV1UserDataStreamPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sapi/v1/userDataStream`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-MBX-APIKEY")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-MBX-APIKEY"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 30 minutes.  Weight: 1
         * @summary Ping/Keep-alive a ListenKey (USER_STREAM)
         * @param {string} [listenKey] User websocket listen key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sapiV1UserDataStreamPut: async (listenKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sapi/v1/userDataStream`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-MBX-APIKEY")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-MBX-APIKEY"] = localVarApiKeyValue;
            }

            if (listenKey !== undefined) {
                localVarQueryParameter['listenKey'] = listenKey;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MarginStreamApi - functional programming interface
 * @export
 */
export const MarginStreamApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Close out a user data stream.  Weight: 1
         * @summary Close a ListenKey (USER_STREAM)
         * @param {string} [listenKey] User websocket listen key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sapiV1UserDataStreamDelete(listenKey?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await MarginStreamApiAxiosParamCreator(configuration).sapiV1UserDataStreamDelete(listenKey, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Start a new user data stream. The stream will close after 60 minutes unless a keepalive is sent. If the account has an active `listenKey`, that `listenKey` will be returned and its validity will be extended for 60 minutes.  Weight: 1
         * @summary Create a ListenKey (USER_STREAM)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sapiV1UserDataStreamPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200124>>> {
            const localVarAxiosArgs = await MarginStreamApiAxiosParamCreator(configuration).sapiV1UserDataStreamPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 30 minutes.  Weight: 1
         * @summary Ping/Keep-alive a ListenKey (USER_STREAM)
         * @param {string} [listenKey] User websocket listen key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sapiV1UserDataStreamPut(listenKey?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await MarginStreamApiAxiosParamCreator(configuration).sapiV1UserDataStreamPut(listenKey, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MarginStreamApi - factory interface
 * @export
 */
export const MarginStreamApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Close out a user data stream.  Weight: 1
         * @summary Close a ListenKey (USER_STREAM)
         * @param {string} [listenKey] User websocket listen key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sapiV1UserDataStreamDelete(listenKey?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return MarginStreamApiFp(configuration).sapiV1UserDataStreamDelete(listenKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Start a new user data stream. The stream will close after 60 minutes unless a keepalive is sent. If the account has an active `listenKey`, that `listenKey` will be returned and its validity will be extended for 60 minutes.  Weight: 1
         * @summary Create a ListenKey (USER_STREAM)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sapiV1UserDataStreamPost(options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200124>> {
            return MarginStreamApiFp(configuration).sapiV1UserDataStreamPost(options).then((request) => request(axios, basePath));
        },
        /**
         * Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 30 minutes.  Weight: 1
         * @summary Ping/Keep-alive a ListenKey (USER_STREAM)
         * @param {string} [listenKey] User websocket listen key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sapiV1UserDataStreamPut(listenKey?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return MarginStreamApiFp(configuration).sapiV1UserDataStreamPut(listenKey, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MarginStreamApi - object-oriented interface
 * @export
 * @class MarginStreamApi
 * @extends {BaseAPI}
 */
export class MarginStreamApi extends BaseAPI {
    /**
     * Close out a user data stream.  Weight: 1
     * @summary Close a ListenKey (USER_STREAM)
     * @param {string} [listenKey] User websocket listen key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarginStreamApi
     */
    public async sapiV1UserDataStreamDelete(listenKey?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return MarginStreamApiFp(this.configuration).sapiV1UserDataStreamDelete(listenKey, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Start a new user data stream. The stream will close after 60 minutes unless a keepalive is sent. If the account has an active `listenKey`, that `listenKey` will be returned and its validity will be extended for 60 minutes.  Weight: 1
     * @summary Create a ListenKey (USER_STREAM)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarginStreamApi
     */
    public async sapiV1UserDataStreamPost(options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse200124>> {
        return MarginStreamApiFp(this.configuration).sapiV1UserDataStreamPost(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 30 minutes.  Weight: 1
     * @summary Ping/Keep-alive a ListenKey (USER_STREAM)
     * @param {string} [listenKey] User websocket listen key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarginStreamApi
     */
    public async sapiV1UserDataStreamPut(listenKey?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return MarginStreamApiFp(this.configuration).sapiV1UserDataStreamPut(listenKey, options).then((request) => request(this.axios, this.basePath));
    }
}
