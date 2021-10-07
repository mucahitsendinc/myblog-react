import React,{useState} from 'react' 

import {HeaderContainer,CloseHeader} from '../../../Styles/Admin/Header'

import { faBars } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ListItems from './ListItems'

const Header=(props)=>{

  const {open,setopen}=props

  return (
    
    <> 

      <HeaderContainer open={open}>

        <ListItems open={open} setopen={setopen} />

      </HeaderContainer>
      
      <CloseHeader open={open} onClick={()=>setopen(!open)}>

        <FontAwesomeIcon  icon={faBars} />

      </CloseHeader>

    </>

  )

}

export default Header