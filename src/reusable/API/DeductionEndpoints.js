import { BaseAPIURL } from "./base";

/**

* To search for 
* @returns {string} urlpath
*/

export const GetDeductions = () => `Deductions`;
// export const GetDeductions = () => `${BaseAPIURL}Deductions`;

export const SearchDeductionByNameOrCode = ( query, companyReference, pageNumber, numberOfItems, orderBy, sortOrder) => `Deductions?filter=${query}&companyReference=${companyReference}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;
// export const SearchDeductionByNameOrCode = ( query, companyReference, pageNumber, numberOfItems, orderBy, sortOrder) => `${BaseAPIURL}Deductions?filter=${query}&companyReference=${companyReference}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;


/**
* Endpoint to get details for deduction if it exist.
* @param deductionId [required]
* @returns urlpath
*/
export const GetDeductionDetailsByDeductionId = (deductionId) => `Deductions/${deductionId}`;
// export const GetDeductionDetailsByDeductionId = (deductionId) => `${BaseAPIURL}Deductions/${deductionId}`;


/**
* Endpoint to create a new deduction.
* @returns urlpath
*///http://192.168.0.48:5100/Deductions

export const PostDeduction = () => `Deductions`;
// export const PostDeduction = () => `${BaseAPIURL}Deductions`;

/**
* Endpoint to update a deduction with salaryGradeId.
* @param deductionId [required]
* @returns urlpath
*///http://192.168.0.48:5100/Deductions
export const PutDeduction = () => `Deductions`;
// export const PutDeduction = () => `${BaseAPIURL}Deductions`;

export const GetOrgSegemntByTypeAndCompanyReference = (companyReference,type) => `Deductions/${companyReference}/Orgs/${type}`
// export const GetOrgSegemntByTypeAndCompanyReference = (companyReference,type) => `${BaseAPIURL}Deductions/${companyReference}/Orgs/${type}`


///http://192.168.0.48:5100/Deductions/00001_A01/GLAccounts
export const GetAllGeneralLedgersBycompanyReference = (companyReference) => `Deductions/${companyReference}/GLAccounts`
// export const GetAllGeneralLedgersBycompanyReference = (companyReference) => `${BaseAPIURL}Deductions/${companyReference}/GLAccounts`

//http://192.168.0.48:5100/Deductions/596e847c-6a83-4876-2324-08da79e3ccda/ledgers

export const GetDeductionLedgerByDeductionId = (deductionId ) => `Deductions/${deductionId}/ledgers`
// export const GetDeductionLedgerByDeductionId = (companyReference) => `${BaseAPIURL}Deductions/${companyReference}/ledgers`

///http://192.168.0.48:5100/Pays/GenericTypes/BAS
export const GetBasicType = (type) => `Pays/GenericTypes/${type}`
// export const GetBasicType = (type) => `${BaseAPIURL}Pays/GenericTypes/${type}`
