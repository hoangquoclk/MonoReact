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

import { InlineResponse200231Tokens } from './inline-response200231-tokens';
 /**
 * 
 *
 * @export
 * @interface InlineResponse200231List
 */
export interface InlineResponse200231List {

    /**
     * 0: purchase order, 1: sell order, 2: royalty income, 3: primary market order, 4: mint fee
     *
     * @type {string}
     * @memberof InlineResponse200231List
     * @example 1_470502070600699904
     */
    orderNo: string;

    /**
     * @type {Array<InlineResponse200231Tokens>}
     * @memberof InlineResponse200231List
     */
    tokens: Array<InlineResponse200231Tokens>;

    /**
     * @type {number}
     * @memberof InlineResponse200231List
     * @example 1626941236000
     */
    tradeTime: number;

    /**
     * @type {string}
     * @memberof InlineResponse200231List
     * @example 19.60000000
     */
    tradeAmount: string;

    /**
     * @type {string}
     * @memberof InlineResponse200231List
     * @example BNB
     */
    tradeCurrency: string;
}
