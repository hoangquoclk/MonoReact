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

import { InlineResponse200147Data } from './inline-response200147-data';
 /**
 * 
 *
 * @export
 * @interface InlineResponse200147
 */
export interface InlineResponse200147 {

    /**
     * @type {number}
     * @memberof InlineResponse200147
     * @example 0
     */
    code: number;

    /**
     * @type {string}
     * @memberof InlineResponse200147
     */
    msg: string;

    /**
     * @type {InlineResponse200147Data}
     * @memberof InlineResponse200147
     */
    data: InlineResponse200147Data;
}
