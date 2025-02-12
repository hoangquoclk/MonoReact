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
 * @interface InlineResponse200175
 */
export interface InlineResponse200175 {

    /**
     * @type {number}
     * @memberof InlineResponse200175
     * @example 123
     */
    id: number;

    /**
     * S, P, and F for \"success\", \"pending\", and \"failure\"
     *
     * @type {string}
     * @memberof InlineResponse200175
     * @example S
     */
    status: string;

    /**
     * @type {string}
     * @memberof InlineResponse200175
     * @example LINKUP
     */
    tokenName: string;

    /**
     * Redemption token amount
     *
     * @type {string}
     * @memberof InlineResponse200175
     * @example 0.95590905
     */
    redeemAmount: string;

    /**
     * Redemption value in usdt
     *
     * @type {string}
     * @memberof InlineResponse200175
     * @example 10.05022099
     */
    amount: string;

    /**
     * @type {number}
     * @memberof InlineResponse200175
     * @example 1600250279614
     */
    timestamp: number;
}
