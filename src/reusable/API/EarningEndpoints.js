import { BaseAPIURL } from "./base";

/**
* To search for 
* @returns {string} urlpath

http://192.168.0.48:5100/Earnings/all?companyReference=00001_A01
http://192.168.0.48:5100/Earnings/filter?filter=1234&companyReference=00001_A01
*/
export const GetEarnings = (companyReference) => `Earnings/all?companyReference=${companyReference}`;
// export const GetEarnings = (companyReference) => `${BaseAPIURL}Earnings/all?companyReference=${companyReference}`;
/**
* Endpoint to get details for earning if it exist.
* @param earningId [required]
* @returns urlpath

http://192.168.0.48:5100/Earnings/3fa85f64-5717-4562-b3fc-2c963f66afa6
http://192.168.0.48:5100/Earnings/22c75cca-5d12-4318-a989-169a29525f8c
//http://192.168.0.48:5100/Earnings/22c75cca-5d12-4318-a989-169a29525f8c

*/
export const GetEarningsDetailsByEarningId = (earningId) => `Earnings/${earningId}`;
// export const GetEarningsDetailsByEarningId = (earningId) => `${BaseAPIURL}Earnings/${earningId}`;
//http://192.168.0.48:5100/Earnings/all?companyReference=00001_A01


/**
* Endpoint to create a new deduction.
* @returns urlpath
http://192.168.0.48:5100/Earnings

earningId
*/
// export const PostEarning = () => `${BaseAPIURL}Earnings`;
export const PostEarning = () => `Earnings`;

/**
* Get All Employees.
* @returns {string} urlpath
*/
export const GetAllEmployees = () => `Employees/00001_A01`;
//export const GetAllEmployees = () => `${BaseAPIURL}Employees/00001_a01`;


/**
* Endpoint to update a Earning with earningId.

http://192.168.0.48:5100/Earnings/3fa85f64-5717-4562-b3fc-2c963f66afa6
* @param earningId [required]
* @returns urlpath
*/
// export const PutEarning = () => `${BaseAPIURL}Earnings`;
export const PutEarning = () => `Earnings`;

/**
* Endpoint to search for company Salary Grade by name or code.
* @param companyReference [required]
* @param query [required]
* @param pageNumber [optional]
* @param numberOfItems [optional]
* @param orderBy [optional]
* @param sortOrder [optional]

http://192.168.0.48:5100/Earnings/all?companyReference=00001_A01&page=1&results=1&orderBy=1&sortOrder=1
* @returns urlpath
http://192.168.0.48:5100/Earnings/all?companyReference=00001_A01
*///http://192.168.0.48:5100/Earnings/filter?filter=1234&companyReference=00001_A01
//http://192.168.0.48:5100/Earnings?filter=EARN&companyReference=00001_A01&page=1&results=5&orderBy=1&sortOrder=1

// export const SearchEarningByNameOrCode = (query,companyReference,  pageNumber, numberOfItems, orderBy, sortOrder) => 
// `${BaseAPIURL}Earnings?filter=${query}&companyReference=${companyReference}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;

export const SearchEarningByNameOrCode = (query,companyReference,  pageNumber, numberOfItems, orderBy, sortOrder) => `Earnings?filter=${query}&companyReference=${companyReference}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;

//http://192.168.0.48:5100/Organisation/GLAccounts/F9475BB6-D10F-4161-9268-B6DD827A3CDF 
/**
 * Endpoint to get all general ledgers added in it's setup.
 * @param companyReference [required]
 * @returns urlpath
 *///http://192.168.0.48:5100/Earnings/00001_A01/GLAccounts
 export const GetAllGeneralLedgersBycompanyReference = (companyReference) => `Earnings/${companyReference}/GLAccounts`

//  export const GetAllGeneralLedgersBycompanyReference = (companyReference) => `${BaseAPIURL}Earnings/${companyReference}/GLAccounts`

 export const GetAllDep = (companyReference) =>`http://192.168.0.48:5100/Organisation/Departments/all?companyReference=${companyReference}`

//http://192.168.0.48:5100/Employees/00001_A01/Organysations/EMT
//http://192.168.0.48:5100/Earnings/00001_A01/Orgs/DEP

//  export const GetOrgSegemntByTypeAndCompanyReference = (companyReference,type) => `${BaseAPIURL}Earnings/${companyReference}/Orgs/${type}`
 export const GetOrgSegemntByTypeAndCompanyReference = (companyReference,type) => `Earnings/${companyReference}/Orgs/${type}`

 
///http://192.168.0.48:5100/Pays/GenericTypes/BAS
export const GetBasicType = (type) => `Pays/GenericTypes/${type}`
// export const GetBasicType = (type) => `${BaseAPIURL}Pays/GenericTypes/${type}`

 export const GetAllEarningType = (type) => `Employees/GenericTypes/${type}`
//  export const GetAllEarningType = (type) => `${BaseAPIURL}Employees/GenericTypes/${type}`

 export const GetFrequency = (type) => `Employees/GenericTypes/${type}`
//  export const GetFrequency = (type) => `${BaseAPIURL}Employees/GenericTypes/${type}`

 export const GetStatus = (type) => `Employees/GenericTypes/${type}`
//  export const GetStatus = (type) => `${BaseAPIURL}Employees/GenericTypes/${type}`

 //http://192.168.0.48:5100/Earnings/fd7b70d1-6563-4a0f-92e8-08da70aa8685/ledgers

//  export const GetEarningLedgerByDeductionId = (companyReference) => `${BaseAPIURL}Earnings/${companyReference}/ledgers`
 export const GetEarningLedgerByEarningId = (companyReference) => `Earnings/${companyReference}/ledgers`