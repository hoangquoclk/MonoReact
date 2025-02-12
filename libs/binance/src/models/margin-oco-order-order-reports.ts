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
 * @interface MarginOcoOrderOrderReports
 */
export interface MarginOcoOrderOrderReports {

    /**
     * @type {string}
     * @memberof MarginOcoOrderOrderReports
     */
    symbol: string;

    /**
     * @type {string}
     * @memberof MarginOcoOrderOrderReports
     */
    origClientOrderId: string;

    /**
     * @type {number}
     * @memberof MarginOcoOrderOrderReports
     */
    orderId: number;

    /**
     * @type {number}
     * @memberof MarginOcoOrderOrderReports
     */
    orderListId: number;

    /**
     * @type {string}
     * @memberof MarginOcoOrderOrderReports
     */
    clientOrderId: string;

    /**
     * @type {string}
     * @memberof MarginOcoOrderOrderReports
     */
    price: string;

    /**
     * @type {string}
     * @memberof MarginOcoOrderOrderReports
     */
    origQty: string;

    /**
     * @type {string}
     * @memberof MarginOcoOrderOrderReports
     */
    executedQty: string;

    /**
     * @type {string}
     * @memberof MarginOcoOrderOrderReports
     */
    cummulativeQuoteQty: string;

    /**
     * @type {string}
     * @memberof MarginOcoOrderOrderReports
     */
    status: string;

    /**
     * @type {string}
     * @memberof MarginOcoOrderOrderReports
     */
    timeInForce: string;

    /**
     * @type {string}
     * @memberof MarginOcoOrderOrderReports
     */
    type: string;

    /**
     * @type {string}
     * @memberof MarginOcoOrderOrderReports
     */
    side: string;

    /**
     * @type {string}
     * @memberof MarginOcoOrderOrderReports
     */
    stopPrice: string;
}
