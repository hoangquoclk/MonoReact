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
 * @interface InlineResponse20046
 */
export interface InlineResponse20046 {

    /**
     * @type {string}
     * @memberof InlineResponse20046
     * @example ETH
     */
    asset: string;

    /**
     * @type {string}
     * @memberof InlineResponse20046
     * @example 0.00083334
     */
    interest: string;

    /**
     * @type {string}
     * @memberof InlineResponse20046
     * @example 0.001
     */
    principal: string;

    /**
     * @type {string}
     * @memberof InlineResponse20046
     * @example USDT
     */
    liabilityAsset: string;

    /**
     * @type {number}
     * @memberof InlineResponse20046
     * @example 0.3552
     */
    liabilityQty: number;
}
