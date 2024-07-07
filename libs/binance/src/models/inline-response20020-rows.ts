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
 * @interface InlineResponse20020Rows
 */
export interface InlineResponse20020Rows {

    /**
     * Isolated symbol, will not be returned for crossed margin
     *
     * @type {string}
     * @memberof InlineResponse20020Rows
     * @example BNBUSDT
     */
    isolatedSymbol: string;

    /**
     * Total amount repaid
     *
     * @type {string}
     * @memberof InlineResponse20020Rows
     * @example 14.00000000
     */
    amount: string;

    /**
     * @type {string}
     * @memberof InlineResponse20020Rows
     * @example BNB
     */
    asset: string;

    /**
     * Interest repaid
     *
     * @type {string}
     * @memberof InlineResponse20020Rows
     * @example 0.01866667
     */
    interest: string;

    /**
     * Principal repaid
     *
     * @type {string}
     * @memberof InlineResponse20020Rows
     * @example 13.98133333
     */
    principal: string;

    /**
     * One of PENDING (pending execution), CONFIRMED (successfully execution), FAILED (execution failed, nothing happened to your account)
     *
     * @type {string}
     * @memberof InlineResponse20020Rows
     * @example CONFIRMED
     */
    status: string;

    /**
     * @type {number}
     * @memberof InlineResponse20020Rows
     * @example 1563438204000
     */
    timestamp: number;

    /**
     * @type {number}
     * @memberof InlineResponse20020Rows
     * @example 2970933056
     */
    txId: number;
}
