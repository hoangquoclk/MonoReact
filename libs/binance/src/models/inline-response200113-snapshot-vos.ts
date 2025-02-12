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

import { InlineResponse200113Data } from './inline-response200113-data';
 /**
 * 
 *
 * @export
 * @interface InlineResponse200113SnapshotVos
 */
export interface InlineResponse200113SnapshotVos {

    /**
     * @type {string}
     * @memberof InlineResponse200113SnapshotVos
     * @example FUTURES
     */
    type: string;

    /**
     * @type {number}
     * @memberof InlineResponse200113SnapshotVos
     * @example 1626400907000
     */
    updateTime: number;

    /**
     * @type {InlineResponse200113Data}
     * @memberof InlineResponse200113SnapshotVos
     */
    data: InlineResponse200113Data;
}
