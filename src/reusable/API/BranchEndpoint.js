import { BaseAPIURL } from "./base";

/**

* To search for 
* @returns {string} urlpath
*/

export const GetBranchs = () => `${BaseAPIURL}Branchs`;

//http://192.168.0.48:5100/Banks/Branches?filter=Ecobank&companyReference=00001_A01&page=1&results=5&orderBy=1&sortOrder=1
export const SearchBranchByNameOrCode = ( query, companyReference, pageNumber, numberOfItems, orderBy, sortOrder) => 
`${BaseAPIURL}Banks/Branches?filter=${query}&companyReference=${companyReference}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;


/**
* Endpoint to get details for Branch if it exist.
* @param BranchId [required]
* @returns urlpath
*///http://192.168.0.48:5100/Banks/Branches/1513e9d4-1ec7-4e6b-d773-08da79323ac8

export const GetBranchDetailsByBranchId = (BranchId) => `${BaseAPIURL}Banks/Branches/${BranchId}`;


/**
* Endpoint to create a new Branch.
* @returns urlpath
*///http://192.168.0.48:5100/Branchs
//http://192.168.0.48:5100/Banks/Branches
export const PostBranch = () => `${BaseAPIURL}Banks/Branches`;

/**
* Endpoint to update a Branch with salaryGradeId.
* @param BranchId [required]
* @returns urlpath
*///http://192.168.0.48:5100/Banks/Branches
//http://192.168.0.48:5100/Banks/Branches
export const PutBranch = () => `${BaseAPIURL}Banks/Branches`;


///http://192.168.0.48:5100/Banks/GH
export const GetBanksByCountryCode = (countryCode) => `${BaseAPIURL}Banks/${countryCode}`

