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

import { Sapiv1lendingautoinvestrebalancehistoryTransactionDetails } from './sapiv1lendingautoinvestrebalancehistory-transaction-details';
 /**
 * 
 *
 * @export
 * @interface InlineResponse200255
 */
export interface InlineResponse200255 {

    /**
     * @type {number}
     * @memberof InlineResponse200255
     * @example 1
     */
    indexId: number;

    /**
     * @type {string}
     * @memberof InlineResponse200255
     * @example BINANCE TOP 10 EW
     */
    indexName: string;

    /**
     * @type {number}
     * @memberof InlineResponse200255
     * @example 11
     */
    rebalanceId: number;

    /**
     * @type {string}
     * @memberof InlineResponse200255
     * @example SUCCESS
     */
    status: string;

    /**
     * @type {string}
     * @memberof InlineResponse200255
     * @example 10
     */
    rebalanceFee: string;

    /**
     * @type {string}
     * @memberof InlineResponse200255
     * @example USDT
     */
    rebalanceFeeUnit: string;

    /**
     * @type {Array<Sapiv1lendingautoinvestrebalancehistoryTransactionDetails>}
     * @memberof InlineResponse200255
     */
    transactionDetails: Array<Sapiv1lendingautoinvestrebalancehistoryTransactionDetails>;
}
