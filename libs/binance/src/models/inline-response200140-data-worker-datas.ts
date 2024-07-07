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

 /**
 * 
 *
 * @export
 * @interface InlineResponse200140DataWorkerDatas
 */
export interface InlineResponse200140DataWorkerDatas {

    /**
     * @type {string}
     * @memberof InlineResponse200140DataWorkerDatas
     * @example 1420554439452400131
     */
    workerId: string;

    /**
     * @type {string}
     * @memberof InlineResponse200140DataWorkerDatas
     * @example 2X73
     */
    workerName: string;

    /**
     * Status：1 valid, 2 invalid, 3 no longer valid
     *
     * @type {number}
     * @memberof InlineResponse200140DataWorkerDatas
     * @example 3
     */
    status: number;

    /**
     * Real-time rate
     *
     * @type {number}
     * @memberof InlineResponse200140DataWorkerDatas
     * @example 0
     */
    hashRate: number;

    /**
     * 24H Hashrate
     *
     * @type {number}
     * @memberof InlineResponse200140DataWorkerDatas
     * @example 0
     */
    dayHashRate: number;

    /**
     * Real-time Rejection Rate
     *
     * @type {number}
     * @memberof InlineResponse200140DataWorkerDatas
     * @example 0
     */
    rejectRate: number;

    /**
     * Last submission time
     *
     * @type {number}
     * @memberof InlineResponse200140DataWorkerDatas
     * @example 1587712919000
     */
    lastShareTime: number;
}
