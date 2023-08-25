import { BaseAPIURL } from "./base";

/**
 * Endpoint to search for Gender by name or code.
 * @param {string} query [required]
 * @returns {string} urlpath
 *///*///http://192.168.0.48:5100/Gender/All?filter=ghs
 //http://192.168.0.48:5100/Gender/All?filter=gha&page=1&results=1&orderBy=1&sortOrder=1

export const SearchGenderByNameOrCode = (query) => `${BaseAPIURL}Gender/All?filter=${query}`;


/**
* Endpoint to get details for Gender if it exist.
* @param {string} GenderId [required]
* @returns {string} urlpath
*/
export const GetGenderDetailsByGenderId = (GenderId) => `${BaseAPIURL}Gender/${GenderId}`;

/**
* Endpoint to create a new Gender for a company.
* @returns {string} urlpath
http://192.168.0.48:5100/Gender

*/
export const PostGender = () => `${BaseAPIURL}Gender`;

/**
* Endpoint to update a company Gender by companyGenderId.
* @param {string} companyGenderId [required]
* @returns {string} urlpath

http://192.168.0.48:5100/Gender/3fa85f64-5717-4562-b3fc-2c963f66afa6
*/
export const PutGender = (companyGenderId) => `${BaseAPIURL}Gender/${companyGenderId}`;

/**
* Endpoint to search for company Gender by name or code.
* @param {string} companyId [required]
* @param {string} query [required]
* @param {number} pageNumber [optional]
* @param {number} numberOfItems [optional]
* @param {string} orderBy [optional]
* @param {string} sortOrder [optional]
* @returns {string} urlpath
*///http://192.168.0.48:5100/Gender/All?filter=ghs

export const SearchCompanyGenderByName = (companyId, query, pageNumber, numberOfItems, orderBy, sortOrder) => `${BaseAPIURL}Gender/company/filter?CompanyId=${companyId}&Filter=${query}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;

/**
 * Endpoint to get the current payperiod for the ex.
 * http://192.168.0.48:5100/Gender/pay-period?companyReference=00001_A08

 * @param {string} companyReference [required]
 * @returns {string} urlpath
 */
 export const GetPayPeriod = (companyReference) => `${BaseAPIURL}Gender/pay-period?CompanyId=${companyReference}`;

 /**
* Endpoint to create a new exchange rate for a company Gender.
* @returns {string} urlpath
*///http://192.168.0.48:5100/Gender/exchange-rate
export const PostExchangeRate = () => `${BaseAPIURL}Gender/exchange-rate`;

/**
 * Endpoint to search for Exchange Rate by company Gender id.
 * @param {string} companyGenderId [required]
 * @param {number}pageNumber [optional]
 * @param {number}numberOfItems [optional]
 * @param {string} orderBy [optional
 * @param {string} sortOrder [optional]
 * @returns {string} urlpath
 */
 export const SearchExchangeRateByCompGenderId = (companyGenderId, pageNumber, numberOfItems, orderBy, sortOrder) => `${BaseAPIURL}Gender/exchange-rates?companyGenderId=${companyGenderId}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;


 /**
 * Endpoint to get Gender history 
 * @param {string} companyId [required]
 * @returns {string} urlpath
 */
export const GetGenderLogsByCompanyId = (companyId) => `${BaseAPIURL}Gender/company/logs?CompanyId=${companyId}`;


/**
 * Endpoint to get Gender latest exchange Rate
 http://192.168.0.48:5100/Gender/exchange-rate/base/545688/quote/87954
 */

 export const GetGenderLatestRateByBaseAndQuote = (base, quote) => `${BaseAPIURL}Gender/exchange-rate/${base}/${quote}`;
/**
 * Endpoint to get pay period by company Reference
 * * @param {string} companyReference [required]
 * http://192.168.0.48:5100/Gender/pay-period?companyReference=0000_A03

 */

 export const GetCurrenctPayPeriods = (companyReference) => `${BaseAPIURL}Gender/pay-period?companyReference=${companyReference}`;

 //http://192.168.0.48:5100/Gender/00001_A01/aud
 /**
 */

 export const GetCompanyGender = (companyReference, GenderCode ) => `${BaseAPIURL}Gender/${companyReference}/${GenderCode }`;