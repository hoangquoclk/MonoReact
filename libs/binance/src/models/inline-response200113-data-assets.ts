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
 * @interface InlineResponse200113DataAssets
 */
export interface InlineResponse200113DataAssets {

    /**
     * @type {string}
     * @memberof InlineResponse200113DataAssets
     * @example USDT
     */
    asset: string;

    /**
     * @type {number}
     * @memberof InlineResponse200113DataAssets
     * @example 100
     */
    marginBalance: number;

    /**
     * @type {number}
     * @memberof InlineResponse200113DataAssets
     * @example 100
     */
    walletBalance: number;
}
