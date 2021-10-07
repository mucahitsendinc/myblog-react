import React from 'react'

import { Menu,CloseHeader,SetMenu } from '../../../Styles/User/Header'

import { faBars } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Items from './Items'

const Header=(props)=> {
  
  const {open,setopen}=props
  
  return (
  
    <SetMenu>
      
      <Menu open={open}>

        <Items {...props} />

      </Menu>

      <CloseHeader open={open} onClick={()=>setopen(!open)}>

        <FontAwesomeIcon  icon={faBars} />

      </CloseHeader>

    </SetMenu>
  
  )

}

export default Header 