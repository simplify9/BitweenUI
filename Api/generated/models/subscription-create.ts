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



/**
 * 
 * @export
 * @interface SubscriptionCreate
 */
export interface SubscriptionCreate {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionCreate
     */
    'Name'?: string;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionCreate
     */
    'DocumentId'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionCreate
     */
    'Type'?: SubscriptionCreateTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionCreate
     */
    'PartnerId'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionCreate
     */
    'AggregationForId'?: number | null;
}

/**
    * @export
    * @enum {string}
    */
export enum SubscriptionCreateTypeEnum {
    Unknown = 'Unknown',
    Internal = 'Internal',
    ApiCall = 'ApiCall',
    Receiving = 'Receiving',
    Aggregation = 'Aggregation'
}

