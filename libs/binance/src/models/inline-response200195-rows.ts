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
 * @interface InlineResponse200195Rows
 */
export interface InlineResponse200195Rows {

    /**
     * @type {string}
     * @memberof InlineResponse200195Rows
     * @example 12345678
     */
    collateralAccountId: string;

    /**
     * @type {string}
     * @memberof InlineResponse200195Rows
     * @example BNB,BTC,ETH
     */
    collateralCoin: string;

    /**
     * locked collateral value shown in USD value
     *
     * @type {string}
     * @memberof InlineResponse200195Rows
     * @example 500.27565492
     */
    collateralValue: string;
}
