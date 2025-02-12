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
 * @interface InlineResponse200246Plan
 */
export interface InlineResponse200246Plan {

    /**
     * @type {number}
     * @memberof InlineResponse200246Plan
     * @example 12345
     */
    planId: number;

    /**
     * @type {string}
     * @memberof InlineResponse200246Plan
     * @example SINGLE
     */
    planType: string;

    /**
     * @type {string}
     * @memberof InlineResponse200246Plan
     * @example true
     */
    editAllowed: string;

    /**
     * @type {number}
     * @memberof InlineResponse200246Plan
     * @example 1648378800000
     */
    creationDateTime: number;

    /**
     * @type {number}
     * @memberof InlineResponse200246Plan
     * @example 1648378800000
     */
    firstExecutionDateTime: number;

    /**
     * @type {number}
     * @memberof InlineResponse200246Plan
     * @example 1648378800000
     */
    nextExecutionDateTime: number;

    /**
     * @type {string}
     * @memberof InlineResponse200246Plan
     * @example ONGOING
     */
    status: string;

    /**
     * @type {number}
     * @memberof InlineResponse200246Plan
     * @example 1648378800000
     */
    lastUpdatedDateTime: number;

    /**
     * @type {string}
     * @memberof InlineResponse200246Plan
     * @example BTC
     */
    targetAsset: string;

    /**
     * @type {string}
     * @memberof InlineResponse200246Plan
     * @example 0.111
     */
    totalTargetAmount: string;

    /**
     * @type {string}
     * @memberof InlineResponse200246Plan
     * @example BUSD
     */
    sourceAsset: string;

    /**
     * @type {string}
     * @memberof InlineResponse200246Plan
     * @example 4.555
     */
    totalInvestedInUSD: string;

    /**
     * @type {string}
     * @memberof InlineResponse200246Plan
     * @example 0.1
     */
    subscriptionAmount: string;

    /**
     * @type {string}
     * @memberof InlineResponse200246Plan
     * @example WEEKLY
     */
    subscriptionCycle: string;

    /**
     * @type {string}
     * @memberof InlineResponse200246Plan
     * @example 1
     */
    subscriptionStartDay: string;

    /**
     * @type {string}
     * @memberof InlineResponse200246Plan
     * @example MON
     */
    subscriptionStartWeekday: string;

    /**
     * @type {string}
     * @memberof InlineResponse200246Plan
     * @example 1
     */
    subscriptionStartTime: string;

    /**
     * @type {string}
     * @memberof InlineResponse200246Plan
     * @example SPOT_WALLET
     */
    sourceWallet: string;

    /**
     * @type {string}
     * @memberof InlineResponse200246Plan
     * @example false
     */
    flexibleAllowedToUse: string;

    /**
     * @type {string}
     * @memberof InlineResponse200246Plan
     * @example 101.2
     */
    planValueInUSD: string;

    /**
     * @type {string}
     * @memberof InlineResponse200246Plan
     * @example 101.2
     */
    pnlInUSD: string;

    /**
     * @type {string}
     * @memberof InlineResponse200246Plan
     * @example 1.02
     */
    roi: string;
}
