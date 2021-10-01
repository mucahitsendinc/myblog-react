import React,{useState} from 'react' 

import {HeaderContainer,CloseHeader} from '../../Styles/Admin/Header'

import { faBars } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ListItems from './ListItems'

const Header=()=>{

  const [open,setOpen]=useState(true)

  return (
    
    <>

      <HeaderContainer open={open}>

        <ListItems open={open} setopen={setOpen} />

      </HeaderContainer>
      
      <CloseHeader open={open} onClick={()=>setOpen(!open)}>

        <FontAwesomeIcon  icon={faBars} />

      </CloseHeader>

    </>

  )

}

export default Header