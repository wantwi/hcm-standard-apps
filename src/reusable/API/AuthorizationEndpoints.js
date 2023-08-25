//import { BaseAPIURL } from "./base";
const BaseAPIURL = ""
const COMPANY_ID ="ED07487D-6EB0-4EC6-B27C-8EF5097B2B0A" //"C50D869E-92FD-4688-B6D6-B22E5E012625"
// const BaseAPIURL = "http://psl-linux:5100/"
/**
* Get All Companies.
* @param  [required]
* @returns urlpath
*/
export const GetAllCompanies = () => `Companies`;

/**
* Get All Applications.
* @param  [required]
* @returns urlpath
*/
export const GetAllApplications = () => `Applications`;

/**
* Get All Applications.
* @param  [required]
* @returns urlpath
*/
export const GetAllSegments = (accId = COMPANY_ID) => `Segments/Account/${accId}`;
export const GetAllNonSegments  = (accId = COMPANY_ID) => `Segments/NonAccount/${accId}`;
export const SegmentUrl = "Segments/Account"
/**
* Get All Applications.
* @param  [required]
* @returns urlpath
*/
export const GetSegmentItemsByID = (id, accId = "C50D869E-92FD-4688-B6D6-B22E5E012625") => `Segments/Items/${id}/${accId}`;
//http://192.168.0.48:5100/Segments/Items/153bd127-bbe9-48c3-a622-232c90360e5a/All/00001_a01
/**
* Get All Applications.
* @param  [required]
* @returns urlpath
*/
export const GetMenusByAppID = (id) => `Menus/app/${id}`;

/**
* Post Groups.
* @param  [required]
* @returns urlpath
*/
export const PostGroups = (id) => `Groups`;
export const PutGroups  = (id) => `Groups`;

export const PostUser = (id) => `Users`;
/**
* Get All Groups.
* @param  [required]
* @returns urlpath
*/
export const GetAllGroups = () => `Groups`;

export const GetAccountGroups = (accId = COMPANY_ID) => `Groups/all?acountId=${accId}`;

/**
* Get All Groups By Id.
* @param  [required]
* @returns urlpath
*/
export const GetAllGroupById = (id) => `Groups/${id}`;

export const GetAllUsersById = (id) => `Users/${id}`;


//http://192.168.0.48:5100/Groups/all?acountId=ed07487d-6eb0-4ec6-b27c-8ef5097b2b0a&filter=002
/**
* Get All Groups By Id.
* @param  [required]
* @returns urlpath
*/
export const searchGroups = (companyReference, query, pageNumber, numberOfItems, orderBy, sortOrder) => `Groups/all?acountId=ed07487d-6eb0-4ec6-b27c-8ef5097b2b0a&filter=${query}`;

export const searchUsers = (companyReference, query, pageNumber, numberOfItems, orderBy, sortOrder) => `Users?accountId=ED07487D-6EB0-4EC6-B27C-8EF5097B2B0A&filter=${query}`;

// export const searchUsers = (companyReference, query, pageNumber, numberOfItems, orderBy, sortOrder) => `${BaseAPIURL}Users`;

