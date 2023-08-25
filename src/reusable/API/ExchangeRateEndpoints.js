import { BaseAPIURL } from "./base";

/**
 * Endpoint to search for ExchangeRate by name or code.
 * @param {string} query [required]
 * @returns {string} urlpath
 *///*///http://192.168.0.48:5100/ExchangeRate/All?filter=ghs
 //http://192.168.0.48:5100/ExchangeRate/All?filter=gha&page=1&results=1&orderBy=1&sortOrder=1
 //http://192.168.0.48:5100/ExchangeRate/exchange-rates?companyReference=00001_A08
//http://192.168.0.48:5100/Currencies/exchange-rates?companyReference=00001_A08


// export const SearchExchangeRate= (companyReference) => `${BaseAPIURL}Currencies/exchange-rates?companyReference=${companyReference}`;
export const SearchExchangeRate= (companyReference) => `Currencies/exchange-rates?companyReference=${companyReference}`;


export const SearchCompanyCurrencyByNameorCode = () =>`{BaseAPIURL}`

/**
* Endpoint to get details for ExchangeRate if it exist.
* @param {string} ExchangeRateId [required]
* @returns {string} urlpath
*/
// export const GetExchangeRateDetailsByExchangeRateId = (ExchangeRateId) => `${BaseAPIURL}ExchangeRate/${ExchangeRateId}`
export const GetExchangeRateDetailsByExchangeRateId = (ExchangeRateId) => `ExchangeRate/${ExchangeRateId}`;;

/**
* Endpoint to create a new ExchangeRate for a company.
* @returns {string} urlpath
http://192.168.0.48:5100/ExchangeRate

*/
// export const PostExchangeRates = () => `${BaseAPIURL}ExchangeRate`;
export const PostExchangeRates = () => `ExchangeRate`;

/**
* Endpoint to update a company ExchangeRate by companyExchangeRateId.
* @param {string} companyExchangeRateId [required]
* @returns {string} urlpath
*/
// export const PutExchangeRate = (companyExchangeRateId) => `${BaseAPIURL}ExchangeRate/${companyExchangeRateId}`;
export const PutExchangeRate = (companyExchangeRateId) => `ExchangeRate/${companyExchangeRateId}`;

/**
* Endpoint to search for company ExchangeRate by name or code.
* @param {string} companyReference [required]
* @param {number} pageNumber [optional]
* @param {number} numberOfItems [optional]
* @param {string} orderBy [optional]
* @param {string} sortOrder [optional]
* @returns {string} urlpath
*/////http://192.168.0.48:5100/Currencies/exchange-rates?companyReference=00001_A01&page=1&results=1&orderBy=1&sortOrder=1
//http://192.168.0.48:5100/Currencies?companyReference=00001_A01&filter=dol&page=1&results=1&orderBy=1&sortOrder=1

export const GetAllExchangeRate = (companyReference, pageNumber, numberOfItems, orderBy, sortOrder) => 
`Currencies/exchange-rates?companyReference=${companyReference}&page=${pageNumber}&results=${numberOfItems}&orderBy=${orderBy}&sortOrder=${sortOrder}`;

// export const GetAllExchangeRate = (companyReference, pageNumber, numberOfItems, orderBy, sortOrder) => 
// `${BaseAPIURL}Currencies/exchange-rates?companyReference=${companyReference}&page=${pageNumber}&results=${numberOfItems}&orderBy=${orderBy}&sortOrder=${sortOrder}`;


/**
 * Endpoint to search for ExchangeRate by name or code.
 * @param {string} query [required]
 * @param {number} pageNumber [optional]
 * @param {number} numberOfItems [optional]
 * @param {string} orderBy [optional]
 * @param {string} sortOrder [optional]
 * @returns {string}  urlpath
 */
export const SearchInternalExchangeRate = (query) => `ExchangeRate/All?Filter=${query}`;
// export const SearchInternalExchangeRate = (query) => `${BaseAPIURL}ExchangeRate/All?Filter=${query}`;

/**
 * Endpoint to get the current payperiod for the ex.
 * http://192.168.0.48:5100/Currencies/pay-period?companyReference=00001_A08

 * @param {string} companyReference [required]
http://192.168.0.48:5100/Currencies/pay-period?companyReference=00001_A01
 * @returns {string} urlpath
 *///http://192.168.0.48:5100/Currencies/pay-period?companyReference=00001_A01
 //http://192.168.0.48:5100/Currencies/pay-period?companyReference=00001_A01
 export const GetPayPeriod = (companyReference) => `Currencies/pay-period?companyReference=${companyReference}`;
//  export const GetPayPeriod = (companyReference) => `${BaseAPIURL}Currencies/pay-period?companyReference=${companyReference}`;
//http://192.168.0.48:5100/Loans/00001_A01/GLAccounts

