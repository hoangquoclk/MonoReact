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
 * @interface InlineResponse20099SubAccountList
 */
export interface InlineResponse20099SubAccountList {

    /**
     * @type {string}
     * @memberof InlineResponse20099SubAccountList
     * @example 123@test.com
     */
    email: string;

    /**
     * @type {string}
     * @memberof InlineResponse20099SubAccountList
     * @example 9.00000000
     */
    totalInitialMargin: string;

    /**
     * @type {string}
     * @memberof InlineResponse20099SubAccountList
     * @example 0.00000000
     */
    totalMaintenanceMargin: string;

    /**
     * @type {string}
     * @memberof InlineResponse20099SubAccountList
     * @example 22.12659734
     */
    totalMarginBalance: string;

    /**
     * @type {string}
     * @memberof InlineResponse20099SubAccountList
     * @example 9.00000000
     */
    totalOpenOrderInitialMargin: string;

    /**
     * @type {string}
     * @memberof InlineResponse20099SubAccountList
     * @example 0.00000000
     */
    totalPositionInitialMargin: string;

    /**
     * @type {string}
     * @memberof InlineResponse20099SubAccountList
     * @example 0.00000000
     */
    totalUnrealizedProfit: string;

    /**
     * @type {string}
     * @memberof InlineResponse20099SubAccountList
     * @example 22.12659734
     */
    totalWalletBalance: string;

    /**
     * @type {string}
     * @memberof InlineResponse20099SubAccountList
     * @example USD
     */
    asset: string;
}
