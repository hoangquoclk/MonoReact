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
 * @interface InlineResponse200119
 */
export interface InlineResponse200119 {

    /**
     * @type {string}
     * @memberof InlineResponse200119
     * @example true
     */
    ipRestrict: string;

    /**
     * @type {Array<string>}
     * @memberof InlineResponse200119
     * @example ["69.210.67.14","thirdPartyName"]
     */
    ipList: Array<string>;

    /**
     * @type {number}
     * @memberof InlineResponse200119
     * @example 1636369557189
     */
    updateTime: number;

    /**
     * @type {string}
     * @memberof InlineResponse200119
     * @example k5V49ldtn4tszj6W3hystegdfvmGbqDzjmkCtpTvC0G74WhK7yd4rfCTo4lShf
     */
    apiKey: string;
}
