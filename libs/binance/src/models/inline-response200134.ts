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
 * @interface InlineResponse200134
 */
export interface InlineResponse200134 {

    /**
     * @type {string}
     * @memberof InlineResponse200134
     * @example 123123
     */
    positionId: string;

    /**
     * @type {string}
     * @memberof InlineResponse200134
     * @example Axs*90
     */
    projectId: string;

    /**
     * @type {string}
     * @memberof InlineResponse200134
     * @example AXS
     */
    asset: string;

    /**
     * @type {string}
     * @memberof InlineResponse200134
     * @example 122.09202928
     */
    amount: string;

    /**
     * @type {string}
     * @memberof InlineResponse200134
     * @example 1646182276000
     */
    purchaseTime: string;

    /**
     * @type {string}
     * @memberof InlineResponse200134
     * @example 60
     */
    duration: string;

    /**
     * @type {string}
     * @memberof InlineResponse200134
     * @example 4
     */
    accrualDays: string;

    /**
     * @type {string}
     * @memberof InlineResponse200134
     * @example AXS
     */
    rewardAsset: string;

    /**
     * @type {string}
     * @memberof InlineResponse200134
     * @example 0.2032
     */
    APY: string;

    /**
     * @type {string}
     * @memberof InlineResponse200134
     * @example 5.17181528
     */
    rewardAmt: string;

    /**
     * @type {string}
     * @memberof InlineResponse200134
     * @example BNB
     */
    extraRewardAsset: string;

    /**
     * @type {string}
     * @memberof InlineResponse200134
     * @example 0.0203
     */
    extraRewardAPY: string;

    /**
     * @type {string}
     * @memberof InlineResponse200134
     * @example 5.17181528
     */
    estExtraRewardAmt: string;

    /**
     * @type {string}
     * @memberof InlineResponse200134
     * @example 1.29295383
     */
    nextInterestPay: string;

    /**
     * @type {string}
     * @memberof InlineResponse200134
     * @example 1646697600000
     */
    nextInterestPayDate: string;

    /**
     * @type {string}
     * @memberof InlineResponse200134
     * @example 1
     */
    payInterestPeriod: string;

    /**
     * @type {string}
     * @memberof InlineResponse200134
     * @example 2802.24068892
     */
    redeemAmountEarly: string;

    /**
     * @type {string}
     * @memberof InlineResponse200134
     * @example 1651449600000
     */
    interestEndDate: string;

    /**
     * @type {string}
     * @memberof InlineResponse200134
     * @example 1651536000000
     */
    deliverDate: string;

    /**
     * @type {string}
     * @memberof InlineResponse200134
     * @example 1
     */
    redeemPeriod: string;

    /**
     * @type {string}
     * @memberof InlineResponse200134
     * @example 232.2323
     */
    redeemingAmt: string;

    /**
     * @type {string}
     * @memberof InlineResponse200134
     * @example 1651536000000
     */
    partialAmtDeliverDate: string;

    /**
     * @type {boolean}
     * @memberof InlineResponse200134
     * @example true
     */
    canRedeemEarly: boolean;

    /**
     * @type {boolean}
     * @memberof InlineResponse200134
     * @example true
     */
    renewable: boolean;

    /**
     * @type {string}
     * @memberof InlineResponse200134
     * @example AUTO
     */
    type: string;

    /**
     * @type {string}
     * @memberof InlineResponse200134
     * @example HOLDING
     */
    status: string;
}
