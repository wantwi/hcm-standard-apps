import { BaseAPIURL } from "./base";

export const SearchTaxTableFilter=(filter,countryCode,page,results,orderBy,sortBy)=>`${BaseAPIURL}Taxes/TaxTables?filter=${filter}&countryCode=${countryCode}`
export const GetTaxTableById=(id)=>`${BaseAPIURL}Taxes/TaxTables/${id}`