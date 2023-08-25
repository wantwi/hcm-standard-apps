import { BaseAPIURL } from "./base";

/**
 * Endpoint to search for currency by name or code.
 * @param {string} query [required]
 * @returns {string} urlpath
 *///*///http://192.168.0.48:5100/Currencies/All?filter=ghs
 //http://192.168.0.48:5100/Currencies/All?filter=gha&page=1&results=1&orderBy=1&sortOrder=1
 //http://192.168.0.48:5100/Currencies?companyReference=00001_A01
 

 //http://192.168.0.48:5100/Currencies/All

export const SearchCurrenciesByName = (companyReference) => `Currencies?companyReference=${companyReference}`;
// export const SearchCurrenciesByName = (companyReference) => `${BaseAPIURL}Currencies?companyReference=${companyReference}`;


/**
* Endpoint to get details for currency if it exist.
* @param {string} currencyId [required]
* @returns {string} urlpath
*/
// export const GetCurrencyDetailsByCurrencyId = (currencyId) => `${BaseAPIURL}Currencies/${currencyId}`;
export const GetCurrencyDetailsByCurrencyId = (currencyId) => `Currencies/${currencyId}`;

/**
* Endpoint to create a new currency for a company.
* @returns {string} urlpath
http://192.168.0.48:5100/Currencies

*/
// export const PostCurrency = () => `${BaseAPIURL}Currencies`;
export const PostCurrency = () => `Currencies`;

/**
* Endpoint to update a company currency by companyCurrencyId.
* @param {string} companyCurrencyId [required]
* @returns {string} urlpath

http://192.168.0.48:5100/Currencies/3fa85f64-5717-4562-b3fc-2c963f66afa6
*/
// export const PutCurrency = () => `${BaseAPIURL}Currencies`;
export const PutCurrency = () => `Currencies`;

/**
* Endpoint to search for company currencies by name or code.
* @param {string} companyId [required]
* @param {string} query [required]
* @param {number} pageNumber [optional]
* @param {number} numberOfItems [optional]
* @param {string} orderBy [optional]
* @param {string} sortOrder [optional]
* @returns {string} urlpath
*///http://192.168.0.48:5100/Currencies/All?filter=ghs
//http://192.168.0.48:5100/Currencies?companyReference=00001_A01&filter=1&page=1&results=1&orderBy=1&sortOrder=1
// export const SearchCompanyCurrenciesByNameOrCode = (companyReference, query, pageNumber, numberOfItems, orderBy, sortOrder) => `${BaseAPIURL}Currencies?companyReference=${companyReference}&Filter=${query}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;
export const SearchCompanyCurrenciesByNameOrCode = (companyReference, query, pageNumber, numberOfItems, orderBy, sortOrder) => `Currencies?companyReference=${companyReference}&Filter=${query}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;

/**
 * Endpoint to search for currency by name or code.
 * @param {string} query [required]
 * @param {number} pageNumber [optional]
 * @param {number} numberOfItems [optional]
 * @param {string} orderBy [optional]
 * @param {string} sortOrder [optional]
 * @returns {string}  urlpath
 *///http://192.168.0.48:5100/Currencies/All?filter=1&page=1&results=1&orderBy=1&sortOrder=1
//http://192.168.0.48:5100/Currencies/All

// export const SearchInternalCurrencies = (query, pageNumber, numberOfItems, orderBy, sortOrder) => `${BaseAPIURL}Currencies/All?filter=${query}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;
export const SearchInternalCurrencies = (query, pageNumber, numberOfItems, orderBy, sortOrder) => `Currencies/All?filter=${query}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;


/**
 * Endpoint to get the current payperiod for the ex.
 * http://192.168.0.48:5100/Currencies/pay-period?companyReference=00001_A08

 * @param {string} companyReference [required]
 * @returns {string} urlpath
 */
//  export const GetPayPeriod = (companyReference) => `${BaseAPIURL}Currencies/pay-period?CompanyId=${companyReference}`;
 export const GetPayPeriod = (companyReference) => `Currencies/pay-period?CompanyId=${companyReference}`;

 /**
* Endpoint to create a new exchange rate for a company currency.
* @returns {string} urlpath
*///http://192.168.0.48:5100/Currencies/exchange-rate
//http://192.168.0.48:5100/Currencies/exchange-rate
// export const PostExchangeRate = () => `${BaseAPIURL}Currencies/exchange-rate`;
export const PostExchangeRate = () => `Currencies/exchange-rate`;

/**
 * Endpoint to search for Exchange Rate by company currency id.
 * @param {string} companyCurrencyId [required]
 * @param {number}pageNumber [optional]
 * @param {number}numberOfItems [optional]
 * @param {string} orderBy [optional
 * @param {string} sortOrder [optional]
 * @returns {string} urlpath
 */
//  export const SearchExchangeRateByCompCurrencyId = (companyCurrencyId, pageNumber, numberOfItems, orderBy, sortOrder) => `${BaseAPIURL}Currencies/exchange-rates?companyCurrencyId=${companyCurrencyId}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;
 export const SearchExchangeRateByCompCurrencyId = (companyCurrencyId, pageNumber, numberOfItems, orderBy, sortOrder) => `Currencies/exchange-rates?companyCurrencyId=${companyCurrencyId}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;


 /**
 * Endpoint to get currency history 
 * @param {string} companyId [required]
 * @returns {string} urlpath
 */
// export const GetCurrencyLogsByCompanyId = (companyId) => `${BaseAPIURL}Currencies/company/logs?CompanyId=${companyId}`;
export const GetCurrencyLogsByCompanyId = (companyId) => `Currencies/company/logs?CompanyId=${companyId}`;


/**
 * Endpoint to get currency latest exchange Rate
 http://192.168.0.48:5100/Currencies/exchange-rate/base/545688/quote/87954
 */

//  export const GetCurrencyLatestRateByBaseAndQuote = (base, quote) => `${BaseAPIURL}Currencies/exchange-rate/${base}/${quote}`;

 export const GetCurrencyLatestRateByBaseAndQuote = (base, quote) => `Currencies/exchange-rate/${base}/${quote}`;

/**
 * Endpoint to get pay period by company Reference
 * * @param {string} companyReference [required]
 * http://192.168.0.48:5100/Currencies/pay-period?companyReference=0000_A03

 */

//  export const GetExchangeRate = (companyReference,  pageNumber, numberOfItems, orderBy, sortOrder) => `${BaseAPIURL}Currencies/exchange-rates?companyReference=${companyReference}&page=${pageNumber}&results=${numberOfItems}&orderBy=${orderBy}&sortOrder=${sortOrder}`;
 export const GetExchangeRate = (companyReference,  pageNumber, numberOfItems, orderBy, sortOrder) => `Currencies/exchange-rates?companyReference=${companyReference}&page=${pageNumber}&results=${numberOfItems}&orderBy=${orderBy}&sortOrder=${sortOrder}`;

//  export const GetCurrenctPayPeriods = (companyReference) => `${BaseAPIURL}Currencies/pay-period?companyReference=${companyReference}`;
 export const GetCurrenctPayPeriods = (companyReference) => `Currencies/pay-period?companyReference=${companyReference}`;

 //http://192.168.0.48:5100/Currencies/00001_A01/aud
 /**
  * http://192.168.0.48:5100/Currencies/00001_A01/AUD
 */

//  export const GetCompanyCurrency = (companyReference, currencyCode ) => `${BaseAPIURL}Currencies/${companyReference}/${currencyCode }`;
 export const GetCompanyCurrency = (companyReference, currencyCode ) => `Currencies/${companyReference}/${currencyCode }`;
