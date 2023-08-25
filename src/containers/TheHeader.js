import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
   CHeaderNavLink,
  // CSubheader,
  // CBreadcrumbRouter,
  // CLink
} from '@coreui/react';

//import CIcon from '@coreui/icons-react'

// routes config
//import routes from '../routes';

import {
  TheHeaderDropdown,
  TheHeaderDropdownLanguage,
  TheHeaderDropdownNotif,
  TheHeaderDropdownMssg,
  TheHeaderDropdownTasks
} from './index'

const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({ type: 'set', sidebarShow: val });
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({ type: 'set', sidebarShow: val });
  }

  return (
    <CHeader withSubheader={false}>
      {/* <CToggler inHeader className="ml-md-3 d-lg-none" onClick={toggleSidebarMobile} /> */}
      {/* <CToggler inHeader className="ml-3 d-md-down-none"  onClick={toggleSidebar} /> */}
      
      {/* <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <h3>PersonaX</h3>
     
      </CHeaderBrand> */}

      <CHeaderNav className="d-md-down-none mr-auto">
        <div style={{marginLeft:30}}><h4>Personax Standard</h4></div>
       
      {/* <TheHeaderDropdownMssg /> */}
       
     
        {/* <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/dashboard">Dashboard</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/users">Users</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink>Settings</CHeaderNavLink>
        </CHeaderNavItem> */}
      </CHeaderNav>

      <CHeaderNav className="px-3">
      {/* <TheHeaderDropdownTasks /> */}
        {/* <TheHeaderDropdownNotif /> */}
        <TheHeaderDropdownLanguage />
        <TheHeaderDropdown />
      </CHeaderNav>

     

    </CHeader>
  )
}

export default TheHeader
