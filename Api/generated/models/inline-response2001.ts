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


import { ModelObject } from './model-object';

/**
 * 
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
    /**
     * 
     * @type {ModelObject}
     * @memberof InlineResponse2001
     */
    'Comparer'?: ModelObject;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2001
     */
    'Count'?: number | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof InlineResponse2001
     */
    'Keys'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof InlineResponse2001
     */
    'Values'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001
     */
    'Item'?: string;
}

