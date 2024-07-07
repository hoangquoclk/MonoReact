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
import { InlineResponse200191 } from '../models';
/**
 * C2CApi - axios parameter creator
 * @export
 */
export const C2CApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * - If startTimestamp and endTimestamp are not sent, the recent 30-day data will be returned. - The max interval between startTimestamp and endTimestamp is 30 days.  Weight(IP): 1
         * @summary Get C2C Trade History (USER_DATA)
         * @param {string} tradeType 
         * @param {number} timestamp UTC timestamp in ms
         * @param {string} signature Signature
         * @param {number} [startTimestamp] UTC timestamp in ms
         * @param {number} [endTimestamp] UTC timestamp in ms
         * @param {number} [page] Default 1
         * @param {number} [rows] default 100, max 100
         * @param {number} [recvWindow] The value cannot be greater than 60000
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sapiV1C2cOrderMatchListUserOrderHistoryGet: async (tradeType: string, timestamp: number, signature: string, startTimestamp?: number, endTimestamp?: number, page?: number, rows?: number, recvWindow?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tradeType' is not null or undefined
            if (tradeType === null || tradeType === undefined) {
                throw new RequiredError('tradeType','Required parameter tradeType was null or undefined when calling sapiV1C2cOrderMatchListUserOrderHistoryGet.');
            }
            // verify required parameter 'timestamp' is not null or undefined
            if (timestamp === null || timestamp === undefined) {
                throw new RequiredError('timestamp','Required parameter timestamp was null or undefined when calling sapiV1C2cOrderMatchListUserOrderHistoryGet.');
            }
            // verify required parameter 'signature' is not null or undefined
            if (signature === null || signature === undefined) {
                throw new RequiredError('signature','Required parameter signature was null or undefined when calling sapiV1C2cOrderMatchListUserOrderHistoryGet.');
            }
            const localVarPath = `/sapi/v1/c2c/orderMatch/listUserOrderHistory`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-MBX-APIKEY")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-MBX-APIKEY"] = localVarApiKeyValue;
            }

            if (tradeType !== undefined) {
                localVarQueryParameter['tradeType'] = tradeType;
            }

            if (startTimestamp !== undefined) {
                localVarQueryParameter['startTimestamp'] = startTimestamp;
            }

            if (endTimestamp !== undefined) {
                localVarQueryParameter['endTimestamp'] = endTimestamp;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (rows !== undefined) {
                localVarQueryParameter['rows'] = rows;
            }

            if (recvWindow !== undefined) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            if (timestamp !== undefined) {
                localVarQueryParameter['timestamp'] = timestamp;
            }

            if (signature !== undefined) {
                localVarQueryParameter['signature'] = signature;
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
 * C2CApi - functional programming interface
 * @export
 */
export const C2CApiFp = function(configuration?: Configuration) {
    return {
        /**
         * - If startTimestamp and endTimestamp are not sent, the recent 30-day data will be returned. - The max interval between startTimestamp and endTimestamp is 30 days.  Weight(IP): 1
         * @summary Get C2C Trade History (USER_DATA)
         * @param {string} tradeType 
         * @param {number} timestamp UTC timestamp in ms
         * @param {string} signature Signature
         * @param {number} [startTimestamp] UTC timestamp in ms
         * @param {number} [endTimestamp] UTC timestamp in ms
         * @param {number} [page] Default 1
         * @param {number} [rows] default 100, max 100
         * @param {number} [recvWindow] The value cannot be greater than 60000
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sapiV1C2cOrderMatchListUserOrderHistoryGet(tradeType: string, timestamp: number, signature: string, startTimestamp?: number, endTimestamp?: number, page?: number, rows?: number, recvWindow?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200191>>> {
            const localVarAxiosArgs = await C2CApiAxiosParamCreator(configuration).sapiV1C2cOrderMatchListUserOrderHistoryGet(tradeType, timestamp, signature, startTimestamp, endTimestamp, page, rows, recvWindow, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * C2CApi - factory interface
 * @export
 */
export const C2CApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * - If startTimestamp and endTimestamp are not sent, the recent 30-day data will be returned. - The max interval between startTimestamp and endTimestamp is 30 days.  Weight(IP): 1
         * @summary Get C2C Trade History (USER_DATA)
         * @param {string} tradeType 
         * @param {number} timestamp UTC timestamp in ms
         * @param {string} signature Signature
         * @param {number} [startTimestamp] UTC timestamp in ms
         * @param {number} [endTimestamp] UTC timestamp in ms
         * @param {number} [page] Default 1
         * @param {number} [rows] default 100, max 100
         * @param {number} [recvWindow] The value cannot be greater than 60000
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sapiV1C2cOrderMatchListUserOrderHistoryGet(tradeType: string, timestamp: number, signature: string, startTimestamp?: number, endTimestamp?: number, page?: number, rows?: number, recvWindow?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200191>> {
            return C2CApiFp(configuration).sapiV1C2cOrderMatchListUserOrderHistoryGet(tradeType, timestamp, signature, startTimestamp, endTimestamp, page, rows, recvWindow, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * C2CApi - object-oriented interface
 * @export
 * @class C2CApi
 * @extends {BaseAPI}
 */
export class C2CApi extends BaseAPI {
    /**
     * - If startTimestamp and endTimestamp are not sent, the recent 30-day data will be returned. - The max interval between startTimestamp and endTimestamp is 30 days.  Weight(IP): 1
     * @summary Get C2C Trade History (USER_DATA)
     * @param {string} tradeType 
     * @param {number} timestamp UTC timestamp in ms
     * @param {string} signature Signature
     * @param {number} [startTimestamp] UTC timestamp in ms
     * @param {number} [endTimestamp] UTC timestamp in ms
     * @param {number} [page] Default 1
     * @param {number} [rows] default 100, max 100
     * @param {number} [recvWindow] The value cannot be greater than 60000
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof C2CApi
     */
    public async sapiV1C2cOrderMatchListUserOrderHistoryGet(tradeType: string, timestamp: number, signature: string, startTimestamp?: number, endTimestamp?: number, page?: number, rows?: number, recvWindow?: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse200191>> {
        return C2CApiFp(this.configuration).sapiV1C2cOrderMatchListUserOrderHistoryGet(tradeType, timestamp, signature, startTimestamp, endTimestamp, page, rows, recvWindow, options).then((request) => request(this.axios, this.basePath));
    }
}
