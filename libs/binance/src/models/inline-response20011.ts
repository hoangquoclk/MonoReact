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

import { InlineResponse20011Orders } from './inline-response20011-orders';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20011
 */
export interface InlineResponse20011 {

    /**
     * @type {number}
     * @memberof InlineResponse20011
     * @example 27
     */
    orderListId: number;

    /**
     * @type {string}
     * @memberof InlineResponse20011
     * @example OCO
     */
    contingencyType: string;

    /**
     * @type {string}
     * @memberof InlineResponse20011
     * @example EXEC_STARTED
     */
    listStatusType: string;

    /**
     * @type {string}
     * @memberof InlineResponse20011
     * @example EXECUTING
     */
    listOrderStatus: string;

    /**
     * @type {string}
     * @memberof InlineResponse20011
     * @example h2USkA5YQpaXHPIrkd96xE
     */
    listClientOrderId: string;

    /**
     * @type {number}
     * @memberof InlineResponse20011
     * @example 1565245656253
     */
    transactionTime: number;

    /**
     * @type {string}
     * @memberof InlineResponse20011
     * @example LTCBTC
     */
    symbol: string;

    /**
     * @type {Array<InlineResponse20011Orders>}
     * @memberof InlineResponse20011
     */
    orders: Array<InlineResponse20011Orders>;
}
