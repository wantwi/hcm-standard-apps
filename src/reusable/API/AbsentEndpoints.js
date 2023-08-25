import {  BaseAPIURL } from "./base";

/**
 * Endpoint to search for Absent by name or code.
 * @param {string} query [required]
 * @returns {string} urlpath
 *///*////Absent/All?filter=ghs
 ///Absent/All?filter=gha&page=1&results=1&orderBy=1&sortOrder=1

export const SearchAbsentByNameOrCode = (query) => `/Absent/All?filter=${query}`;


/**
* Endpoint to get details for Absent if it exist.
* @param {string} AbsentId [required]
* @returns {string} urlpath
*///Absents/3fa85f64-5717-4562-b3fc-2c963f66afa6
export const GetAbsentDetailsByAbsentId = (AbsentId) => `Absents/${AbsentId}`;
// export const GetAbsentDetailsByAbsentId = (AbsentId) => `${BaseAPIURL}Absent/Absent/${AbsentId}`;


///Absents/3fa85f64-5717-4562-b3fc-2c963f66afa6
export const GetAbsentById = (absentId) => `Absents/${absentId}`

export const GetDeductionByCompanyRef = (companyReference) => `/Deductions/${companyReference}/all`
/**
* Endpoint to create a new Absent for a company.
* @returns {string} urlpath
Absents

*///https://api-personax.persolcloud.com/Absents
export const PostAbsent = () => `Absents`;
// export const PostAbsent = () => `${BaseAPIURL}Absent/Absent`;

/**
* Endpoint to update a company Absent by companyAbsentId.
* @param {string} companyAbsentId [required]
* @returns {string} urlpath

/Absent/3fa85f64-5717-4562-b3fc-2c963f66afa6
*/
export const PutAbsent = () => `Absents`;
// export const PutAbsent = () => `${BaseAPIURL}Absent/Absent`;

/**
* Endpoint to search for company Absent by name or code.
* @param {string} companyId [required]
* @param {string} query [required]
* @param {number} pageNumber [optional]
* @param {number} numberOfItems [optional]
* @param {string} orderBy [optional]
* @param {string} sortOrder [optional]
* @returns {string} urlpath
*///Absents?filter=test&companyReference=00001_A01&page=1&results=5&orderBy=1&sortOrder=1;
export const SearchCompanyAbsentByName = (query,companyReference,  pageNumber, numberOfItems, orderBy, sortOrder) => 
`Absents?filter=${query}&companyReference=${companyReference}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;
// export const SearchCompanyAbsentByName = (query,companyReference,  pageNumber, numberOfItems, orderBy, sortOrder) => `${BaseAPIURL}Absent/Absent?filter=${query}&companyReference=${companyReference}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;


 /**
 * Endpoint to get Absent history 
 * @param {string} companyId [required]
 * @returns {string} urlpath
 *///
// export const GetDeductionByCompanyRef = (companyId) => `/Absent/company/logs?CompanyId=${companyId}`;

export const GetAbsentLogsByCompanyId = (companyId) => `/Absent/company/logs?CompanyId=${companyId}`;
//  /CustomTypes/00001_A01/PROJ/all

export const GetAbsentTypeByCompanyReference = (companyReference, type) => `CustomTypes/${companyReference}/${type}/all`;
// export const GetProjectByCompanyReference = (companyReference, type) => `${BaseAPIURL}CustomTypes/${companyReference}/${type}/all`;

//GetProjectByCompanyReference