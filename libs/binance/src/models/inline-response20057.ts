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

import { Sapiv1capitalconfiggetallNetworkList } from './sapiv1capitalconfiggetall-network-list';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20057
 */
export interface InlineResponse20057 {

    /**
     * @type {string}
     * @memberof InlineResponse20057
     * @example BTC
     */
    coin: string;

    /**
     * @type {boolean}
     * @memberof InlineResponse20057
     */
    depositAllEnable: boolean;

    /**
     * @type {string}
     * @memberof InlineResponse20057
     * @example 0.00000000
     */
    free: string;

    /**
     * @type {string}
     * @memberof InlineResponse20057
     * @example 0.00000000
     */
    freeze: string;

    /**
     * @type {string}
     * @memberof InlineResponse20057
     * @example 0.00000000
     */
    ipoable: string;

    /**
     * @type {string}
     * @memberof InlineResponse20057
     * @example 0.00000000
     */
    ipoing: string;

    /**
     * @type {boolean}
     * @memberof InlineResponse20057
     * @example false
     */
    isLegalMoney: boolean;

    /**
     * @type {string}
     * @memberof InlineResponse20057
     * @example 0.00000000
     */
    locked: string;

    /**
     * @type {string}
     * @memberof InlineResponse20057
     * @example Bitcoin
     */
    name: string;

    /**
     * @type {Array<Sapiv1capitalconfiggetallNetworkList>}
     * @memberof InlineResponse20057
     */
    networkList: Array<Sapiv1capitalconfiggetallNetworkList>;

    /**
     * @type {string}
     * @memberof InlineResponse20057
     * @example 0.00000000
     */
    storage: string;

    /**
     * @type {boolean}
     * @memberof InlineResponse20057
     */
    trading: boolean;

    /**
     * @type {boolean}
     * @memberof InlineResponse20057
     */
    withdrawAllEnable: boolean;

    /**
     * @type {string}
     * @memberof InlineResponse20057
     * @example 0.00000000
     */
    withdrawing: string;
}
