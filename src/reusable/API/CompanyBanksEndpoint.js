import { BaseAPIURL } from "./base";

/**

* To search for 
* @returns {string} urlpath
*/

export const GetCompanyBanks = () => `${BaseAPIURL}CompanyBanks`;


// http://192.168.0.48:5100/CompanyBanks?filter=ded&frequency=1&companyReference=00001_A01&page=1&results=1&orderBy=1&sortOrder=1
//http://192.168.0.48:5100/CompanyBanks?filter=ded&companyReference=00001_A01&page=1&results=1&orderBy=1&sortOrder=1
export const SearchCompanyBankByNameOrCode = ( query, companyReference, pageNumber, numberOfItems, orderBy, sortOrder) => 
`${BaseAPIURL}CompanyBanks?filter=${query}&companyReference=${companyReference}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;


/**
* Endpoint to get details for CompanyBank if it exist.
* @param CompanyBankId [required]
* @returns urlpath
*/
export const GetCompanyBankDetailsByCompanyBankId = (CompanyBankId) => `${BaseAPIURL}CompanyBanks/${CompanyBankId}`;


/**
* Endpoint to create a new CompanyBank.
* @returns urlpath
*///http://192.168.0.48:5100/CompanyBanks

export const PostCompanyBank = () => `${BaseAPIURL}CompanyBanks`;

/**
* Endpoint to update a CompanyBank with salaryGradeId.
* @param CompanyBankId [required]
* @returns urlpath
*///http://192.168.0.48:5100/CompanyBanks
export const PutCompanyBank = () => `${BaseAPIURL}CompanyBanks`;


///http://192.168.0.48:5100/CompanyBanks/00001_A01/GLAccounts
export const GetAllGeneralLedgersBycompanyReference = (companyReference) => `${BaseAPIURL}CompanyBanks/${companyReference}/GLAccounts`
