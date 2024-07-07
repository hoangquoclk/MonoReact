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

import { InlineResponse20052Details } from './inline-response20052-details';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20052
 */
export interface InlineResponse20052 {

    /**
     * @type {Array<InlineResponse20052Details>}
     * @memberof InlineResponse20052
     */
    details: Array<InlineResponse20052Details>;

    /**
     * @type {string}
     * @memberof InlineResponse20052
     * @example 0.00016848
     */
    totalTransferBtc: string;

    /**
     * @type {string}
     * @memberof InlineResponse20052
     * @example 0.01777302
     */
    totalTransferBNB: string;

    /**
     * @type {string}
     * @memberof InlineResponse20052
     * @example 0.02
     */
    dribbletPercentage: string;
}
