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
 * @interface InlineResponse200273Rows
 */
export interface InlineResponse200273Rows {

    /**
     * @type {string}
     * @memberof InlineResponse200273Rows
     * @example 100.00000000
     */
    amount: string;

    /**
     * @type {string}
     * @memberof InlineResponse200273Rows
     * @example BUSD001
     */
    productId: string;

    /**
     * @type {string}
     * @memberof InlineResponse200273Rows
     * @example USDT
     */
    asset: string;

    /**
     * @type {number}
     * @memberof InlineResponse200273Rows
     * @example 1575018510000
     */
    createTime: number;

    /**
     * @type {string}
     * @memberof InlineResponse200273Rows
     * @example REPAY
     */
    type: string;

    /**
     * @type {string}
     * @memberof InlineResponse200273Rows
     * @example USDT
     */
    productName: string;

    /**
     * @type {number}
     * @memberof InlineResponse200273Rows
     * @example 26055
     */
    orderId: number;
}
