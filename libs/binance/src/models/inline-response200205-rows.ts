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
 * @interface InlineResponse200205Rows
 */
export interface InlineResponse200205Rows {

    /**
     * @type {number}
     * @memberof InlineResponse200205Rows
     * @example 100000001
     */
    orderId: number;

    /**
     * @type {string}
     * @memberof InlineResponse200205Rows
     * @example BUSD
     */
    loanCoin: string;

    /**
     * @type {string}
     * @memberof InlineResponse200205Rows
     * @example 10000
     */
    totalDebt: string;

    /**
     * @type {string}
     * @memberof InlineResponse200205Rows
     * @example 10.27687923
     */
    residualInterest: string;

    /**
     * @type {string}
     * @memberof InlineResponse200205Rows
     * @example BNB
     */
    collateralCoin: string;

    /**
     * @type {string}
     * @memberof InlineResponse200205Rows
     * @example 49.27565492
     */
    collateralAmount: string;

    /**
     * @type {string}
     * @memberof InlineResponse200205Rows
     * @example 0.57
     */
    currentLTV: string;

    /**
     * @type {number}
     * @memberof InlineResponse200205Rows
     * @example 1575018510000
     */
    expirationTime: number;
}
