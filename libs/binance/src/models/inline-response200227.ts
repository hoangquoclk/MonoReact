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
 * @interface InlineResponse200227
 */
export interface InlineResponse200227 {

    /**
     * @type {string}
     * @memberof InlineResponse200227
     * @example 933256278426274426
     */
    orderId: string;

    /**
     * @type {number}
     * @memberof InlineResponse200227
     * @example 1623381330472
     */
    createTime: number;

    /**
     * @type {string}
     * @memberof InlineResponse200227
     * @example PROCESS
     */
    orderStatus: string;
}
