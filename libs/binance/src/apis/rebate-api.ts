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
import { InlineResponse200230 } from '../models';
/**
 * RebateApi - axios parameter creator
 * @export
 */
export const RebateApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * - The max interval between startTime and endTime is 90 days. - If startTime and endTime are not sent, the recent 7 days' data will be returned. - The earliest startTime is supported on June 10, 2020  Weight(UID): 3000
         * @summary Get Spot Rebate History Records (USER_DATA)
         * @param {number} timestamp UTC timestamp in ms
         * @param {string} signature Signature
         * @param {number} [startTime] UTC timestamp in ms
         * @param {number} [endTime] UTC timestamp in ms
         * @param {number} [page] default 1
         * @param {number} [recvWindow] The value cannot be greater than 60000
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sapiV1RebateTaxQueryGet: async (timestamp: number, signature: string, startTime?: number, endTime?: number, page?: number, recvWindow?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'timestamp' is not null or undefined
            if (timestamp === null || timestamp === undefined) {
                throw new RequiredError('timestamp','Required parameter timestamp was null or undefined when calling sapiV1RebateTaxQueryGet.');
            }
            // verify required parameter 'signature' is not null or undefined
            if (signature === null || signature === undefined) {
                throw new RequiredError('signature','Required parameter signature was null or undefined when calling sapiV1RebateTaxQueryGet.');
            }
            const localVarPath = `/sapi/v1/rebate/taxQuery`;
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

            if (startTime !== undefined) {
                localVarQueryParameter['startTime'] = startTime;
            }

            if (endTime !== undefined) {
                localVarQueryParameter['endTime'] = endTime;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
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
 * RebateApi - functional programming interface
 * @export
 */
export const RebateApiFp = function(configuration?: Configuration) {
    return {
        /**
         * - The max interval between startTime and endTime is 90 days. - If startTime and endTime are not sent, the recent 7 days' data will be returned. - The earliest startTime is supported on June 10, 2020  Weight(UID): 3000
         * @summary Get Spot Rebate History Records (USER_DATA)
         * @param {number} timestamp UTC timestamp in ms
         * @param {string} signature Signature
         * @param {number} [startTime] UTC timestamp in ms
         * @param {number} [endTime] UTC timestamp in ms
         * @param {number} [page] default 1
         * @param {number} [recvWindow] The value cannot be greater than 60000
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sapiV1RebateTaxQueryGet(timestamp: number, signature: string, startTime?: number, endTime?: number, page?: number, recvWindow?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200230>>> {
            const localVarAxiosArgs = await RebateApiAxiosParamCreator(configuration).sapiV1RebateTaxQueryGet(timestamp, signature, startTime, endTime, page, recvWindow, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * RebateApi - factory interface
 * @export
 */
export const RebateApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * - The max interval between startTime and endTime is 90 days. - If startTime and endTime are not sent, the recent 7 days' data will be returned. - The earliest startTime is supported on June 10, 2020  Weight(UID): 3000
         * @summary Get Spot Rebate History Records (USER_DATA)
         * @param {number} timestamp UTC timestamp in ms
         * @param {string} signature Signature
         * @param {number} [startTime] UTC timestamp in ms
         * @param {number} [endTime] UTC timestamp in ms
         * @param {number} [page] default 1
         * @param {number} [recvWindow] The value cannot be greater than 60000
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sapiV1RebateTaxQueryGet(timestamp: number, signature: string, startTime?: number, endTime?: number, page?: number, recvWindow?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200230>> {
            return RebateApiFp(configuration).sapiV1RebateTaxQueryGet(timestamp, signature, startTime, endTime, page, recvWindow, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RebateApi - object-oriented interface
 * @export
 * @class RebateApi
 * @extends {BaseAPI}
 */
export class RebateApi extends BaseAPI {
    /**
     * - The max interval between startTime and endTime is 90 days. - If startTime and endTime are not sent, the recent 7 days' data will be returned. - The earliest startTime is supported on June 10, 2020  Weight(UID): 3000
     * @summary Get Spot Rebate History Records (USER_DATA)
     * @param {number} timestamp UTC timestamp in ms
     * @param {string} signature Signature
     * @param {number} [startTime] UTC timestamp in ms
     * @param {number} [endTime] UTC timestamp in ms
     * @param {number} [page] default 1
     * @param {number} [recvWindow] The value cannot be greater than 60000
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebateApi
     */
    public async sapiV1RebateTaxQueryGet(timestamp: number, signature: string, startTime?: number, endTime?: number, page?: number, recvWindow?: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse200230>> {
        return RebateApiFp(this.configuration).sapiV1RebateTaxQueryGet(timestamp, signature, startTime, endTime, page, recvWindow, options).then((request) => request(this.axios, this.basePath));
    }
}
