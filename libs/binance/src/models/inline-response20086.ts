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

import { InlineResponse20086SpotSubUserAssetBtcVoList } from './inline-response20086-spot-sub-user-asset-btc-vo-list';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20086
 */
export interface InlineResponse20086 {

    /**
     * @type {number}
     * @memberof InlineResponse20086
     * @example 1
     */
    totalCount: number;

    /**
     * @type {string}
     * @memberof InlineResponse20086
     * @example 0.23231201
     */
    masterAccountTotalAsset: string;

    /**
     * @type {Array<InlineResponse20086SpotSubUserAssetBtcVoList>}
     * @memberof InlineResponse20086
     */
    spotSubUserAssetBtcVoList: Array<InlineResponse20086SpotSubUserAssetBtcVoList>;
}
