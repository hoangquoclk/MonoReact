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
 * @interface InlineResponse200257Detail
 */
export interface InlineResponse200257Detail {

    /**
     * @type {string}
     * @memberof InlineResponse200257Detail
     * @example AXS
     */
    asset: string;

    /**
     * @type {string}
     * @memberof InlineResponse200257Detail
     * @example AXS
     */
    rewardAsset: string;

    /**
     * @type {number}
     * @memberof InlineResponse200257Detail
     * @example 90
     */
    duration: number;

    /**
     * @type {boolean}
     * @memberof InlineResponse200257Detail
     * @example true
     */
    renewable: boolean;

    /**
     * @type {boolean}
     * @memberof InlineResponse200257Detail
     * @example true
     */
    isSoldOut: boolean;

    /**
     * @type {string}
     * @memberof InlineResponse200257Detail
     * @example 1.2069
     */
    apr: string;

    /**
     * @type {string}
     * @memberof InlineResponse200257Detail
     * @example CREATED
     */
    status: string;

    /**
     * @type {string}
     * @memberof InlineResponse200257Detail
     * @example 1646182276000
     */
    subscriptionStartTime: string;

    /**
     * @type {string}
     * @memberof InlineResponse200257Detail
     * @example BNB
     */
    extraRewardAsset: string;

    /**
     * @type {string}
     * @memberof InlineResponse200257Detail
     * @example 0.23
     */
    extraRewardAPR: string;
}
