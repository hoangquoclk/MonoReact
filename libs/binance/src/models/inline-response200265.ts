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

import { InlineResponse200265Rows } from './inline-response200265-rows';
 /**
 * 
 *
 * @export
 * @interface InlineResponse200265
 */
export interface InlineResponse200265 {

    /**
     * @type {Array<InlineResponse200265Rows>}
     * @memberof InlineResponse200265
     */
    rows: Array<InlineResponse200265Rows>;

    /**
     * @type {number}
     * @memberof InlineResponse200265
     * @example 1
     */
    total: number;
}
