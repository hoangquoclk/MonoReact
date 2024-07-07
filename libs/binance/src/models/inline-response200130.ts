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
 * @interface InlineResponse200130
 */
export interface InlineResponse200130 {

    /**
     * @type {string}
     * @memberof InlineResponse200130
     * @example USDT
     */
    asset: string;

    /**
     * @type {boolean}
     * @memberof InlineResponse200130
     */
    canTransfer: boolean;

    /**
     * @type {number}
     * @memberof InlineResponse200130
     * @example 1587010770000
     */
    createTimestamp: number;

    /**
     * @type {number}
     * @memberof InlineResponse200130
     * @example 14
     */
    duration: number;

    /**
     * @type {number}
     * @memberof InlineResponse200130
     * @example 1588291200000
     */
    endTime: number;

    /**
     * @type {string}
     * @memberof InlineResponse200130
     * @example 0.19950000
     */
    interest: string;

    /**
     * @type {string}
     * @memberof InlineResponse200130
     * @example 0.05201250
     */
    interestRate: string;

    /**
     * @type {number}
     * @memberof InlineResponse200130
     * @example 1
     */
    lot: number;

    /**
     * @type {number}
     * @memberof InlineResponse200130
     * @example 51724
     */
    positionId: number;

    /**
     * @type {string}
     * @memberof InlineResponse200130
     * @example 100.00000000
     */
    principal: string;

    /**
     * @type {string}
     * @memberof InlineResponse200130
     * @example CUSDT14DAYSS001
     */
    projectId: string;

    /**
     * @type {string}
     * @memberof InlineResponse200130
     * @example USDT
     */
    projectName: string;

    /**
     * @type {number}
     * @memberof InlineResponse200130
     * @example 1587010771000
     */
    purchaseTime: number;

    /**
     * @type {string}
     * @memberof InlineResponse200130
     * @example Fri May 01 07:00:00 ICT 2020
     */
    redeemDate: string;

    /**
     * @type {number}
     * @memberof InlineResponse200130
     * @example 1587081600000
     */
    startTime: number;

    /**
     * @type {string}
     * @memberof InlineResponse200130
     * @example HOLDING
     */
    status: string;

    /**
     * @type {string}
     * @memberof InlineResponse200130
     * @example CUSTOMIZED_FIXED
     */
    type: string;
}
