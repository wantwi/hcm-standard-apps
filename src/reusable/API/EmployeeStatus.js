import { BaseAPIURL } from "./base";

//http://192.168.0.48:5100/Organisation/EmployeeStatuss?companyReference=1&filter=1&page=1&results=1&orderBy=1&sortOrder=1

/**
* Endpoint to search for company Salary Grade by name or code.
* @param companyReference [required]
* @param query [required]
* @param pageNumber [optional]
* @param numberOfItems [optional]
* @param orderBy [optional]
* @param sortOrder [optional]
* @returns urlpath
*///http://192.168.0.48:5100/Pays/PayrollAction?companyReference=00001_A01&filter=act&page=1&results=5&orderBy=1&sortOrder=1
// export const SearchEmployeeStatusByNameOrCode = (companyReference, query, pageNumber, numberOfItems, orderBy, sortOrder) =>
//  `${BaseAPIURL}Pays/PayrollAction?companyReference=${companyReference}&Filter=${query}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;

 export const SearchEmployeeStatusByNameOrCode = (companyReference, query, pageNumber, numberOfItems, orderBy, sortOrder) =>
 `Pays/PayrollAction?companyReference=${companyReference}&Filter=${query}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;


/**
* Endpoint to get details for salary grade if it exist by salary grade ID.
* @param EmployeeStatusId [required]
* @returns urlpath
*///http://192.168.0.48:5100/Pays/PayrollAction/b099b936-cdf5-4763-fb2c-08da8a7718ac
// export const GetEmployeeStatusDetailsByEmployeeStatusId = (EmployeeStatusId) => `${BaseAPIURL}Pays/PayrollAction/${EmployeeStatusId}`;
export const GetEmployeeStatusDetailsByEmployeeStatusId = (EmployeeStatusId) => `Pays/PayrollAction/${EmployeeStatusId}`;

//http://192.168.0.48:5100/Organisation/GLAccounts/F9475BB6-D10F-4161-9268-B6DD827A3CDF 
/**
 * Endpoint to get all general ledgers added in it's setup.
 * @param companyReference [required]
 * @returns urlpath
 * http://192.168.0.48:5100/Organisation/GLAccounts/00001_A01

 *///actionTypehttp://192.168.0.48:5100/Employees/GenericTypes/ESP
//  export const GetPayrollAction = (type) => `${BaseAPIURL}Employees/GenericTypes/${type}`;
 export const GetPayrollAction = (type) => `Employees/GenericTypes/${type}`;
 
// ///http://192.168.0.48:5100/Employees/GenericTypes/IDT
//  export const GetPayrollActionType = (type) => `${BaseAPIURL}Employees/GenericTypes/${type}`;
 export const GetPayrollActionType = (type) => `Employees/GenericTypes/${type}`;

//  export const GetAllGeneralLedgersBycompanyReference = (companyReference) => `${BaseAPIURL}Organisation/GLAccounts/${companyReference}`
 export const GetAllGeneralLedgersBycompanyReference = (companyReference) => `Organisation/GLAccounts/${companyReference}`

/**
* Endpoint to create a new Salary Grade.
* @returns urlpath
*///http://192.168.0.48:5100/Pays/PayrollAction
// export const PostEmployeeStatus = () => `${BaseAPIURL}Pays/PayrollAction`;
export const PostEmployeeStatus = () => `Pays/PayrollAction`;

/**
* Endpoint to update a salary grade with salaryGradeId.
* @param EmployeeStatusId [required]
* @returns urlpath
*///http://192.168.0.48:5100/Employees/EmployeeStatus
// export const PutEmployeeStatus = () => `${BaseAPIURL}Pays/PayrollAction`;
export const PutEmployeeStatus = () => `Pays/PayrollAction`;

/**
 * Endpoint to search for orgs by name or code.
 * @param companyId [required]
 * @param type [required]
 * @param query [required]
 * @returns urlpath
 */
//  export const SearchEmployeeStatusByNameOrCodeUsingType = (companyId, type, query) => `${BaseAPIURL}Organisation/${companyId}/${type}/filter?filter=${query}`;
 export const SearchEmployeeStatusByNameOrCodeUsingType = (companyId, type, query) => `${BaseAPIURL}Organisation/${companyId}/${type}/filter?filter=${query}`;

 //http://192.168.0.48:5100/Organisation/EmployeeStatuss/Logs?EmployeeStatusId=b70682a3-17c1-4001-b98a-2376b308d761&companyReference=00001_A01&page=1&results=1&orderBy=1&sortOrder=1

 /**
 * Endpoint to get all Org Details history by orgId.
 * @param orgId [required]
 * @returns urlpath
 */
//export const GetOrgDetailsHistoryByOrgId = (orgId) => `${BaseAPIURL}Logs/${orgId}/org-details`;

/**
* Endpoint to search for company Salary Grade by name or code.
* @param companyReference [required]
* @param query [required]
* @param pageNumber [optional]
* @param numberOfItems [optional]
* @param orderBy [optional]
* @param sortOrder [optional]
* @returns urlpath
*///http://192.168.0.48:5100/Organisation/EmployeeStatuss?companyReference=00001_A01&filter=1&page=1&results=1&orderBy=1&sortOrder=1
//http://192.168.0.48:5100/Organisation/EmployeeStatuss/Logs?EmployeeStatusId=b70682a3-17c1-4001-b98a-2376b308d761&companyReference=00001_A01&page=1&results=1&orderBy=1&sortOrder=1
// export const GetOrgDetailsHistoryByOrgId = (EmployeeStatusId,companyReference, pageNumber, numberOfItems, orderBy, sortOrder) => `${BaseAPIURL}Organisation/EmployeeStatuss/Logs?EmployeeStatusId=${EmployeeStatusId}&companyReference=00001_A01`;
export const GetOrgDetailsHistoryByOrgId = (EmployeeStatusId,companyReference, pageNumber, numberOfItems, orderBy, sortOrder) => `Organisation/EmployeeStatuss/Logs?EmployeeStatusId=${EmployeeStatusId}&companyReference=00001_A01`;
