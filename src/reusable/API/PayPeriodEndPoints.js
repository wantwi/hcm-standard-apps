import { BaseAPIURL } from "./base";

//http://192.168.0.48:5100/Organisation/Payperiods?companyReference=1&filter=1&page=1&results=1&orderBy=1&sortOrder=1

/**
* Endpoint to search for company Salary Grade by name or code.
* @param companyReference [required]
* @param query [required]
* @param pageNumber [optional]
* @param numberOfItems [optional]
* @param orderBy [optional]
* @param sortOrder [optional]
* @returns urlpath
*///http://192.168.0.48:5100/Organisation/Payperiods?companyReference=00001_A01&filter=1&page=1&results=1&orderBy=1&sortOrder=1
// export const SearchPayperiodByNameOrCode = (companyReference, query, pageNumber, numberOfItems, orderBy, sortOrder) => `${BaseAPIURL}Organisation/Payperiods?companyReference=00001_A01&Filter=${query}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;
export const SearchPayperiodByNameOrCode = (companyReference, query, pageNumber, numberOfItems, orderBy, sortOrder) => `Organisation/Payperiods?companyReference=00001_A01&Filter=${query}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;
// 

/**
* Endpoint to get details for salary grade if it exist by salary grade ID.
* @param PayperiodId [required]
* @returns urlpath
//http://192.168.0.48:5100/Periods/pay-periods?year=2022&companyReference=00001_A01
*/
// export const GetPayperiodDetailsByPayperiodId = (companyReference) => `${BaseAPIURL}Periods/pay-periods?year=2022&companyReference=${companyReference}`;
export const GetPayperiodDetailsByPayperiodId = (companyReference) => `Periods/pay-periods?year=2022&companyReference=${companyReference}`;

//http://192.168.0.48:5100/Organisation/GLAccounts/F9475BB6-D10F-4161-9268-B6DD827A3CDF 
/**
 * Endpoint to get all general ledgers added in it's setup.
 * @param companyReference [required]
 * @returns urlpath
 * http://192.168.0.48:5100/Organisation/GLAccounts/00001_A01

 *///actionTypehttp://192.168.0.48:5100/Employees/GenericTypes/ESP
//  export const GetPayrollAction = (type) => `${BaseAPIURL}Employees/GenericTypes/${type}`;
 export const GetPayrollAction = (type) => `Employees/GenericTypes/${type}`;
 
///http://192.168.0.48:5100/Employees/GenericTypes/IDT
//  export const GetPayrollActionType = (type) => `${BaseAPIURL}Employees/GenericTypes/${type}`;
 export const GetPayrollActionType = (type) => `Employees/GenericTypes/${type}`;


//http://192.168.0.48:5100/Periods/pay-periods?year=2022&companyReference=00001_A01
//  export const GetAllPayPeriodsByYearAndCOmpanyReference = (year, companyReference) => `${BaseAPIURL}Periods/pay-periods?year=${year}&companyReference=${companyReference}`
 export const GetAllPayPeriodsByYearAndCOmpanyReference = (year, companyReference) => `Periods/pay-periods?year=${year}&companyReference=${companyReference}`



/** 
* Endpoint to create a new Salary Grade.
* @returns urlpath
*///http://192.168.0.48:5100/Organisation/Payperiods
// export const PostPayperiod = () => `${BaseAPIURL}Organisation/Payperiods`;
export const PostPayperiod = () => `Organisation/Payperiods`;


/**
* Endpoint to update a salary grade with salaryGradeId.
* @param PayperiodId [required]
* @returns urlpath
*///http://192.168.0.48:5100/Organisation/Payperiods
// export const PutPayperiod = () => `${BaseAPIURL}Organisation/Payperiods`;
export const PutPayperiod = () => `Organisation/Payperiods`;

/**
 * Endpoint to search for orgs by name or code.
 * @param companyId [required]
 * @param type [required]
 * @param query [required]
 * @returns urlpath
 */
//  export const SearchPayperiodByNameOrCodeUsingType = (companyId, type, query) => `${BaseAPIURL}Organisation/${companyId}/${type}/filter?filter=${query}`;
 export const SearchPayperiodByNameOrCodeUsingType = (companyId, type, query) => `Organisation/${companyId}/${type}/filter?filter=${query}`;


 //http://192.168.0.48:5100/Organisation/Payperiods/Logs?PayperiodId=b70682a3-17c1-4001-b98a-2376b308d761&companyReference=00001_A01&page=1&results=1&orderBy=1&sortOrder=1

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
*///http://192.168.0.48:5100/Organisation/Payperiods?companyReference=00001_A01&filter=1&page=1&results=1&orderBy=1&sortOrder=1
//http://192.168.0.48:5100/Organisation/Payperiods/Logs?PayperiodId=b70682a3-17c1-4001-b98a-2376b308d761&companyReference=00001_A01&page=1&results=1&orderBy=1&sortOrder=1
// export const GetOrgDetailsHistoryByOrgId = (PayperiodId,companyReference, pageNumber, numberOfItems, orderBy, sortOrder) => `${BaseAPIURL}Organisation/Payperiods/Logs?PayperiodId=${PayperiodId}&companyReference=00001_A01`;
export const GetOrgDetailsHistoryByOrgId = (PayperiodId,companyReference, pageNumber, numberOfItems, orderBy, sortOrder) => `Organisation/Payperiods/Logs?PayperiodId=${PayperiodId}&companyReference=00001_A01`;

// export const GetPayPeriodsByYear=(year)=>`${BaseAPIURL}Periods/pay-periods?year=${year}&companyReference=00001_a01`
export const GetPayPeriodsByYear=(year,companyReference)=>`Periods/pay-periods?year=${year}&companyReference=${companyReference}`

// export const Years=()=>`${BaseAPIURL}Periods/years`
export const Years=()=>`Periods/years`

// export const UpdatePayPeriods =()=>`${BaseAPIURL}Periods/pay-periods`
export const UpdatePayPeriods =()=>`Periods/pay-periods`
