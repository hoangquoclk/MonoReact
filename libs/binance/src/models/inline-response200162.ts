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

import { InlineResponse200162SubOrders } from './inline-response200162-sub-orders';
 /**
 * 
 *
 * @export
 * @interface InlineResponse200162
 */
export interface InlineResponse200162 {

    /**
     * @type {number}
     * @memberof InlineResponse200162
     * @example 1
     */
    total: number;

    /**
     * @type {string}
     * @memberof InlineResponse200162
     * @example 1.000
     */
    executedQty: string;

    /**
     * @type {string}
     * @memberof InlineResponse200162
     * @example 3229.44000000
     */
    executedAmt: string;

    /**
     * @type {Array<InlineResponse200162SubOrders>}
     * @memberof InlineResponse200162
     */
    subOrders: Array<InlineResponse200162SubOrders>;
}
