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
 * @interface InlineResponse20039
 */
export interface InlineResponse20039 {

    /**
     * @type {string}
     * @memberof InlineResponse20039
     * @example BTC
     */
    asset: string;

    /**
     * @type {string}
     * @memberof InlineResponse20039
     * @example 0.00025000
     */
    dailyInterestRate: string;

    /**
     * @type {number}
     * @memberof InlineResponse20039
     * @example 1611544731000
     */
    timestamp: number;

    /**
     * @type {number}
     * @memberof InlineResponse20039
     * @example 1
     */
    vipLevel: number;
}
