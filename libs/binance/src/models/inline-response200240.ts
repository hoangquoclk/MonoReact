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

import { InlineResponse200240AutoInvestAssetList } from './inline-response200240-auto-invest-asset-list';
 /**
 * 
 *
 * @export
 * @interface InlineResponse200240
 */
export interface InlineResponse200240 {

    /**
     * @type {string}
     * @memberof InlineResponse200240
     * @example BTC
     */
    targetAssets?: string;

    /**
     * @type {Array<InlineResponse200240AutoInvestAssetList>}
     * @memberof InlineResponse200240
     */
    autoInvestAssetList?: Array<InlineResponse200240AutoInvestAssetList>;
}
