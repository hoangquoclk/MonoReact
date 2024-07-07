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

import { SnapshotSpotData } from './snapshot-spot-data';
 /**
 * 
 *
 * @export
 * @interface SnapshotSpotSnapshotVos
 */
export interface SnapshotSpotSnapshotVos {

    /**
     * @type {SnapshotSpotData}
     * @memberof SnapshotSpotSnapshotVos
     */
    data: SnapshotSpotData;

    /**
     * @type {string}
     * @memberof SnapshotSpotSnapshotVos
     * @example spot
     */
    type: string;

    /**
     * @type {number}
     * @memberof SnapshotSpotSnapshotVos
     * @example 1576281599000
     */
    updateTime: number;
}
