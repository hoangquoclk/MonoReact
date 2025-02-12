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

import { Sapiv1bswappoolConfigureAssetConfigure } from './sapiv1bswappool-configure-asset-configure';
import { Sapiv1bswappoolConfigureLiquidity } from './sapiv1bswappool-configure-liquidity';
 /**
 * 
 *
 * @export
 * @interface InlineResponse200185
 */
export interface InlineResponse200185 {

    /**
     * @type {number}
     * @memberof InlineResponse200185
     * @example 2
     */
    poolId: number;

    /**
     * @type {string}
     * @memberof InlineResponse200185
     * @example BUSD/USDT
     */
    poolNmae: string;

    /**
     * @type {number}
     * @memberof InlineResponse200185
     * @example 1565769342148
     */
    updateTime: number;

    /**
     * @type {Sapiv1bswappoolConfigureLiquidity}
     * @memberof InlineResponse200185
     */
    liquidity: Sapiv1bswappoolConfigureLiquidity;

    /**
     * @type {Sapiv1bswappoolConfigureAssetConfigure}
     * @memberof InlineResponse200185
     */
    assetConfigure: Sapiv1bswappoolConfigureAssetConfigure;
}
