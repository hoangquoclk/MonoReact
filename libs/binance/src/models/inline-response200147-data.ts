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

import { InlineResponse200147DataProfitToday } from './inline-response200147-data-profit-today';
 /**
 * 
 *
 * @export
 * @interface InlineResponse200147Data
 */
export interface InlineResponse200147Data {

    /**
     * @type {string}
     * @memberof InlineResponse200147Data
     * @example 457835490067496409.00000000
     */
    fifteenMinHashRate: string;

    /**
     * @type {string}
     * @memberof InlineResponse200147Data
     * @example 214289268068874127.65000000
     */
    dayHashRate: string;

    /**
     * @type {number}
     * @memberof InlineResponse200147Data
     * @example 0
     */
    validNum: number;

    /**
     * @type {number}
     * @memberof InlineResponse200147Data
     * @example 17562
     */
    invalidNum: number;

    /**
     * @type {InlineResponse200147DataProfitToday}
     * @memberof InlineResponse200147Data
     */
    profitToday: InlineResponse200147DataProfitToday;

    /**
     * @type {InlineResponse200147DataProfitToday}
     * @memberof InlineResponse200147Data
     */
    profitYesterday: InlineResponse200147DataProfitToday;

    /**
     * @type {string}
     * @memberof InlineResponse200147Data
     * @example test
     */
    userName: string;

    /**
     * @type {string}
     * @memberof InlineResponse200147Data
     * @example h/s
     */
    unit: string;

    /**
     * @type {string}
     * @memberof InlineResponse200147Data
     * @example sha256
     */
    algo: string;
}
