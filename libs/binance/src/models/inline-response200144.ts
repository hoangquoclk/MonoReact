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

import { InlineResponse200144Data } from './inline-response200144-data';
 /**
 * 
 *
 * @export
 * @interface InlineResponse200144
 */
export interface InlineResponse200144 {

    /**
     * @type {number}
     * @memberof InlineResponse200144
     * @example 0
     */
    code: number;

    /**
     * @type {string}
     * @memberof InlineResponse200144
     */
    msg: string;

    /**
     * @type {InlineResponse200144Data}
     * @memberof InlineResponse200144
     */
    data: InlineResponse200144Data;
}
