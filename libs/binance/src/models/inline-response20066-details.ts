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
 * @interface InlineResponse20066Details
 */
export interface InlineResponse20066Details {

    /**
     * @type {string}
     * @memberof InlineResponse20066Details
     * @example ADA
     */
    asset: string;

    /**
     * @type {string}
     * @memberof InlineResponse20066Details
     * @example ADA
     */
    assetFullName: string;

    /**
     * Convertible amount
     *
     * @type {string}
     * @memberof InlineResponse20066Details
     * @example 6.21
     */
    amountFree: string;

    /**
     * BTC amount
     *
     * @type {string}
     * @memberof InlineResponse20066Details
     * @example 0.00016848
     */
    toBTC: string;

    /**
     * BNB amount(Not deducted commission fee
     *
     * @type {string}
     * @memberof InlineResponse20066Details
     * @example 0.01777302
     */
    toBNB: string;

    /**
     * BNB amount(Deducted commission fee
     *
     * @type {string}
     * @memberof InlineResponse20066Details
     * @example 0.01741756
     */
    toBNBOffExchange: string;

    /**
     * Commission fee
     *
     * @type {string}
     * @memberof InlineResponse20066Details
     * @example 0.00035546
     */
    exchange: string;
}
