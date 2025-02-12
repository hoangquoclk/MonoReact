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

import { SubAccountUSDTFuturesDetailsFutureAccountRespAssets } from './sub-account-usdtfutures-details-future-account-resp-assets';
 /**
 * 
 *
 * @export
 * @interface SubAccountUSDTFuturesDetailsFutureAccountResp
 */
export interface SubAccountUSDTFuturesDetailsFutureAccountResp {

    /**
     * @type {string}
     * @memberof SubAccountUSDTFuturesDetailsFutureAccountResp
     * @example abc@test.com
     */
    email: string;

    /**
     * @type {Array<SubAccountUSDTFuturesDetailsFutureAccountRespAssets>}
     * @memberof SubAccountUSDTFuturesDetailsFutureAccountResp
     */
    assets: Array<SubAccountUSDTFuturesDetailsFutureAccountRespAssets>;

    /**
     * @type {boolean}
     * @memberof SubAccountUSDTFuturesDetailsFutureAccountResp
     */
    canDeposit: boolean;

    /**
     * @type {boolean}
     * @memberof SubAccountUSDTFuturesDetailsFutureAccountResp
     */
    canTrade: boolean;

    /**
     * @type {boolean}
     * @memberof SubAccountUSDTFuturesDetailsFutureAccountResp
     */
    canWithdraw: boolean;

    /**
     * @type {number}
     * @memberof SubAccountUSDTFuturesDetailsFutureAccountResp
     * @example 2
     */
    feeTier: number;

    /**
     * @type {string}
     * @memberof SubAccountUSDTFuturesDetailsFutureAccountResp
     * @example 0.88308000
     */
    maxWithdrawAmount: string;

    /**
     * @type {string}
     * @memberof SubAccountUSDTFuturesDetailsFutureAccountResp
     * @example 0.00000000
     */
    totalInitialMargin: string;

    /**
     * @type {string}
     * @memberof SubAccountUSDTFuturesDetailsFutureAccountResp
     * @example 0.00000000
     */
    totalMaintenanceMargin: string;

    /**
     * @type {string}
     * @memberof SubAccountUSDTFuturesDetailsFutureAccountResp
     * @example 0.88308000
     */
    totalMarginBalance: string;

    /**
     * @type {string}
     * @memberof SubAccountUSDTFuturesDetailsFutureAccountResp
     * @example 0.00000000
     */
    totalOpenOrderInitialMargin: string;

    /**
     * @type {string}
     * @memberof SubAccountUSDTFuturesDetailsFutureAccountResp
     * @example 0.00000000
     */
    totalPositionInitialMargin: string;

    /**
     * @type {string}
     * @memberof SubAccountUSDTFuturesDetailsFutureAccountResp
     * @example 0.00000000
     */
    totalUnrealizedProfit: string;

    /**
     * @type {string}
     * @memberof SubAccountUSDTFuturesDetailsFutureAccountResp
     * @example 0.88308000
     */
    totalWalletBalance: string;

    /**
     * @type {number}
     * @memberof SubAccountUSDTFuturesDetailsFutureAccountResp
     * @example 1576756674610
     */
    updateTime: number;
}
