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
 * @interface InlineResponse20073
 */
export interface InlineResponse20073 {

    /**
     * @type {string}
     * @memberof InlineResponse20073
     * @example USDT
     */
    asset: string;

    /**
     * @type {string}
     * @memberof InlineResponse20073
     * @example 1
     */
    free: string;

    /**
     * @type {string}
     * @memberof InlineResponse20073
     * @example 0
     */
    locked: string;

    /**
     * @type {string}
     * @memberof InlineResponse20073
     * @example 0
     */
    freeze: string;

    /**
     * @type {string}
     * @memberof InlineResponse20073
     * @example 0
     */
    withdrawing: string;

    /**
     * @type {string}
     * @memberof InlineResponse20073
     * @example 0.00000091
     */
    btcValuation: string;
}
