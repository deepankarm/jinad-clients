/**
 * JinaD (Daemon)
 * REST interface for managing distributed Jina
 *
 * The version of the OpenAPI document: 0.9.32
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { StoreItemStatus } from './storeItemStatus';

export class StoreStatus {
    'size': number;
    'timeCreated': Date;
    'timeUpdated': Date;
    'numAdd': number;
    'numDel': number;
    'items': { [key: string]: StoreItemStatus; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "timeCreated",
            "baseName": "time_created",
            "type": "Date"
        },
        {
            "name": "timeUpdated",
            "baseName": "time_updated",
            "type": "Date"
        },
        {
            "name": "numAdd",
            "baseName": "num_add",
            "type": "number"
        },
        {
            "name": "numDel",
            "baseName": "num_del",
            "type": "number"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "{ [key: string]: StoreItemStatus; }"
        }    ];

    static getAttributeTypeMap() {
        return StoreStatus.attributeTypeMap;
    }
}

