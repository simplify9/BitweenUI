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


import { ModelBoolean } from './model-boolean';

/**
 * 
 * @export
 * @interface NotificationsSearch
 */
export interface NotificationsSearch {
    /**
     * 
     * @type {number}
     * @memberof NotificationsSearch
     */
    'Id'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof NotificationsSearch
     */
    'XchangeId'?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationsSearch
     */
    'NotifierName'?: string;
    /**
     * 
     * @type {ModelBoolean}
     * @memberof NotificationsSearch
     */
    'Success'?: ModelBoolean | null;
    /**
     * 
     * @type {string}
     * @memberof NotificationsSearch
     */
    'Exception'?: string;
    /**
     * 
     * @type {object}
     * @memberof NotificationsSearch
     */
    'FinishedOn'?: object | null;
}
