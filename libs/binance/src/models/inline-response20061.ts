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
 * @interface InlineResponse20061
 */
export interface InlineResponse20061 {

    /**
     * @type {string}
     * @memberof InlineResponse20061
     * @example 0x94df8b352de7f46f64b01d3666bf6e936e44ce60
     */
    address: string;

    /**
     * @type {string}
     * @memberof InlineResponse20061
     * @example 8.91000000
     */
    amount: string;

    /**
     * @type {string}
     * @memberof InlineResponse20061
     * @example 2019-10-12 11:12:02
     */
    applyTime: string;

    /**
     * @type {string}
     * @memberof InlineResponse20061
     * @example USDT
     */
    coin: string;

    /**
     * @type {string}
     * @memberof InlineResponse20061
     * @example b6ae22b3aa844210a7041aee7589627c
     */
    id: string;

    /**
     * will not be returned if there's no withdrawOrderId for this withdraw.
     *
     * @type {string}
     * @memberof InlineResponse20061
     * @example WITHDRAWtest123
     */
    withdrawOrderId: string;

    /**
     * @type {string}
     * @memberof InlineResponse20061
     * @example ETH
     */
    network: string;

    /**
     * 1 for internal transfer, 0 for external transfer
     *
     * @type {number}
     * @memberof InlineResponse20061
     * @example 0
     */
    transferType: number;

    /**
     * @type {number}
     * @memberof InlineResponse20061
     * @example 6
     */
    status: number;

    /**
     * @type {string}
     * @memberof InlineResponse20061
     * @example 0.004
     */
    transactionFee: string;

    /**
     * @type {number}
     * @memberof InlineResponse20061
     * @example 3
     */
    confirmNo?: number;

    /**
     * Reason for withdrawal failure
     *
     * @type {string}
     * @memberof InlineResponse20061
     * @example The address is not valid. Please confirm with the recipient
     */
    info?: string;

    /**
     * @type {string}
     * @memberof InlineResponse20061
     * @example 0xb5ef8c13b968a406cc62a93a8bd80f9e9a906ef1b3fcf20a2e48573c17659268
     */
    txId: string;
}
