import { BaseAPIURL } from "./base";

/**

* To search for 
* @returns {string} urlpath
*/

export const GetEmployeeBankss = () => `${BaseAPIURL}EmployeeBankss`;


// http://192.168.0.48:5100/EmployeeBankss?filter=ded&frequency=1&companyReference=00001_A01&page=1&results=1&orderBy=1&sortOrder=1
//http://192.168.0.48:5100/EmployeeBankss?filter=ded&companyReference=00001_A01&page=1&results=1&orderBy=1&sortOrder=1
export const SearchEmployeeBanksByNameOrCode = ( query, companyReference, pageNumber, numberOfItems, orderBy, sortOrder) => 
`${BaseAPIURL}EmployeeBankss?filter=${query}&companyReference=${companyReference}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;


/**
* Endpoint to get details for EmployeeBanks if it exist.
* @param EmployeeBanksId [required]
* @returns urlpath
*/
export const GetEmployeeBanksDetailsByEmployeeBanksId = (EmployeeBanksId) => `${BaseAPIURL}EmployeeBankss/${EmployeeBanksId}`;


/**
* Endpoint to create a new EmployeeBanks.
* @returns urlpath
*///http://192.168.0.48:5100/EmployeeBankss

export const PostEmployeeBanks = () => `${BaseAPIURL}EmployeeBankss`;

/**
* Endpoint to update a EmployeeBanks with salaryGradeId.
* @param EmployeeBanksId [required]
* @returns urlpath
*///http://192.168.0.48:5100/EmployeeBankss
export const PutEmployeeBanks = () => `${BaseAPIURL}EmployeeBankss`;


///http://192.168.0.48:5100/EmployeeBankss/00001_A01/GLAccounts
export const GetAllGeneralLedgersBycompanyReference = (companyReference) => `${BaseAPIURL}EmployeeBankss/${companyReference}/GLAccounts`