export const GetGLAccounts = (companyReference) => `Loans/${companyReference}/GLAccounts`;
// export const GetGLAccounts = (companyReference) => `${BaseAPIURL}Loans/${companyReference}/GLAccounts`;
 /**
* Endpoint to create a new exchange rate for a company ExchangeRate.
* @returns {string} urlpath
*///http://192.168.0.48:5100/ExchangeRate/exchange-rate
export const PostExchangeRate = () => `ExchangeRate/exchange-rate`;
// export const PostExchangeRate = () => `${BaseAPIURL}ExchangeRate/exchange-rate`;

/**
 * Endpoint to search for Exchange Rate by company ExchangeRate id.
 * @param {string} companyExchangeRateId [required]
 * @param {number}pageNumber [optional]
 *  @param {string} query [required]
 * @param {number}numberOfItems [optional]
 * @param {string} orderBy [optional
 * @param {string} sortOrder [optional]
 * @returns {string} urlpath
 *///http://192.168.0.48:5100/Currencies/exchange-rates?companyReference=00001_A01&filter=1&page=1&results=1&orderBy=1&sortOrder=1

 export const SearchExchangeRateByCompExchangeRateId = (companyReference,query, pageNumber, numberOfItems, orderBy, sortOrder) => 
 `Currencies/exchange-rates?companyReference=${companyReference}&filter=${query}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;

//  export const SearchExchangeRateByCompExchangeRateId = (companyReference,query, pageNumber, numberOfItems, orderBy, sortOrder) => 
//  `${BaseAPIURL}Currencies/exchange-rates?companyReference=${companyReference}&filter=${query}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;

 /**
 * Endpoint to get ExchangeRate history 
 * @param {string} companyId [required]
 * @returns {string} urlpath
 */
export const GetExchangeRateLogsByCompanyId = (companyId) => `ExchangeRate/company/logs?CompanyId=${companyId}`;
// export const GetExchangeRateLogsByCompanyId = (companyId) => `${BaseAPIURL}ExchangeRate/company/logs?CompanyId=${companyId}`;

//http://192.168.0.48:5100/Currencies?companyReference=00001_A01

export const SearchExchangeRateByCompCurrency = (companyReference) => `Currencies?companyReference=${companyReference}`;
// export const SearchExchangeRateByCompCurrency = (companyReference) => `${BaseAPIURL}Currencies?companyReference=${companyReference}`;

/**
 * http://192.168.0.48:5100/Currencies/pay-period?companyReference=00001_A01
 */

 export const GetExchangeRateLatestRateByBaseAndQuote = (base, quote) => `ExchangeRate/exchange-rate/${base}/${quote}`;
//  export const GetExchangeRateLatestRateByBaseAndQuote = (base, quote) => `${BaseAPIURL}ExchangeRate/exchange-rate/${base}/${quote}`;
/**
 * Endpoint to get pay period by company Reference
 * * @param {string} companyReference [required]
 * http://192.168.0.48:5100/ExchangeRate/pay-period?companyReference=0000_A03
    http://192.168.0.48:5100/Currencies/exchange-rates?companyReference=00001_A01
 */
///http://192.168.0.48:5100/Currencies/00001_A01/all?isOnlyForeignCurrency=true

export const GetCurrency = (companyReference) => `Currencies/${companyReference}/all?isOnlyForeignCurrency=true`;
// export const GetCurrency = (companyReference) => `${BaseAPIURL}Currencies/${companyReference}/all?isOnlyForeignCurrency=true`;

export const GetAllCurrency = (companyReference) => `Currencies/${companyReference}/all?isOnlyForeignCurrency=false`;
// export const GetAllCurrency = (companyReference) => `${BaseAPIURL}Currencies/${companyReference}/all?isOnlyForeignCurrency=false`;

export const GetHomeCurrency = (companyReference) => `Currencies/${companyReference}/home-currency`;
// export const GetHomeCurrency = (companyReference) => `${BaseAPIURL}Currencies/${companyReference}/home-currency`;

 export const GetCurrenctPayPeriods = (companyReference) => `ExchangeRate/pay-period?companyReference=${companyReference}`;
//  export const GetCurrenctPayPeriods = (companyReference) => `${BaseAPIURL}ExchangeRate/pay-period?companyReference=${companyReference}`;

//http://192.168.0.48:5100/Currencies/00001_A01/exchange-rates
 export const GetAllExchangeRates = (companyReference) => `Currencies/${companyReference}/exchange-rates`;
//  export const GetAllExchangeRates = (companyReference) => `${BaseAPIURL}Currencies/${companyReference}/exchange-rates`;


