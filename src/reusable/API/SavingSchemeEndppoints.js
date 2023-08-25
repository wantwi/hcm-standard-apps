import {BaseAPIURL } from "./base";

/**
* Endpoint to get Currencies 
* @returns {string} urlpath
*/
//http://192.168.0.48:5100/SavingSchemes/00001_A01/Currencies
export const GetAllCurrencies = (companyReference) => `SavingSchemes/${companyReference}/Currencies`;
// export const GetAllCurrencies = (companyReference) => `${BaseAPIURL}SavingSchemes/${companyReference}/Currencies`;

/**
* Endpoint to get  GL Accounts.
* @returns {string} urlpath
*///http://192.168.0.48:5100/SavingSchemes/00001_A01/GLAccounts
// export const GetGLAccounts = (companyReference) => `${BaseAPIURL}SavingSchemes/${companyReference}/GLAccounts`;
export const GetGLAccounts = (companyReference) => `SavingSchemes/${companyReference}/GLAccounts`;

//http://192.168.0.48:5100/SavingSchemes/00001_A01/Types

// export const GetAllSavingsTypes = (countryCode) => `${BaseAPIURL}SavingSchemes/${countryCode}/Types`;
export const GetAllSavingsTypes = (countryCode) => `SavingSchemes/${countryCode}/Types`;
/**
 * Endpoint to create a new saving scheme.
 * @returns {string} urlpath
 */
//  export const PostSavingScheme = () => `${BaseAPIURL}SavingSchemes`;
 export const PostSavingScheme = () => `SavingSchemes`;

 //http://192.168.0.48:5100/SavingSchemes/949e47f9-1d64-4e4f-84b5-8417a235e273
 
 /**
 * Endpoint to update a saving scheme by saving SchemeId.
 * @param {string} {savingSchemeId} [required]
 * @returns {string} urlpath
 *///http://192.168.0.48:5100/SavingSchemes

  // export const PutSavingScheme = () => `${BaseAPIURL}SavingSchemes`;
  export const PutSavingScheme = () => `SavingSchemes`;


  /**
* Endpoint to search for saving Scheme by name or code.
* @param query [required]
* @param pageNumber [optional]
* @param numberOfItems [optional]
* @param orderBy [optional]
* @param sortOrder [optional]
* @returns urlpath
*/

//http://192.168.0.48:5100/SavingSchemes?companyReference=00001_A01&filter=sav&page=1&results=5&orderBy=1&sortOrder=1

export const SearchSavingSchemeByNameOrCode = (companyReference,query, pageNumber, numberOfItems, orderBy, sortOrder) => 
`SavingSchemes?companyReference=${companyReference}&Filter=${query}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;
// export const SearchSavingSchemeByNameOrCode = (companyReference,query, pageNumber, numberOfItems, orderBy, sortOrder) => 
// `${BaseAPIURL}SavingSchemes?companyReference=${companyReference}&Filter=${query}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;



/**
 * http://192.168.0.48:5100/SavingSchemes/949e47f9-1d64-4e4f-84b5-8417a235e273
 * 
* Endpoint to get details for saving scheme if it exist by saving scheme ID.
* @param savingSchemeId  [required]
* @returns urlpath
*/
export const GetSavingSchemeDetailsBySavingSchemeId = (savingSchemeId ) => `${BaseAPIURL}SavingSchemes/${savingSchemeId}`;
// export const GetSavingSchemeDetailsBySavingSchemeId = (savingSchemeId ) => `${BaseAPIURL}SavingSchemes/${savingSchemeId}`;
