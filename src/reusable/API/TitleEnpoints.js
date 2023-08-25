import { BaseAPIURL } from "./base";

/**
 * Endpoint to search for Title by name or code.
 * @param {string} query [required]
 * @returns {string} urlpath
 *///*///http://192.168.0.48:5100/Title/All?filter=ghs
 //http://192.168.0.48:5100/Title/All?filter=gha&page=1&results=1&orderBy=1&sortOrder=1

export const SearchTitleByNameOrCode = (query) => `Title/All?filter=${query}`;
// export const SearchTitleByNameOrCode = (query) => `${BaseAPIURL}Title/All?filter=${query}`;


/**
* Endpoint to get details for Title if it exist.
* @param {string} TitleId [required]
* @returns {string} urlpath
*///http://192.168.0.48:5100/CustomTypes/543d0c2e-9fd2-42f7-9ba4-2511fd6b9099
export const GetTitleDetailsByTitleId = (TitleId) => `CustomTypes/${TitleId}`;
// export const GetTitleDetailsByTitleId = (TitleId) => `${BaseAPIURL}CustomTypes/${TitleId}`;

/**
* Endpoint to create a new Title for a company.
* @returns {string} urlpath
http://192.168.0.48:5100/CustomTypes


*/
export const PostTitle = () => `Employees/Titles`;
// export const PostTitle = () => `${BaseAPIURL}CustomTypes`;

/**
* Endpoint to update a company Title by companyTitleId.
* @param {string} companyTitleId [required]
* @returns {string} urlpath

http://192.168.0.48:5100/Title/3fa85f64-5717-4562-b3fc-2c963f66afa6
*/
export const PutTitle = () => `CustomTypes`;
// export const PutTitle = () => `${BaseAPIURL}CustomTypes`;

/**
* Endpoint to search for company Title by name or code.
* @param {string} companyId [required]
* @param {string} query [required]
* @param {number} pageNumber [optional]
* @param {number} numberOfItems [optional]
* @param {string} orderBy [optional]
* @param {string} sortOrder [optional]
* @returns {string} urlpath
*///http://192.168.0.48:5100/CustomTypes/all?filter=nan&type=TITLE&companyReference=00001_A01&page=1&results=5&orderBy=1&sortOrder=1

export const SearchCompanyTitleByNameorCode = (query, type, companyReference,  pageNumber, numberOfItems, orderBy, sortOrder) => `CustomTypes/all?filter=${query}&type=${type}&companyReference=${companyReference}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;
// export const SearchCompanyTitleByNameorCode = (query, type, companyReference,  pageNumber, numberOfItems, orderBy, sortOrder) => `${BaseAPIURL}CustomTypes/all?filter=${query}&type=${type}&companyReference=${companyReference}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;

/**
 * Endpoint to search for Title by name or code.
 * @param {string} query [required]
 * @param {number} pageNumber [optional]
 * @param {number} numberOfItems [optional]
 * @param {string} orderBy [optional]
 * @param {string} sortOrder [optional]
 * @returns {string}  urlpath
 */
export const SearchInternalTitle = (query) => `${BaseAPIURL}Title/All?Filter=${query}`;


/**
 * Endpoint to get the current payperiod for the ex.
 * http://192.168.0.48:5100/Title/pay-period?companyReference=00001_A08

 * @param {string} companyReference [required]
 * @returns {string} urlpath
 */
 export const GetPayPeriod = (companyReference) => `${BaseAPIURL}Title/pay-period?CompanyId=${companyReference}`;

 /**
* Endpoint to create a new exchange rate for a company Title.
* @returns {string} urlpath
*///http://192.168.0.48:5100/Title/exchange-rate
export const PostExchangeRate = () => `${BaseAPIURL}Title/exchange-rate`;

/**
 * Endpoint to search for Exchange Rate by company Title id.
 * @param {string} companyTitleId [required]
 * @param {number}pageNumber [optional]
 * @param {number}numberOfItems [optional]
 * @param {string} orderBy [optional
 * @param {string} sortOrder [optional]
 * @returns {string} urlpath
 */
 export const SearchExchangeRateByCompTitleId = (companyTitleId, pageNumber, numberOfItems, orderBy, sortOrder) => `${BaseAPIURL}Title/exchange-rates?companyTitleId=${companyTitleId}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;


 /**
 * Endpoint to get Title history 
 * @param {string} companyId [required]
 * @returns {string} urlpath
 */
export const GetTitleLogsByCompanyId = (companyId) => `${BaseAPIURL}Title/company/logs?CompanyId=${companyId}`;


/**
 * Endpoint to get Title latest exchange Rate
 http://192.168.0.48:5100/Title/exchange-rate/base/545688/quote/87954
 */

 export const GetTitleLatestRateByBaseAndQuote = (base, quote) => `${BaseAPIURL}Title/exchange-rate/${base}/${quote}`;
/**
 * Endpoint to get pay period by company Reference
 * * @param {string} companyReference [required]
 * http://192.168.0.48:5100/Title/pay-period?companyReference=0000_A03

 */

 export const GetCurrenctPayPeriods = (companyReference) => `${BaseAPIURL}Title/pay-period?companyReference=${companyReference}`;

 //http://192.168.0.48:5100/Title/00001_A01/aud
 /**
 */

 export const GetCompanyTitle = (companyReference, TitleCode ) => `${BaseAPIURL}Title/${companyReference}/${TitleCode }`;