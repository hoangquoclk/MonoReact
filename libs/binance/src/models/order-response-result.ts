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
 * @interface OrderResponseResult
 */
export interface OrderResponseResult {

    /**
     * @type {string}
     * @memberof OrderResponseResult
     * @example BTCUSDT
     */
    symbol: string;

    /**
     * @type {number}
     * @memberof OrderResponseResult
     * @example 28
     */
    orderId: number;

    /**
     * @type {number}
     * @memberof OrderResponseResult
     * @example -1
     */
    orderListId: number;

    /**
     * @type {string}
     * @memberof OrderResponseResult
     * @example 6gCrw2kRUAF9CvJDGP16IP
     */
    clientOrderId: string;

    /**
     * @type {number}
     * @memberof OrderResponseResult
     * @example 1507725176595
     */
    transactTime: number;

    /**
     * @type {string}
     * @memberof OrderResponseResult
     * @example 0.00000000
     */
    price: string;

    /**
     * @type {string}
     * @memberof OrderResponseResult
     * @example 10.00000000
     */
    origQty: string;

    /**
     * @type {string}
     * @memberof OrderResponseResult
     * @example 10.00000000
     */
    executedQty: string;

    /**
     * @type {string}
     * @memberof OrderResponseResult
     * @example 10.00000000
     */
    cummulativeQuoteQty: string;

    /**
     * @type {string}
     * @memberof OrderResponseResult
     * @example FILLED
     */
    status: string;

    /**
     * @type {string}
     * @memberof OrderResponseResult
     * @example GTC
     */
    timeInForce: string;

    /**
     * @type {string}
     * @memberof OrderResponseResult
     * @example MARKET
     */
    type: string;

    /**
     * @type {string}
     * @memberof OrderResponseResult
     * @example SELL
     */
    side: string;

    /**
     * @type {number}
     * @memberof OrderResponseResult
     * @example 1
     */
    strategyId?: number;

    /**
     * @type {number}
     * @memberof OrderResponseResult
     * @example 1000000
     */
    strategyType?: number;

    /**
     * @type {number}
     * @memberof OrderResponseResult
     * @example 1507725176595
     */
    workingTime: number;

    /**
     * @type {string}
     * @memberof OrderResponseResult
     * @example NONE
     */
    selfTradePreventionMode: string;
}
