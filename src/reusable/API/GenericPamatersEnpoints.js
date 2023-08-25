import { BaseAPIURL } from "./base";

/**
 * Endpoint to search for GenericParameters by name or code.
 * @param {string} query [required]
 * @returns {string} urlpath
 *///*///http://192.168.0.48:5100/GenericParameters/All?filter=ghs
 //http://192.168.0.48:5100/GenericParameters/All?filter=gha&page=1&results=1&orderBy=1&sortOrder=1

export const SearchGenericParametersByNameOrCode = (query) => `GenericParameters/All?filter=${query}`;
// export const SearchGenericParametersByNameOrCode = (query) => `${BaseAPIURL}GenericParameters/All?filter=${query}`;


/**
* Endpoint to get details for GenericParameters if it exist.
* @param {string} GenericParametersId [required]
* @returns {string} urlpath
*///http://192.168.0.48:5100/CustomTypes/543d0c2e-9fd2-42f7-9ba4-2511fd6b9099
export const GetGenericParametersDetailsByGenericParametersId = (GenericParametersId) => `CustomTypes/${GenericParametersId}`;
// export const GetGenericParametersDetailsByGenericParametersId = (GenericParametersId) => `${BaseAPIURL}CustomTypes/${GenericParametersId}`;

/**
* Endpoint to create a new GenericParameters for a company.
* @returns {string} urlpath
http://192.168.0.48:5100/CustomTypes


*/
export const PostGenericParameters = () => `CustomTypes`;
// export const PostGenericParameters = () => `${BaseAPIURL}CustomTypes`;

/**
* Endpoint to update a company GenericParameters by companyGenericParametersId.
* @param {string} companyGenericParametersId [required]
* @returns {string} urlpath

http://192.168.0.48:5100/GenericParameters/3fa85f64-5717-4562-b3fc-2c963f66afa6
*/
export const PutGenericParameters = () => `CustomTypes`;
// export const PutGenericParameters = () => `${BaseAPIURL}CustomTypes`;

/**
* Endpoint to search for company GenericParameters by name or code.
* @param {string} companyId [required]
* @param {string} query [required]
* @param {number} pageNumber [optional]
* @param {number} numberOfItems [optional]
* @param {string} orderBy [optional]
* @param {string} sortOrder [optional]
* @returns {string} urlpath
*///http://192.168.0.48:5100/CustomTypes/all?filter=nan&type=TITLE&companyReference=00001_A01&page=1&results=5&orderBy=1&sortOrder=1

export const SearchCompanyGenericParametersByNameorCode = (query, type, companyReference,  pageNumber, numberOfItems, orderBy, sortOrder) => `CustomTypes/all?filter=${query}&type=${type}&companyReference=${companyReference}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;
// export const SearchCompanyGenericParametersByNameorCode = (query, type, companyReference,  pageNumber, numberOfItems, orderBy, sortOrder) => `${BaseAPIURL}CustomTypes/all?filter=${query}&type=${type}&companyReference=${companyReference}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;

/**
 * Endpoint to search for GenericParameters by name or code.
 * @param {string} query [required]
 * @param {number} pageNumber [optional]
 * @param {number} numberOfItems [optional]
 * @param {string} orderBy [optional]
 * @param {string} sortOrder [optional]
 * @returns {string}  urlpath
 */
export const SearchInternalGenericParameters = (query) => `${BaseAPIURL}GenericParameters/All?Filter=${query}`;


/**
 * Endpoint to get the current payperiod for the ex.
 * http://192.168.0.48:5100/GenericParameters/pay-period?companyReference=00001_A08

 * @param {string} companyReference [required]
 * @returns {string} urlpath
 */
 export const GetPayPeriod = (companyReference) => `${BaseAPIURL}GenericParameters/pay-period?CompanyId=${companyReference}`;

 /**
* Endpoint to create a new exchange rate for a company GenericParameters.
* @returns {string} urlpath
*///http://192.168.0.48:5100/GenericParameters/exchange-rate
export const PostExchangeRate = () => `${BaseAPIURL}GenericParameters/exchange-rate`;

/**
 * Endpoint to search for Exchange Rate by company GenericParameters id.
 * @param {string} companyGenericParametersId [required]
 * @param {number}pageNumber [optional]
 * @param {number}numberOfItems [optional]
 * @param {string} orderBy [optional
 * @param {string} sortOrder [optional]
 * @returns {string} urlpath
 */
 export const SearchExchangeRateByCompGenericParametersId = (companyGenericParametersId, pageNumber, numberOfItems, orderBy, sortOrder) => `${BaseAPIURL}GenericParameters/exchange-rates?companyGenericParametersId=${companyGenericParametersId}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;


 /**
 * Endpoint to get GenericParameters history 
 * @param {string} companyId [required]
 * @returns {string} urlpath
 */
export const GetGenericParametersLogsByCompanyId = (companyId) => `${BaseAPIURL}GenericParameters/company/logs?CompanyId=${companyId}`;


/**
 * Endpoint to get GenericParameters latest exchange Rate
 http://192.168.0.48:5100/GenericParameters/exchange-rate/base/545688/quote/87954
 */

 export const GetGenericParametersLatestRateByBaseAndQuote = (base, quote) => `${BaseAPIURL}GenericParameters/exchange-rate/${base}/${quote}`;
/**
 * Endpoint to get pay period by company Reference
 * * @param {string} companyReference [required]
 * http://192.168.0.48:5100/GenericParameters/pay-period?companyReference=0000_A03

 */

 export const GetCurrenctPayPeriods = (companyReference) => `${BaseAPIURL}GenericParameters/pay-period?companyReference=${companyReference}`;

 //http://192.168.0.48:5100/GenericParameters/00001_A01/aud
 /**
 */

 export const GetCompanyGenericParameters = (companyReference, GenericParametersCode ) => `${BaseAPIURL}GenericParameters/${companyReference}/${GenericParametersCode }`;