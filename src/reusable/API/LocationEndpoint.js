import { BaseAPIURL } from "./base";

//http://192.168.0.48:5100/Organisation/Locations?companyReference=1&filter=1&page=1&results=1&orderBy=1&sortOrder=1

/**
* Endpoint to search for company Salary Grade by name or code.
* @param companyReference [required]
* @param query [required]
* @param pageNumber [optional]
* @param numberOfItems [optional]
* @param orderBy [optional]
* @param sortOrder [optional]
* @returns urlpath
*///http://192.168.0.48:5100/Organisation/Locations?companyReference=00001_A01&filter=1&page=1&results=1&orderBy=1&sortOrder=1
export const SearchLocationByNameOrCode = (companyReference, query, pageNumber, numberOfItems, orderBy, sortOrder) => `Organisation/Locations?companyReference=00001_A01&Filter=${query}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;


/**
* Endpoint to get details for salary grade if it exist by salary grade ID.
* @param locationId [required]
* @returns urlpath
//http://192.168.0.48:5100/Organisation/Locations?companyReference=00001_A01
*/
// export const GetLocationDetailsByLocationId = (locationId) => `${BaseAPIURL}Organisation/Locations/${locationId}`;
export const GetLocationDetailsByLocationId = (locationId) => `Organisation/Locations/${locationId}`;

//http://192.168.0.48:5100/Organisation/GLAccounts/F9475BB6-D10F-4161-9268-B6DD827A3CDF 
/**
 * Endpoint to get all general ledgers added in it's setup.
 * @param companyReference [required]
 * @returns urlpath
 * http://192.168.0.48:5100/Organisation/GLAccounts/00001_A01

 *///
 export const GetAllGeneralLedgersBycompanyReference = (companyReference) => `Organisation/GLAccounts/${companyReference}`
//  export const GetAllGeneralLedgersBycompanyReference = (companyReference) => `${BaseAPIURL}Organisation/GLAccounts/${companyReference}`
/**
* Endpoint to create a new Salary Grade.
* @returns urlpath
*///http://192.168.0.48:5100/Organisation/Locations
// export const PostLocation = () => `${BaseAPIURL}Organisation/Locations`;
export const PostLocation = () => `Organisation/Locations`;

/**
* Endpoint to update a salary grade with salaryGradeId.
* @param locationId [required]
* @returns urlpath
*///http://192.168.0.48:5100/Organisation/Locations
export const PutLocation = () => `Organisation/Locations`;

/**
 * Endpoint to search for orgs by name or code.
 * @param companyId [required]
 * @param type [required]
 * @param query [required]
 * @returns urlpath
 */
 export const SearchLocationByNameOrCodeUsingType = (companyId, type, query) => `${BaseAPIURL}Organisation/${companyId}/${type}/filter?filter=${query}`;

 //http://192.168.0.48:5100/Organisation/Locations/Logs?locationId=b70682a3-17c1-4001-b98a-2376b308d761&companyReference=00001_A01&page=1&results=1&orderBy=1&sortOrder=1

 /**
 * Endpoint to get all Org Details history by orgId.
 * @param orgId [required]
 * @returns urlpath
 */
//export const GetOrgDetailsHistoryByOrgId = (orgId) => `${BaseAPIURL}Logs/${orgId}/org-details`;

/**
* Endpoint to search for company Salary Grade by name or code.
* @param companyReference [required]
* @param query [required]
* @param pageNumber [optional]
* @param numberOfItems [optional]
* @param orderBy [optional]
* @param sortOrder [optional]
* @returns urlpath
*///http://192.168.0.48:5100/Organisation/Locations?companyReference=00001_A01&filter=1&page=1&results=1&orderBy=1&sortOrder=1
//http://192.168.0.48:5100/Organisation/Locations/Logs?locationId=b70682a3-17c1-4001-b98a-2376b308d761&companyReference=00001_A01&page=1&results=1&orderBy=1&sortOrder=1
export const GetOrgDetailsHistoryByOrgId = (locationId,companyReference, pageNumber, numberOfItems, orderBy, sortOrder) => `${BaseAPIURL}Organisation/Locations/Logs?locationId=${locationId}&companyReference=00001_A01`;
