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

import { InlineResponse200160Orders } from './inline-response200160-orders';
 /**
 * 
 *
 * @export
 * @interface InlineResponse200160
 */
export interface InlineResponse200160 {

    /**
     * @type {number}
     * @memberof InlineResponse200160
     * @example 1
     */
    total: number;

    /**
     * @type {Array<InlineResponse200160Orders>}
     * @memberof InlineResponse200160
     */
    orders: Array<InlineResponse200160Orders>;
}
