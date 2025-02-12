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

import { OrderResponseFullFills } from './order-response-full-fills';
 /**
 * 
 *
 * @export
 * @interface MarginOrderResponseFull
 */
export interface MarginOrderResponseFull {

    /**
     * @type {string}
     * @memberof MarginOrderResponseFull
     * @example BTCUSDT
     */
    symbol: string;

    /**
     * @type {number}
     * @memberof MarginOrderResponseFull
     * @example 28
     */
    orderId: number;

    /**
     * @type {string}
     * @memberof MarginOrderResponseFull
     * @example 6gCrw2kRUAF9CvJDGP16IP
     */
    clientOrderId: string;

    /**
     * @type {number}
     * @memberof MarginOrderResponseFull
     * @example 1507725176595
     */
    transactTime: number;

    /**
     * @type {string}
     * @memberof MarginOrderResponseFull
     * @example 1.00000000
     */
    price: string;

    /**
     * @type {string}
     * @memberof MarginOrderResponseFull
     * @example 10.00000000
     */
    origQty: string;

    /**
     * @type {string}
     * @memberof MarginOrderResponseFull
     * @example 10.00000000
     */
    executedQty: string;

    /**
     * @type {string}
     * @memberof MarginOrderResponseFull
     * @example 10.00000000
     */
    cummulativeQuoteQty: string;

    /**
     * @type {string}
     * @memberof MarginOrderResponseFull
     * @example FILLED
     */
    status: string;

    /**
     * @type {string}
     * @memberof MarginOrderResponseFull
     * @example GTC
     */
    timeInForce: string;

    /**
     * @type {string}
     * @memberof MarginOrderResponseFull
     * @example MARKET
     */
    type: string;

    /**
     * @type {string}
     * @memberof MarginOrderResponseFull
     * @example SELL
     */
    side: string;

    /**
     * will not return if no margin trade happens
     *
     * @type {number}
     * @memberof MarginOrderResponseFull
     * @example 5
     */
    marginBuyBorrowAmount: number;

    /**
     * will not return if no margin trade happens
     *
     * @type {string}
     * @memberof MarginOrderResponseFull
     * @example BTC
     */
    marginBuyBorrowAsset: string;

    /**
     * @type {boolean}
     * @memberof MarginOrderResponseFull
     */
    isIsolated: boolean;

    /**
     * @type {Array<OrderResponseFullFills>}
     * @memberof MarginOrderResponseFull
     */
    fills: Array<OrderResponseFullFills>;
}
