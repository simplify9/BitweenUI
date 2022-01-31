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
import { InlineResponse200PromotedProperties } from './inline-response200-promoted-properties';
import { ModelBoolean } from './model-boolean';

/**
 * 
 * @export
 * @interface InlineResponse2003Result
 */
export interface InlineResponse2003Result {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2003Result
     */
    'Id'?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2003Result
     */
    'DocumentName'?: string;
    /**
     * 
     * @type {ModelBoolean}
     * @memberof InlineResponse2003Result
     */
    'IsRunning'?: ModelBoolean;
    /**
     * 
     * @type {ModelBoolean}
     * @memberof InlineResponse2003Result
     */
    'Inactive'?: ModelBoolean;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2003Result
     */
    'HandlerId'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2003Result
     */
    'MapperId'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2003Result
     */
    'ReceiverId'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2003Result
     */
    'ValidatorId'?: string;
    /**
     * 
     * @type {ModelBoolean}
     * @memberof InlineResponse2003Result
     */
    'Temporary'?: ModelBoolean;
    /**
     * 
     * @type {Array<InlineResponse200PromotedProperties>}
     * @memberof InlineResponse2003Result
     */
    'HandlerProperties'?: Array<InlineResponse200PromotedProperties>;
    /**
     * 
     * @type {Array<InlineResponse200PromotedProperties>}
     * @memberof InlineResponse2003Result
     */
    'ValidatorProperties'?: Array<InlineResponse200PromotedProperties>;
    /**
     * 
     * @type {Array<InlineResponse200PromotedProperties>}
     * @memberof InlineResponse2003Result
     */
    'MapperProperties'?: Array<InlineResponse200PromotedProperties>;
    /**
     * 
     * @type {Array<InlineResponse200PromotedProperties>}
     * @memberof InlineResponse2003Result
     */
    'ReceiverProperties'?: Array<InlineResponse200PromotedProperties>;
    /**
     * 
     * @type {Array<InlineResponse200PromotedProperties>}
     * @memberof InlineResponse2003Result
     */
    'DocumentFilter'?: Array<InlineResponse200PromotedProperties>;
    /**
     * 
     * @type {Array<InlineResponse2003Schedules>}
     * @memberof InlineResponse2003Result
     */
    'Schedules'?: Array<InlineResponse2003Schedules>;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2003Result
     */
    'ResponseSubscriptionId'?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2003Result
     */
    'ResponseMessageTypeName'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2003Result
     */
    'ReceiveOn'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2003Result
     */
    'AggregateOn'?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2003Result
     */
    'ConsecutiveFailures'?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2003Result
     */
    'LastException'?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2003Result
     */
    'AggregationTarget'?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2003Result
     */
    'PausedOn'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2003Result
     */
    'Name'?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2003Result
     */
    'DocumentId'?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2003Result
     */
    'Type'?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2003Result
     */
    'PartnerId'?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2003Result
     */
    'AggregationForId'?: number;
}
