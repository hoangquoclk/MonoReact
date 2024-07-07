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
 * @interface InlineResponse200112ManagerSubTransferHistoryVos
 */
export interface InlineResponse200112ManagerSubTransferHistoryVos {

    /**
     * @type {string}
     * @memberof InlineResponse200112ManagerSubTransferHistoryVos
     * @example test_0_virtual@kq3kno9imanagedsub.com
     */
    fromEmail: string;

    /**
     * @type {string}
     * @memberof InlineResponse200112ManagerSubTransferHistoryVos
     * @example SPOT
     */
    fromAccountType: string;

    /**
     * @type {string}
     * @memberof InlineResponse200112ManagerSubTransferHistoryVos
     * @example wdywl0lddakh@test.com
     */
    toEmail: string;

    /**
     * @type {string}
     * @memberof InlineResponse200112ManagerSubTransferHistoryVos
     * @example SPOT
     */
    toAccountType: string;

    /**
     * @type {string}
     * @memberof InlineResponse200112ManagerSubTransferHistoryVos
     * @example BNB
     */
    asset: string;

    /**
     * @type {string}
     * @memberof InlineResponse200112ManagerSubTransferHistoryVos
     * @example 0.01
     */
    amount: string;

    /**
     * @type {number}
     * @memberof InlineResponse200112ManagerSubTransferHistoryVos
     * @example 1626144956000
     */
    scheduledData: number;

    /**
     * @type {number}
     * @memberof InlineResponse200112ManagerSubTransferHistoryVos
     * @example 1626144956000
     */
    createTime: number;

    /**
     * @type {string}
     * @memberof InlineResponse200112ManagerSubTransferHistoryVos
     * @example SUCCESS
     */
    status: string;

    /**
     * @type {number}
     * @memberof InlineResponse200112ManagerSubTransferHistoryVos
     * @example 91077779
     */
    tranId: number;
}
