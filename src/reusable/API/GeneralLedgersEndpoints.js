import {BaseAPIURL} from './base';


/**
 * Endpoint to search for general ledgers by name or code.
 * @param {string} query [required]
 * @param {string} companyId [required]
 * @returns {string} urlpath
 * http://192.168.0.48:5100/GeneralLedgers?companyReference=00001_A01

 *///http://psl-linux:5100/GeneralLedgers/all?companyReference=00001_A01
//http://psl-linux:5100/GeneralLedgers?companyReference=345345&filter=gdfg&page=1&results=1&orderBy=dgdfg&sortOrder=dfgfg


export const SearchGeneralLedgersByNameOrCode = (companyReference,query,pageNumber, numberOfItems, orderBy, sortOrder) => 
`GeneralLedgers?companyReference=${companyReference}&Filter=${query}&Page=${pageNumber}&Results=${numberOfItems}&OrderBy=${orderBy}&SortOrder=${sortOrder}`;

/**
 * Endpoint to create a new general ledgers.
 * http://192.168.0.48:5100/GeneralLedgers

 * @returns {string} urlpath
 */
 export const PostGeneralLedger = () => `GeneralLedgers`;
//  export const PostGeneralLedger = () => `${BaseAPIURL}GeneralLedgers`;

 /**
 * Endpoint to update a general ledger by glAccountId.
 * @param {string} glAccountId [required]
 * @returns {string} urlpath
 */
  export const PutGeneralLedger = () => `GeneralLedgers`;
  // export const PutGeneralLedger = () => `${BaseAPIURL}GeneralLedgers`;

  /**
 * Endpoint to update a general ledger by glAccountId.
 * @param {string} accountId [required]
 * @returns {string} urlpath
 * http://192.168.0.48:5100/GeneralLedgers/9db75645-841e-4298-a65d-4d0ea3d6da29
http://192.168.0.48:5100/GeneralLedgers/bcf3ec65-7fcf-41e8-b4fd-08da6fb88a9f
 */
   export const GetGeneralLedgerByAccountID = (accountId) => `GeneralLedgers/${accountId}`;
  //  export const GetGeneralLedgerByAccountID = (accountId) => `${BaseAPIURL}GeneralLedgers/${accountId}`;


