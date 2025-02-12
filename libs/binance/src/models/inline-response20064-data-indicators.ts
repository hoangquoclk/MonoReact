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

import { InlineResponse20064DataIndicatorsBTCUSDT } from './inline-response20064-data-indicators-btcusdt';
 /**
 * The indicators updated every 30 seconds
 *
 * @export
 * @interface InlineResponse20064DataIndicators
 */
export interface InlineResponse20064DataIndicators {

    /**
     * @type {Array<InlineResponse20064DataIndicatorsBTCUSDT>}
     * @memberof InlineResponse20064DataIndicators
     */
    BTCUSDT: Array<InlineResponse20064DataIndicatorsBTCUSDT>;
}
