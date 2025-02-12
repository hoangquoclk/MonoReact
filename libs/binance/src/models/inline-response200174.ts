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
 * @interface InlineResponse200174
 */
export interface InlineResponse200174 {

    /**
     * @type {number}
     * @memberof InlineResponse200174
     * @example 1
     */
    id: number;

    /**
     * @type {string}
     * @memberof InlineResponse200174
     * @example LINKUP
     */
    tokenName: string;

    /**
     * Subscription amount
     *
     * @type {string}
     * @memberof InlineResponse200174
     * @example 0.54216292
     */
    amount: string;

    /**
     * NAV price of subscription
     *
     * @type {string}
     * @memberof InlineResponse200174
     * @example 18.42621386
     */
    nav: string;

    /**
     * Subscription fee in usdt
     *
     * @type {string}
     * @memberof InlineResponse200174
     * @example 0.00999000
     */
    fee: string;

    /**
     * Subscription cost in usdt
     *
     * @type {string}
     * @memberof InlineResponse200174
     * @example 9.99999991
     */
    totalCharge: string;

    /**
     * @type {number}
     * @memberof InlineResponse200174
     * @example 1599127217916
     */
    timestamp: number;
}
