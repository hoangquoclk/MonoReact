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

import { InlineResponse200143DataConfigDetails } from './inline-response200143-data-config-details';
 /**
 * 
 *
 * @export
 * @interface InlineResponse200143Data
 */
export interface InlineResponse200143Data {

    /**
     * @type {Array<InlineResponse200143DataConfigDetails>}
     * @memberof InlineResponse200143Data
     */
    configDetails: Array<InlineResponse200143DataConfigDetails>;

    /**
     * @type {number}
     * @memberof InlineResponse200143Data
     * @example 21
     */
    totalNum: number;

    /**
     * @type {number}
     * @memberof InlineResponse200143Data
     * @example 200
     */
    pageSize: number;
}
