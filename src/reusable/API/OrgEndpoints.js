import { DatausaAPI, BaseAPIURL } from "./base";

export const GetPopulation = () => `${DatausaAPI}?drilldowns=Nation&measures=Population`;

/**
 * Endpoint to create/update orgs.
 * PS: You will have to add {[id]: [orgId]} to the data model when updating 
 * @returns urlpath
 */
export const PostOrganization = () => `${BaseAPIURL}Organisation`;

/**
 * Endpoint to create/update orgs.
 * PS: You will have to add {[id]: [orgId]} to the url when updating 
 * @param orgId [required]
 * @returns urlpath
 */
export const PutOrganization = (orgId) => `${BaseAPIURL}Organisation/${orgId}`;

/**
 * Endpoint to get orgs by the type.
 * @param type [required]
 * @param companyId [required]
 * @returns urlpath
 */
export const GetAllOrganizationByTypeAndCompany = (type, companyId) => `${BaseAPIURL}Organisation/${companyId}/${type}`;

/**
 * Endpoint to get all salary grades added in it's setup.
 * @param companyId [required]
 * @returns urlpath
 */
export const GetAllSalaryGrades = companyId => `${BaseAPIURL}SalaryGrades/${companyId}`

/**
 * Endpoint to get all general ledgers added in it's setup.
 * @param companyId [required]
 * @returns urlpath
 */
 export const GetAllGeneralLedgersByCompanyId = companyId => `${BaseAPIURL}GeneralLegers/${companyId}`

/**
 * Endpoint to search for orgs by name or code.
 * @param companyId [required]
 * @param type [required]
 * @param query [required]
 * @returns urlpath
 */
export const SearchOrganizationByNameOrCodeUsingType = (companyId, type, query) => `${BaseAPIURL}Organisation/${companyId}/${type}/filter?filter=${query}`;

/**
 * Endpoint to get orgs.
 * @param companyId [required]
 * @param type [required]
 * @param code [required]
 * @returns urlpath
 */
export const GetOrganizationByFullCodeUsingType = (companyId, type, code) => `${BaseAPIURL}Organisation/${companyId}/${type}/${code}`;



/* ------------------------------------------  ENDPOINTS TO LOAD ORG DATA BY ORGID  ------------------------------------------ */

/**
* Endpoint to get Org details by orgId.
* @param orgId [required]
* @returns urlpath
*/
export const GetOrgDetailsByOrgId = (orgId) => `${BaseAPIURL}Organisation/${orgId}`;

/**
 * Endpoint to get all locations added to orgs during creation or updates..
 * @param orgId [required]
 * @returns urlpath
 */
export const GetLocationsByOrgId = (orgId) => `${BaseAPIURL}Organisation/${orgId}/locations`;

/**
* Endpoint to get GL Accounts by orgId.
* @param orgId [required]
* @returns urlpath
*/
export const GetGLAccountsByOrgId = (orgId) => `${BaseAPIURL}Organisation/${orgId}/GLAccounts`;

/**
 * Endpoint to get all Earnings added to orgs during creation or updates..
 * @param orgId [required]
 * @returns urlpath
 */
export const GetEarningsByOrgId = (orgId) => `${BaseAPIURL}Organisation/${orgId}/earnings`;

/**
* Endpoint to get all Deductions added to orgs during creation or updates..
* @param orgId [required]
* @returns urlpath
*/
export const GetDeductionsByOrgId = (orgId) => `${BaseAPIURL}Organisation/${orgId}/deductions`;



/* ------------------------------------------  ENDPOINTS TO LOAD ORG HISTORY DATA BY ORGID  ------------------------------------------ */

/**
 * Endpoint to get all Org Details history by orgId.
 * @param orgId [required]
 * @returns urlpath
 */
export const GetOrgDetailsHistoryByOrgId = (orgId) => `${BaseAPIURL}Logs/${orgId}/org-details`;

/**
 * Endpoint to get all Org GL Accounts history by orgId.
 * @param orgId [required]
 * @returns urlpath
 */
export const GetOrgGLAccountsHistoryByOrgId = (orgId) => `${BaseAPIURL}Logs/${orgId}/orgGLAccounts`;

/**
 * Endpoint to get all Org earnings history by orgId.
 * @param orgId [required]
 * @returns urlpath
 */
export const GetOrgEarningsHistoryByOrgId = (orgId) => `${BaseAPIURL}Logs/${orgId}/earnings`;

/**
* Endpoint to get all Org deductions history by orgId.
* @param orgId [required]
* @returns urlpath
*/
export const GetOrgDeductionsHistoryByOrgId = (orgId) => `${BaseAPIURL}Logs/${orgId}/deductions`;


/* ------------------------------------------  ENDPOINTS TO LOAD ORG EARNINGS & DEDUCTIONS & BENEFITS DATA BY ORGID  ------------------------------------------ */

/**
* Endpoint to get all deductions by companyId.
* @param companyId [required]
* @returns urlpath
*/
export const GetAllDeductionsByCompanyId = (companyId) => `${BaseAPIURL}Deductions/${companyId}`;

/**
* Endpoint to get all earnings by companyId.
* @param companyId [required]
* @returns urlpath
*/
export const GetAllEarningsByCompanyId = (companyId) => `${BaseAPIURL}Earnings/${companyId}`;

/**
* Endpoint to get all earnings by companyId.
* @param companyId [required]
* @returns urlpath
*/
export const GetAllBenefitsByCompanyId = (companyId) => `${BaseAPIURL}Benefits/${companyId}`;

/* ------------------------------------------  ENDPOINTS TO LOAD CURRENCY DATA BY ORGID  ------------------------------------------ */

/**
* Endpoint to get all currencies by companyId.
* @param companyId [required]
* @returns urlpath
*/
export const GetAllCurrenciesByCompanyId = (companyId) => `${BaseAPIURL}Currencies/${companyId}`;