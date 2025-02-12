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

import { Sapiv1bswapliquidityLiquidity } from './sapiv1bswapliquidity-liquidity';
import { Sapiv1bswapliquidityShare } from './sapiv1bswapliquidity-share';
 /**
 * 
 *
 * @export
 * @interface InlineResponse200179
 */
export interface InlineResponse200179 {

    /**
     * @type {number}
     * @memberof InlineResponse200179
     * @example 2
     */
    poolId: number;

    /**
     * @type {string}
     * @memberof InlineResponse200179
     * @example BUSD/USDT
     */
    poolNmae: string;

    /**
     * @type {number}
     * @memberof InlineResponse200179
     * @example 1565769342148
     */
    updateTime: number;

    /**
     * @type {Sapiv1bswapliquidityLiquidity}
     * @memberof InlineResponse200179
     */
    liquidity: Sapiv1bswapliquidityLiquidity;

    /**
     * @type {Sapiv1bswapliquidityShare}
     * @memberof InlineResponse200179
     */
    share: Sapiv1bswapliquidityShare;
}
