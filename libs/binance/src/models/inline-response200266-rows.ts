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
 * @interface InlineResponse200266Rows
 */
export interface InlineResponse200266Rows {

    /**
     * @type {string}
     * @memberof InlineResponse200266Rows
     * @example 10.54000000
     */
    amount: string;

    /**
     * @type {string}
     * @memberof InlineResponse200266Rows
     * @example USDT
     */
    asset: string;

    /**
     * @type {number}
     * @memberof InlineResponse200266Rows
     * @example 1577257222000
     */
    time: number;

    /**
     * @type {string}
     * @memberof InlineResponse200266Rows
     * @example USDT001
     */
    projectId: string;

    /**
     * @type {number}
     * @memberof InlineResponse200266Rows
     * @example 40607
     */
    redeemId: number;

    /**
     * SPOT, FUNDING
     *
     * @type {string}
     * @memberof InlineResponse200266Rows
     * @example SPOT
     */
    destAccount: string;

    /**
     * @type {string}
     * @memberof InlineResponse200266Rows
     * @example PAID
     */
    status: string;
}
