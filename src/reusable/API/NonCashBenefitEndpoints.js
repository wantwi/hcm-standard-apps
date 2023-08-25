import { BaseAPIURL } from "./base";

/**
 * Endpoint to search for NonCashBenefitby name or code.
 * @param {string} query [required]
 * @returns {string} urlpath
 *///*///http://192.168.0.48:5100/NonCashBenefit/All?filter=ghs
 //http://192.168.0.48:5100/NonCashBenefit/All?filter=gha&page=1&results=1&orderBy=1&sortOrder=1
 //http://192.168.0.48:5100/NonCashBenefit?companyReference=00001_A01
 

 //http://192.168.0.48:5100/NonCashBenefit/All

export const SearchNonCashBenefitByName = (companyReference) => `${BaseAPIURL}NonCashBenefit?companyReference=${companyReference}`;


/**
* Endpoint to get details for NonCashBenefitif it exist.
* @param {string} currencyId [required]
* @returns {string} urlpath
*///http://192.168.0.48:5100/Taxes/NonCashBenefits/63f0ee39-e558-4492-8b36-8a19c387e2cc
//
export const GetNonCashBenefitDetailsByNonCashBenefitId = (NonCashBenefitId) => `${BaseAPIURL}Taxes/NonCashBenefits/${NonCashBenefitId}`;

/**
* Endpoint to create a new NonCashBenefitfor a company.
* @returns {string} urlpath
http://192.168.0.48:5100/NonCashBenefit
//http://192.168.0.48:5100/Taxes/NonCashBenefits

*///Request URL
//http://192.168.0.48:5100/NonCashBenefit/Types
export const PostNonCashBenefit= () => `${BaseAPIURL}NonCashBenefit/Types`;

/**
* Endpoint to update a company NonCashBenefitby companyCurrencyId.
* @param {string} companyCurrencyId [required]
* @returns {string} urlpath
//http://192.168.0.48:5100/Taxes/00001_A01/Currencies
http://192.168.0.48:5100/NonCashBenefit/3fa85f64-5717-4562-b3fc-2c963f66afa6
*///http://192.168.0.48:5100/NonCashBenefit/Types
export const PutNonCashBenefit= () => `${BaseAPIURL}NonCashBenefit/Types`;

/**
* Endpoint to search for company NonCashBenefit by name or code.
* @param {string} companyReference [required]
* @param {string} query [required]
* @param {number} pageNumber [optional]
* @param {number} numberOfItems [optional]
* @param {string} orderBy [optional]
* @param {string} sortOrder [optional]
* @returns {string} urlpath
*///http://192.168.0.48:5100/NonCashBenefit/All?filter=ghs
//http://192.168.0.48:5100/NonCashBenefit/Types?companyReference=00001_A01&filter=non&page=1&results=5&orderBy=1&sortOrder=1

export const SearchNonCashBenefitByNameOrCode = ( companyReference,query, pageNumber, numberOfItems, orderBy, sortOrder) =>
 `${BaseAPIURL}NonCashBenefit/Types?companyReference=${companyReference}&${query}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;


 export const GetCompanyNonCashBenefit= (companyReference, currencyCode ) => `${BaseAPIURL}NonCashBenefit/${companyReference}/${currencyCode }`;


 //http://192.168.0.48:5100/NonCashBenefit/00001_A01/Types
//http://192.168.0.48:5100/NonCashBenefit/00001_A01/Types
 export const GetNonCashBenefitByCompanyReference= (companyReference) => `${BaseAPIURL}NonCashBenefit/${companyReference}/Types`;

 //http://192.168.0.48:5100/NonCashBenefit?countryCode=GH
//  export const GetNonCashBenefitByCountryCode= (CountryCode) => `${BaseAPIURL}NonCashBenefit?countryCode=${CountryCode}`;
 export const GetNonCashBenefitByCountryCode= (CountryCode) => `NonCashBenefit?countryCode=${CountryCode}`;