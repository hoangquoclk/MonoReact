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
 * @interface MarginTrade
 */
export interface MarginTrade {

    /**
     * @type {string}
     * @memberof MarginTrade
     * @example 0.00006000
     */
    commission: string;

    /**
     * @type {string}
     * @memberof MarginTrade
     * @example BTC
     */
    commissionAsset: string;

    /**
     * @type {number}
     * @memberof MarginTrade
     * @example 28
     */
    id: number;

    /**
     * @type {boolean}
     * @memberof MarginTrade
     */
    isBestMatch: boolean;

    /**
     * @type {boolean}
     * @memberof MarginTrade
     */
    isBuyer: boolean;

    /**
     * @type {boolean}
     * @memberof MarginTrade
     */
    isMaker: boolean;

    /**
     * @type {number}
     * @memberof MarginTrade
     * @example 28
     */
    orderId: number;

    /**
     * @type {string}
     * @memberof MarginTrade
     * @example 0.02000000
     */
    price: string;

    /**
     * @type {string}
     * @memberof MarginTrade
     * @example 1.02000000
     */
    qty: string;

    /**
     * @type {string}
     * @memberof MarginTrade
     * @example BNBBTC
     */
    symbol: string;

    /**
     * @type {boolean}
     * @memberof MarginTrade
     * @example false
     */
    isIsolated: boolean;

    /**
     * @type {number}
     * @memberof MarginTrade
     * @example 1507725176595
     */
    time: number;
}
