/* tslint:disable */
/* eslint-disable */
/**
 * 
 * This API includes ways to manipulate documents,xchanges,subscriptions,partners,notifiers,notifications,login and adapters. 
 *
 * The version of the OpenAPI document: V3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { InlineResponse2007Result } from './inline-response2007-result';

/**
 * 
 * @export
 * @interface InlineResponse2007
 */
export interface InlineResponse2007 {
    /**
     * 
     * @type {Array<InlineResponse2007Result>}
     * @memberof InlineResponse2007
     */
    'Result'?: Array<InlineResponse2007Result>;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2007
     */
    'TotalCount'?: number | null;
}
