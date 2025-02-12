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

 /**
 * 
 *
 * @export
 * @interface InlineResponse200243SourceAssets
 */
export interface InlineResponse200243SourceAssets {

    /**
     * @type {string}
     * @memberof InlineResponse200243SourceAssets
     * @example USDT
     */
    sourceAsset: string;

    /**
     * @type {string}
     * @memberof InlineResponse200243SourceAssets
     * @example 0.1
     */
    assetMinAmount: string;

    /**
     * @type {string}
     * @memberof InlineResponse200243SourceAssets
     * @example 1000000
     */
    assetMaxAmount: string;

    /**
     * @type {string}
     * @memberof InlineResponse200243SourceAssets
     * @example 2
     */
    scale: string;

    /**
     * @type {string}
     * @memberof InlineResponse200243SourceAssets
     * @example 1111
     */
    flexibleAmount: string;
}
