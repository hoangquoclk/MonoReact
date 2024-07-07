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
 * @interface InlineResponse200204Rows
 */
export interface InlineResponse200204Rows {

    /**
     * @type {number}
     * @memberof InlineResponse200204Rows
     * @example 100000001
     */
    orderId: number;

    /**
     * @type {string}
     * @memberof InlineResponse200204Rows
     * @example BUSD
     */
    loanCoin: string;

    /**
     * @type {string}
     * @memberof InlineResponse200204Rows
     * @example 10000
     */
    initialLoanAmount: string;

    /**
     * @type {string}
     * @memberof InlineResponse200204Rows
     * @example 0.000057
     */
    hourlyInterestRate: string;

    /**
     * @type {string}
     * @memberof InlineResponse200204Rows
     * @example 7
     */
    loanTerm: string;

    /**
     * @type {string}
     * @memberof InlineResponse200204Rows
     * @example BNB
     */
    collateralCoin: string;

    /**
     * @type {string}
     * @memberof InlineResponse200204Rows
     * @example 49.27565492
     */
    initialCollateralAmount: string;

    /**
     * @type {number}
     * @memberof InlineResponse200204Rows
     * @example 1575018510000
     */
    borrowTime: number;

    /**
     * @type {string}
     * @memberof InlineResponse200204Rows
     * @example Accruing_Interest, Overdue, Liquidating, Repaying, Repaid, Liquidated, Pending, Failed
     */
    status: string;
}
