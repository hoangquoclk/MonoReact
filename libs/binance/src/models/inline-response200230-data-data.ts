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
 * @interface InlineResponse200230DataData
 */
export interface InlineResponse200230DataData {

    /**
     * @type {string}
     * @memberof InlineResponse200230DataData
     * @example USDT
     */
    asset: string;

    /**
     * rebate type：1 is commission rebate，2 is referral kickback
     *
     * @type {number}
     * @memberof InlineResponse200230DataData
     * @example 1
     */
    type: number;

    /**
     * @type {string}
     * @memberof InlineResponse200230DataData
     * @example 0.0001126
     */
    amount: string;

    /**
     * @type {number}
     * @memberof InlineResponse200230DataData
     * @example 1637651320000
     */
    updateTime: number;
}
