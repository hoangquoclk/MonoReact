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
 * @interface InlineResponse20049
 */
export interface InlineResponse20049 {

    /**
     * @type {number}
     * @memberof InlineResponse20049
     * @example 123456
     */
    id: number;

    /**
     * @type {number}
     * @memberof InlineResponse20049
     * @example 123123
     */
    tranId: number;

    /**
     * @type {number}
     * @memberof InlineResponse20049
     * @example 1691116657000
     */
    timestamp: number;

    /**
     * @type {string}
     * @memberof InlineResponse20049
     * @example USDT
     */
    asset: string;

    /**
     * @type {string}
     * @memberof InlineResponse20049
     * @example BTCUSDT
     */
    symbol: string;

    /**
     * @type {string}
     * @memberof InlineResponse20049
     * @example BORROW
     */
    type: string;

    /**
     * @type {string}
     * @memberof InlineResponse20049
     * @example 101
     */
    amount: string;
}
