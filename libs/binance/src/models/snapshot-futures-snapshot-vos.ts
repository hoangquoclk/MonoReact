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

import { SnapshotFuturesData } from './snapshot-futures-data';
 /**
 * 
 *
 * @export
 * @interface SnapshotFuturesSnapshotVos
 */
export interface SnapshotFuturesSnapshotVos {

    /**
     * @type {SnapshotFuturesData}
     * @memberof SnapshotFuturesSnapshotVos
     */
    data: SnapshotFuturesData;

    /**
     * @type {string}
     * @memberof SnapshotFuturesSnapshotVos
     * @example futures
     */
    type: string;

    /**
     * @type {number}
     * @memberof SnapshotFuturesSnapshotVos
     * @example 1576281599000
     */
    updateTime: number;
}
