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

import { InlineResponse200144DataProfitTransferDetails } from './inline-response200144-data-profit-transfer-details';
 /**
 * 
 *
 * @export
 * @interface InlineResponse200144Data
 */
export interface InlineResponse200144Data {

    /**
     * @type {Array<InlineResponse200144DataProfitTransferDetails>}
     * @memberof InlineResponse200144Data
     */
    profitTransferDetails: Array<InlineResponse200144DataProfitTransferDetails>;

    /**
     * @type {number}
     * @memberof InlineResponse200144Data
     * @example 8
     */
    totalNum: number;

    /**
     * @type {number}
     * @memberof InlineResponse200144Data
     * @example 200
     */
    pageSize: number;
}
