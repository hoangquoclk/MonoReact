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
 * @interface InlineResponse200233List
 */
export interface InlineResponse200233List {

    /**
     * @type {string}
     * @memberof InlineResponse200233List
     * @example ETH
     */
    network: string;

    /**
     * @type {string}
     * @memberof InlineResponse200233List
     * @example 0x2be5eed31d787fdb4880bc631c8e76bdfb6150e137f5cf1732e0416ea206f57f
     */
    txID: string;

    /**
     * @type {string}
     * @memberof InlineResponse200233List
     * @example 0xe507c961ee127d4439977a61af39c34eafee0dc6
     */
    contractAdrress: string;

    /**
     * @type {string}
     * @memberof InlineResponse200233List
     * @example 1000001247
     */
    tokenId: string;

    /**
     * @type {number}
     * @memberof InlineResponse200233List
     * @example 1633674433000
     */
    timestamp: number;

    /**
     * @type {number}
     * @memberof InlineResponse200233List
     * @example 0.1
     */
    fee: number;

    /**
     * @type {string}
     * @memberof InlineResponse200233List
     * @example ETH
     */
    feeAsset: string;
}
