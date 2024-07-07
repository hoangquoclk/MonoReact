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
 * @interface InlineResponse200143DataConfigDetails
 */
export interface InlineResponse200143DataConfigDetails {

    /**
     * Mining ID
     *
     * @type {number}
     * @memberof InlineResponse200143DataConfigDetails
     * @example 168
     */
    configId: number;

    /**
     * Transfer out of subaccount
     *
     * @type {string}
     * @memberof InlineResponse200143DataConfigDetails
     * @example 123
     */
    poolUsername: string;

    /**
     * Transfer into subaccount
     *
     * @type {string}
     * @memberof InlineResponse200143DataConfigDetails
     * @example user1
     */
    toPoolUsername: string;

    /**
     * Transfer algorithm
     *
     * @type {string}
     * @memberof InlineResponse200143DataConfigDetails
     * @example Ethash
     */
    algoName: string;

    /**
     * Transferred Hashrate quantity
     *
     * @type {number}
     * @memberof InlineResponse200143DataConfigDetails
     * @example 5000000
     */
    hashRate: number;

    /**
     * Start date
     *
     * @type {number}
     * @memberof InlineResponse200143DataConfigDetails
     * @example 20201210
     */
    startDay: number;

    /**
     * End date
     *
     * @type {number}
     * @memberof InlineResponse200143DataConfigDetails
     * @example 20210405
     */
    endDay: number;

    /**
     * 0 Processing, 1：Cancelled, 2：Terminated 
     *
     * @type {number}
     * @memberof InlineResponse200143DataConfigDetails
     * @example 1
     */
    status: number;
}
