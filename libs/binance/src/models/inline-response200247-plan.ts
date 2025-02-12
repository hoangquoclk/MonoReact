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

import { InlineResponse200247Details } from './inline-response200247-details';
 /**
 * 
 *
 * @export
 * @interface InlineResponse200247Plan
 */
export interface InlineResponse200247Plan {

    /**
     * @type {number}
     * @memberof InlineResponse200247Plan
     * @example 12345
     */
    planId: number;

    /**
     * @type {string}
     * @memberof InlineResponse200247Plan
     * @example SINGLE
     */
    planType: string;

    /**
     * @type {string}
     * @memberof InlineResponse200247Plan
     * @example true
     */
    editAllowed: string;

    /**
     * @type {string}
     * @memberof InlineResponse200247Plan
     * @example false
     */
    flexibleAllowedToUse: string;

    /**
     * @type {number}
     * @memberof InlineResponse200247Plan
     * @example 1648378800000
     */
    creationDateTime: number;

    /**
     * @type {number}
     * @memberof InlineResponse200247Plan
     * @example 1648378800000
     */
    firstExecutionDateTime: number;

    /**
     * @type {number}
     * @memberof InlineResponse200247Plan
     * @example 1648378800000
     */
    nextExecutionDateTime: number;

    /**
     * @type {string}
     * @memberof InlineResponse200247Plan
     * @example ONGOING
     */
    status: string;

    /**
     * @type {string}
     * @memberof InlineResponse200247Plan
     * @example BTC
     */
    targetAsset: string;

    /**
     * @type {string}
     * @memberof InlineResponse200247Plan
     * @example BUSD
     */
    sourceAsset: string;

    /**
     * @type {string}
     * @memberof InlineResponse200247Plan
     * @example 4.555
     */
    totalInvestedInUSD: string;

    /**
     * @type {string}
     * @memberof InlineResponse200247Plan
     * @example 101.2
     */
    planValueInUSD: string;

    /**
     * @type {string}
     * @memberof InlineResponse200247Plan
     * @example 101.2
     */
    pnlInUSD: string;

    /**
     * @type {string}
     * @memberof InlineResponse200247Plan
     * @example 1.02
     */
    roi: string;

    /**
     * @type {Array<InlineResponse200247Details>}
     * @memberof InlineResponse200247Plan
     */
    details: Array<InlineResponse200247Details>;
}
