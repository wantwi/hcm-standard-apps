import {  BaseAPIURL } from "./base";

/**
 * Endpoint to search for Activity by name or code.
 * @param {string} query [required]
 * @returns {string} urlpath
 *///*///http://192.168.0.48:5100/Activity/All?filter=ghs
 //http://192.168.0.48:5100/Activity/All?filter=gha&page=1&results=1&orderBy=1&sortOrder=1

export const SearchActivityByNameOrCode = (query) => `${BaseAPIURL}Activity/All?filter=${query}`;


/**
* Endpoint to get details for Activity if it exist.
* @param {string} ActivityId [required]
* @returns {string} urlpath
*///http://192.168.0.48:5100/Activities/Activities/3fa85f64-5717-4562-b3fc-2c963f66afa6
export const GetActivityDetailsByActivityId = (ActivityId) => `Activities/Activities/${ActivityId}`;
// export const GetActivityDetailsByActivityId = (ActivityId) => `${BaseAPIURL}Activities/Activities/${ActivityId}`;

/**
* Endpoint to create a new Activity for a company.
* @returns {string} urlpath
http://192.168.0.48:5100/Activities/Activities

*/
export const PostActivity = () => `Activities/Activities`;
// export const PostActivity = () => `${BaseAPIURL}Activities/Activities`;

/**
* Endpoint to update a company Activity by companyActivityId.
* @param {string} companyActivityId [required]
* @returns {string} urlpath

http://192.168.0.48:5100/Activity/3fa85f64-5717-4562-b3fc-2c963f66afa6
*/
export const PutActivity = () => `Activities/Activities`;
// export const PutActivity = () => `${BaseAPIURL}Activities/Activities`;

/**
* Endpoint to search for company Activity by name or code.
* @param {string} companyId [required]
* @param {string} query [required]
* @param {number} pageNumber [optional]
* @param {number} numberOfItems [optional]
* @param {string} orderBy [optional]
* @param {string} sortOrder [optional]
* @returns {string} urlpath
*///http://192.168.0.48:5100/Activities/Activities?filter=test&companyReference=00001_A01&page=1&results=5&orderBy=1&sortOrder=1

export const SearchCompanyActivityByName = (query,companyReference,  pageNumber, numberOfItems, orderBy, sortOrder) => `Activities/Activities?filter=${query}&companyReference=${companyReference}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;
// export const SearchCompanyActivityByName = (query,companyReference,  pageNumber, numberOfItems, orderBy, sortOrder) => `${BaseAPIURL}Activities/Activities?filter=${query}&companyReference=${companyReference}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;

/**
 * Endpoint to search for Activity by name or code.
 * @param {string} query [required]
 * @param {number} pageNumber [optional]
 * @param {number} numberOfItems [optional]
 * @param {string} orderBy [optional]
 * @param {string} sortOrder [optional]
 * @returns {string}  urlpath
 */
export const SearchInternalActivity = (query) => `${BaseAPIURL}Activity/All?Filter=${query}`;


/**
 * Endpoint to get the current payperiod for the ex.
 * http://192.168.0.48:5100/Activity/pay-period?companyReference=00001_A08

 * @param {string} companyReference [required]
 * @returns {string} urlpath
 */
 export const GetPayPeriod = (companyReference) => `${BaseAPIURL}Activity/pay-period?CompanyId=${companyReference}`;

 /**
* Endpoint to create a new exchange rate for a company Activity.
* @returns {string} urlpath
*///http://192.168.0.48:5100/Activity/exchange-rate
export const PostExchangeRate = () => `${BaseAPIURL}Activity/exchange-rate`;

/**
 * Endpoint to search for Exchange Rate by company Activity id.
 * @param {string} companyActivityId [required]
 * @param {number}pageNumber [optional]
 * @param {number}numberOfItems [optional]
 * @param {string} orderBy [optional
 * @param {string} sortOrder [optional]
 * @returns {string} urlpath
 */
 export const SearchExchangeRateByCompActivityId = (companyActivityId, pageNumber, numberOfItems, orderBy, sortOrder) => `${BaseAPIURL}Activity/exchange-rates?companyActivityId=${companyActivityId}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;


 /**
 * Endpoint to get Activity history 
 * @param {string} companyId [required]
 * @returns {string} urlpath
 */
export const GetActivityLogsByCompanyId = (companyId) => `${BaseAPIURL}Activity/company/logs?CompanyId=${companyId}`;


/**
 * Endpoint to get Activity latest exchange Rate
 http://192.168.0.48:5100/Activity/exchange-rate/base/545688/quote/87954
 */

 export const GetActivityLatestRateByBaseAndQuote = (base, quote) => `${BaseAPIURL}Activity/exchange-rate/${base}/${quote}`;
/**
 * Endpoint to get pay period by company Reference
 * * @param {string} companyReference [required]
 * http://192.168.0.48:5100/Activity/pay-period?companyReference=0000_A03

 */

 export const GetCurrenctPayPeriods = (companyReference) => `${BaseAPIURL}Activity/pay-period?companyReference=${companyReference}`;

 //http://192.168.0.48:5100/Activity/00001_A01/aud
 /**
 */

 export const GetCompanyActivity = (companyReference, ActivityCode ) => `Activity/${companyReference}/${ActivityCode }`;
//  export const GetCompanyActivity = (companyReference, ActivityCode ) => `${BaseAPIURL}Activity/${companyReference}/${ActivityCode }`;

//  http://192.168.0.48:5100/CustomTypes/00001_A01/PROJ/all

export const GetAllGeneralLedgersBycompanyReference = (companyReference) => `Earnings/${companyReference}/GLAccounts`

export const GetProjectByCompanyReference = (companyReference, type) => `CustomTypes/${companyReference}/${type}/all`;
// export const GetProjectByCompanyReference = (companyReference, type) => `${BaseAPIURL}CustomTypes/${companyReference}/${type}/all`;

//GetProjectByCompanyReference