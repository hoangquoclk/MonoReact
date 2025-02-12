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

import { InlineResponse20079ExchangeRates } from './inline-response20079-exchange-rates';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20079
 */
export interface InlineResponse20079 {

    /**
     * @type {boolean}
     * @memberof InlineResponse20079
     */
    convertEnabled: boolean;

    /**
     * @type {Array<string>}
     * @memberof InlineResponse20079
     */
    coins: Array<string>;

    /**
     * @type {InlineResponse20079ExchangeRates}
     * @memberof InlineResponse20079
     */
    exchangeRates: InlineResponse20079ExchangeRates;
}
