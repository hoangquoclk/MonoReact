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
 * @interface InlineResponse200142DataOtherProfits
 */
export interface InlineResponse200142DataOtherProfits {

    /**
     * Mining date
     *
     * @type {number}
     * @memberof InlineResponse200142DataOtherProfits
     * @example 1607443200000
     */
    time: number;

    /**
     * Coin Name
     *
     * @type {string}
     * @memberof InlineResponse200142DataOtherProfits
     * @example BTC
     */
    coinName: string;

    /**
     * 1: Merged Mining, 2: Activity Bonus, 3:Rebate 4:Smart Pool 6:Income Transfer 7:Pool Savings
     *
     * @type {number}
     * @memberof InlineResponse200142DataOtherProfits
     * @example 4
     */
    type: number;

    /**
     * @type {number}
     * @memberof InlineResponse200142DataOtherProfits
     * @example 0.0011859
     */
    profitAmount: number;

    /**
     * 0:Unpaid, 1:Paying  2：Paid
     *
     * @type {number}
     * @memberof InlineResponse200142DataOtherProfits
     * @example 2
     */
    status: number;
}
