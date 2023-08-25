import { CompanyReference } from "../utils/helper";
import { BaseAPIURL } from "./base";

/**
* Endpoint to get Currencies 
* @returns {string} urlpath
http://192.168.0.48:5100/Loans/00001_A01/Currencies

*/
// export const GetAllCurrencies = (companyReference) => `${BaseAPIURL}Loans/${companyReference}/Currencies`;
export const GetAllCurrencies = (companyReference) => `Loans/${companyReference}/Currencies`;


/**
* Endpoint to get  GL Accounts.
http://192.168.0.48:5100/Loans/00001_A01/GLAccounts

* @returns {string} urlpath
*/
// export const GetGLAccounts = (companyReference) => `${BaseAPIURL}Loans/${companyReference}/GLAccounts`;
export const GetGLAccounts = (companyReference) => `Loans/${companyReference}/GLAccounts`;

/**
* Endpoint to get  GL Accounts.
 * @param {string} query [required]
 * 
 * http://192.168.0.48:5100/Loans?filter=loa&companyReference=00001_A01

* @returns {string} urlpath
*/
// export const GetAllLoans = (query,companyReference) => `${BaseAPIURL}Loans?Filter=${query}&companyReference=${companyReference}`;
export const GetAllLoans = (query,companyReference) => `Loans?Filter=${query}&companyReference=${companyReference}`;

/**
* Endpoint to get details for currency if it exist.
* @param loanId [required]

http://192.168.0.48:5100/Loans/6fa43ce5-0220-4eca-9cea-185b5117506a

* @returns urlpath
*/
// export const GetLoanDetailsByLoanId = (loanId) => `${BaseAPIURL}Loans/${loanId}`;
export const GetLoanDetailsByLoanId = (loanId) => `Loans/${loanId}`;


/**
* Endpoint to create a new loan.
* @returns {string} urlpath
*/
// export const PostLoan = () => `${BaseAPIURL}Loans`
export const PostLoan = () => `Loans`



/**
* Endpoint to update a company currency by companyCurrencyId.
* @param {string} loanId [required]
* @returns {string} urlpath
*/
// export const PutLoans = () => `${BaseAPIURL}Loans`;
export const PutLoans = () => `Loans`;


/**
* Endpoint to search for Loans by name or code.
* @param {string} query [required]
* @param {number} pageNumber [optional]
* @param {number} numberOfItems [optional]
* @param {string} orderBy [optional]
* @param {string} sortOrder [optional]
* @returns {string} urlpath
*/
//http://psl-linux:5100/Loans?filter=loa&companyReference=00001_A01&page=1&results=5&orderBy=1&sortOrder=1

export const SearchLoanByNameOrCode = (query,companyReference, pageNumber, numberOfItems, orderBy, sortOrder) => `Loans?Filter=${query}&companyReference=${companyReference}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;

// export const SearchLoanByNameOrCode = (query, pageNumber, numberOfItems, orderBy, sortOrder) => `${BaseAPIURL}Loans?Filter=${query}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;


// export const GetAllDep = (companyReference) =>`http://192.168.0.48:5100/Organisation/Departments/all?companyReference=${companyReference}`
export const GetAllDep = (companyReference) =>`Organisation/Departments/all?companyReference=${companyReference}`

// export const GetOrgSegemntByTypeAndCompanyReference = (companyReference,type) => `${BaseAPIURL}Loans/${companyReference}/Orgs/${type}`

export const GetOrgSegemntByTypeAndCompanyReference = (companyReference,type) => `Loans/${companyReference}/Orgs/${type}`
