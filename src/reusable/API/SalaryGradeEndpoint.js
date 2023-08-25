import { BaseAPIURL } from "./base";


/**
* Endpoint to get details for salary grade if it exist by salary grade ID.
* @param salaryGradeId [required]
* @returns urlpath


*/
export const GetSalaryGradeDetailsBySalaryGradeId = (salaryGradeId) => `SalaryGrades/${salaryGradeId}`;
// export const GetSalaryGradeDetailsBySalaryGradeId = (salaryGradeId) => `${BaseAPIURL}SalaryGrades/${salaryGradeId}`;


 /**
 * Endpoint to get all currencies for a company
 * @param companyReference [required]
 * @returns urlpath
 * http://192.168.0.48:5100/SalaryGrades/Currencies?companyReference=00001_A01
 *///http://192.168.0.48:5100/SalaryGrades/00001_A01/Currencies
//http://192.168.0.48:5100/Currencies/00001_A01/all
  export const GetAllCurrencies= (companyReference) => `Currencies/${companyReference}/all`;
  // export const GetAllCurrencies= (companyReference) => `${BaseAPIURL}Currencies/${companyReference}/all`;

  /**
 * Endpoint to get all employee types for a company
 * @param companyReference [required]
 * http://192.168.0.48:5100/SalaryGrades/EmployeeType?companyReference=00001_A01
 * @returns urlpath
 *///http://192.168.0.48:5100/SalaryGrades/00001_A01/EmployeeType

  //  export const GetAllEmployeeTypes = (companyReference) => `${BaseAPIURL}SalaryGrades/${companyReference}/EmployeeType`;
   export const GetAllEmployeeTypes = (companyReference) => `SalaryGrades/${companyReference}/EmployeeType`;

    /**
 * Endpoint to get all employee types for a company
 * http://192.168.0.48:5100/SalaryGrades/00001_A01/notchSize

 * @returns urlpath
 */
     export const GetNotchSize = (companyReference) => `SalaryGrades/${companyReference}/notchSize`;
    //  export const GetNotchSize = (companyReference) => `${BaseAPIURL}SalaryGrades/${companyReference}/notchSize`;

/**
* Endpoint to search for company Salary Grade by name or code.
* @param companyReference [required]
* @param query [required]
* @param pageNumber [optional]
* @param numberOfItems [optional]
* @param orderBy [optional]
* @param sortOrder [optional]
* @returns urlpath
*///http://192.168.0.48:5100/SalaryGrades?companyReference=00001_A01&filter=1&page=1&results=1&orderBy=1&sortOrder=1

export const SearchSalaryGradesByNameOrCode = (companyReference, query, pageNumber, numberOfItems, orderBy, sortOrder) => `SalaryGrades?companyReference=${companyReference}&Filter=${query}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;
// export const SearchSalaryGradesByNameOrCode = (companyReference, query, pageNumber, numberOfItems, orderBy, sortOrder) => `${BaseAPIURL}SalaryGrades?companyReference=${companyReference}&Filter=${query}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;

///http://192.168.0.48:5100/Pays/GenericTypes/SAT
export const GetSalaryType = (type) => `Pays/GenericTypes/${type}`
// export const GetSalaryType = (type) => `${BaseAPIURL}Pays/GenericTypes/${type}`

/**
* Endpoint to create a new Salary Grade.
* @returns urlpath
*/
export const PostSalaryGrade = () => `SalaryGrades`;
// export const PostSalaryGrade = () => `${BaseAPIURL}SalaryGrades`;

/**
* Endpoint to update a salary grade with salaryGradeId.
* @param salaryGradeId [required]
* @returns urlpath
*/
// export const PutSalaryGrade = () => `${BaseAPIURL}SalaryGrades`;
export const PutSalaryGrade = () => `SalaryGrades`;
