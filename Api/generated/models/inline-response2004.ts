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


import { InlineResponse2003Schedules } from './inline-response2003-schedules';

/**
 * 
 * @export
 * @interface InlineResponse2004
 */
export interface InlineResponse2004 {
    /**
     * 
     * @type {Array<InlineResponse2003Schedules>}
     * @memberof InlineResponse2004
     */
    'Result'?: Array<InlineResponse2003Schedules>;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2004
     */
    'TotalCount'?: number | null;
}

