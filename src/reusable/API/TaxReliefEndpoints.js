import { BaseAPIURL } from "./base";

/**
 * Endpoint to search for TaxReliefby name or code.
 * @param {string} query [required]
 * @returns {string} urlpath
 *///*///http://192.168.0.48:5100/TaxRelief/All?filter=ghs
 //http://192.168.0.48:5100/TaxRelief/All?filter=gha&page=1&results=1&orderBy=1&sortOrder=1
 //http://192.168.0.48:5100/TaxRelief?companyReference=00001_A01
 

 //http://192.168.0.48:5100/TaxRelief/All

// export const SearchTaxReliefByName = (companyReference) => `${BaseAPIURL}TaxRelief?companyReference=${companyReference}`;
export const SearchTaxReliefByName = (companyReference) => `TaxRelief?companyReference=${companyReference}`;


/**
* Endpoint to get details for TaxReliefif it exist.
* @param {string} currencyId [required]
* @returns {string} urlpath
*///http://192.168.0.48:5100/Taxes/TaxReliefTypes/e435967f-8218-45fa-9939-f376255430ed
//http://192.168.0.48:5100/Taxes/TaxReliefTypes/e435967f-8218-45fa-9939-f376255430ed
export const GetTaxReliefDetailsByTaxReliefId = (TaxReliefId) => `Taxes/TaxReliefTypes/${TaxReliefId}`;
// export const GetTaxReliefDetailsByTaxReliefId = (TaxReliefId) => `${BaseAPIURL}Taxes/TaxReliefTypes/${TaxReliefId}`;

/**
* Endpoint to create a new TaxRelieffor a company.
* @returns {string} urlpath
http://192.168.0.48:5100/TaxRelief
//http://192.168.0.48:5100/Taxes/TaxReliefs

*///http://192.168.0.48:5100/Taxes/TaxReliefTypes

export const PostTaxRelief= () => `Taxes/TaxReliefTypes`;
// export const PostTaxRelief= () => `${BaseAPIURL}Taxes/TaxReliefTypes`;

/**
* Endpoint to update a company TaxReliefby companyCurrencyId.
* @param {string} companyCurrencyId [required]
* @returns {string} urlpath
//http://192.168.0.48:5100/Taxes/TaxReliefTypes
**/
export const PutTaxRelief= () => `Taxes/TaxReliefTypes`;
// export const PutTaxRelief= () => `${BaseAPIURL}Taxes/TaxReliefTypes`;

export const GetCurrencies = (companyReference) => `Taxes/${companyReference}/Currencies`;
// export const GetCurrencies = (companyReference) => `${BaseAPIURL}Taxes/${companyReference}/Currencies`;

/**
* Endpoint to search for company TaxRelief by name or code.
* @param {string} companyReference [required]
* @param {string} query [required]
* @param {number} pageNumber [optional]
* @param {number} numberOfItems [optional]
* @param {string} orderBy [optional]
* @param {string} sortOrder [optional]
* @returns {string} urlpath
*/
//http://192.168.0.48:5100/Taxes/TaxReleifTypes?filter=TAR&companyReference=00001_A01&page=1&results=5&orderBy=1&sortOrder=1

export const SearchTaxReliefByNameOrCode = ( query,companyReference, pageNumber, numberOfItems, orderBy, sortOrder) =>
 `Taxes/TaxReleifTypes?Filter=${query}&companyReference=${companyReference}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;

//  export const SearchTaxReliefByNameOrCode = ( query,companyReference, pageNumber, numberOfItems, orderBy, sortOrder) =>
//  `${BaseAPIURL}Taxes/TaxReleifTypes?Filter=${query}&companyReference=${companyReference}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;


 export const GetCompanyTaxRelief= (companyReference, currencyCode ) => `TaxRelief/${companyReference}/${currencyCode }`;
//  export const GetCompanyTaxRelief= (companyReference, currencyCode ) => `${BaseAPIURL}TaxRelief/${companyReference}/${currencyCode }`;
//http://192.168.0.48:5100/Taxes/TaxReliefs/drop-down?countryCode=GH

 //http://192.168.0.48:5100/Taxes/GH/TaxTables
//  export const GetTaxRelief = (countryCode) => `${BaseAPIURL}Taxes/TaxReliefs/drop-down?countryCode=${countryCode}`;
 export const GetTaxRelief = (countryCode) => `Taxes/TaxReliefs/drop-down?countryCode=${countryCode}`;


 //http://192.168.0.48:5100/Employees/GenericTypes/BAS
 export const GetBasis = (type) => `Employees/GenericTypes/${type}`;
//  export const GetBasis = (type) => `${BaseAPIURL}Employees/GenericTypes/${type}`;

 export const GetTaxReliefTypeById =()=>`Taxes/TaxReliefTypes/34c170cd-40d0-4372-818a-26fd260c0b52`
//  export const GetTaxReliefTypeById =()=>`${BaseAPIURL}Taxes/TaxReliefTypes/34c170cd-40d0-4372-818a-26fd260c0b52`