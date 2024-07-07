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
 * @interface InlineResponse20047Rows
 */
export interface InlineResponse20047Rows {

    /**
     * @type {string}
     * @memberof InlineResponse20047Rows
     * @example ETH
     */
    asset: string;

    /**
     * @type {string}
     * @memberof InlineResponse20047Rows
     * @example 0.00083434
     */
    amount: string;

    /**
     * @type {string}
     * @memberof InlineResponse20047Rows
     * @example BUSD
     */
    targetAsset: string;

    /**
     * @type {string}
     * @memberof InlineResponse20047Rows
     * @example 1.37576819
     */
    targetAmount: string;

    /**
     * @type {string}
     * @memberof InlineResponse20047Rows
     * @example EXCHANGE_SMALL_LIABILITY
     */
    bizType: string;

    /**
     * @type {number}
     * @memberof InlineResponse20047Rows
     * @example 1672801339253
     */
    timestamp: number;
}
