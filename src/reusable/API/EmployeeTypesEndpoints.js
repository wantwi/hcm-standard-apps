import { BaseAPIURL } from "./base";

//http://192.168.0.48:5100/Organisation/EmployeeTypess?companyReference=1&filter=1&page=1&results=1&orderBy=1&sortOrder=1

/**
* Endpoint to search for company Salary Grade by name or code.
* @param companyReference [required]
* @param query [required]
* @param pageNumber [optional]
* @param numberOfItems [optional]
* @param orderBy [optional]
* @param sortOrder [optional]
* @returns urlpath
*/
export const SearchEmployeeTypesByNameOrCode = (companyReference, query, pageNumber, numberOfItems, orderBy, sortOrder) => `Organisation/EmployeeTypes?companyReference=${companyReference}&Filter=${query}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;
// export const SearchEmployeeTypesByNameOrCode = (companyReference, query, pageNumber, numberOfItems, orderBy, sortOrder) => `${BaseAPIURL}Organisation/EmployeeTypes?companyReference=${companyReference}&Filter=${query}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;




/**
* Endpoint to get details for salary grade if it exist by salary grade ID.
* @param EmployeeTypesId [required]
* @returns urlpath
http://192.168.0.48:5100/Organisation/EmployeeTypes/82b03341-cf9c-4eec-8625-846a3aaa899f
//http://192.168.0.48:5100/Organisation/EmployeeTypess/3fa85f64-5717-4562-b3fc-2c963f66afa6
*/
export const GetEmployeeTypesDetailsByEmployeeTypesId = (EmployeeTypesId) => `Organisation/EmployeeTypes/${EmployeeTypesId}`;
// export const GetEmployeeTypesDetailsByEmployeeTypesId = (EmployeeTypesId) => `${BaseAPIURL}Organisation/EmployeeTypes/${EmployeeTypesId}`;

/**
* Endpoint to get details for salary grade if it exist by salary grade ID.
* @param companyReference [required]
* @returns urlpath
//http://192.168.0.48:5100/Organisation/Divisions/3fa85f64-5717-4562-b3fc-2c963f66afa6
*///http://192.168.0.48:5100/Organisation/Locations/all?companyReference=00001_A01

export const GetAllLocationsByCompanyReference = (companyReference) => `Organisation/Locations/all?companyReference=${companyReference}`;
// export const GetAllLocationsByCompanyReference = (companyReference) => `${BaseAPIURL}Organisation/Locations/all?companyReference=${companyReference}`;

//http://192.168.0.48:5100/Organisation/GLAccounts/F9475BB6-D10F-4161-9268-B6DD827A3CDF 
/**
 * Endpoint to get all general ledgers added in it's setup.
 * @param companyReference [required]
 * @returns urlpath
 */
 export const GetAllGeneralLedgersBycompanyReference = (companyReference) => `Organisation/GLAccounts/${companyReference}`
//  export const GetAllGeneralLedgersBycompanyReference = (companyReference) => `${BaseAPIURL}Organisation/GLAccounts/${companyReference}`

/**
* Endpoint to create a new Salary Grade.
* @returns urlpath
http://192.168.0.48:5100/Organisation/EmployeeTypes

*///http://192.168.0.48:5100/Organisation/EmployeeTypess
export const PostEmployeeTypes = () => `Organisation/EmployeeTypes`;
// export const PostEmployeeTypes = () => `${BaseAPIURL}Organisation/EmployeeTypes`;

/**
* Endpoint to update a salary grade with salaryGradeId.
* @param EmployeeTypesId [required]
* @returns urlpath
*///http://192.168.0.48:5100/Organisation/EmployeeTypess
export const PutEmployeeTypes = () => `Organisation/EmployeeTypes`;
// export const PutEmployeeTypes = () => `${BaseAPIURL}Organisation/EmployeeTypes`;

/**
 * Endpoint to search for orgs by name or code.
 * @param companyId [required]
 * @param type [required]
 * @param query [required]
 * @returns urlpath
 */
 export const SearchEmployeeTypesByNameOrCodeUsingType = (companyId, type, query) => `${BaseAPIURL}Organisation/${companyId}/${type}/filter?filter=${query}`;


 /**
* Endpoint to search for company Salary Grade by name or code.
* @param companyReference [required]
* @param query [required]
* @param pageNumber [optional]
* @param numberOfItems [optional]
* @param orderBy [optional]
* @param sortOrder [optional]
* @returns urlpath
*///http://192.168.0.48:5100/Organisation/EmployeeTypes/Logs?employeeTypeId=08da0c1b-fe4e-4c7f-9f6f-2db6444d187e&companyReference=00001_A01
export const GetEmployeeTypesDetailsHistoryByCompanyReferenceAndEmployeeID = (employeeTypeId,companyReference, pageNumber, numberOfItems, orderBy, sortOrder) => `${BaseAPIURL}Organisation/EmployeeTypes/Logs?employeeTypeId=${employeeTypeId}&companyReference=${companyReference}`;
