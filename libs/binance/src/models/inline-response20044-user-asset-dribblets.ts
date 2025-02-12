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

import { InlineResponse20044UserAssetDribbletDetails } from './inline-response20044-user-asset-dribblet-details';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20044UserAssetDribblets
 */
export interface InlineResponse20044UserAssetDribblets {

    /**
     * @type {number}
     * @memberof InlineResponse20044UserAssetDribblets
     * @example 1615985535000
     */
    operateTime: number;

    /**
     * @type {string}
     * @memberof InlineResponse20044UserAssetDribblets
     * @example 0.00132256
     */
    totalTransferedAmount: string;

    /**
     * @type {string}
     * @memberof InlineResponse20044UserAssetDribblets
     * @example 0.00002699
     */
    totalServiceChargeAmount: string;

    /**
     * @type {number}
     * @memberof InlineResponse20044UserAssetDribblets
     * @example 45178372831
     */
    transId: number;

    /**
     * @type {Array<InlineResponse20044UserAssetDribbletDetails>}
     * @memberof InlineResponse20044UserAssetDribblets
     */
    userAssetDribbletDetails: Array<InlineResponse20044UserAssetDribbletDetails>;
}
