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
 * @interface InlineResponse200149DataAccountProfits
 */
export interface InlineResponse200149DataAccountProfits {

    /**
     * @type {number}
     * @memberof InlineResponse200149DataAccountProfits
     * @example 1607443200000
     */
    time: number;

    /**
     * @type {string}
     * @memberof InlineResponse200149DataAccountProfits
     * @example BTC
     */
    coinName: string;

    /**
     * 0:Referral 1:Refund 2:Rebate
     *
     * @type {number}
     * @memberof InlineResponse200149DataAccountProfits
     * @example 2
     */
    type: number;

    /**
     * puid
     *
     * @type {number}
     * @memberof InlineResponse200149DataAccountProfits
     * @example 59985472
     */
    puid: number;

    /**
     * Mining account
     *
     * @type {string}
     * @memberof InlineResponse200149DataAccountProfits
     * @example vdvaghani
     */
    subName: string;

    /**
     * @type {number}
     * @memberof InlineResponse200149DataAccountProfits
     * @example 0.09186957
     */
    amount: number;
}
