import {useState} from 'react'

import {MenuContainer} from '../../Styles/Admin/Header' 

import Title from './Title'

import {Switch} from '@material-ui/core';

import { ThemeChanger } from '../../Styles/User/Header';

import Items from './Items'

import {MainContext,useContext} from '../../../Context'

const ListItems=(props)=>{
  
  const [checked,setChecked]=useState(true)

  const {setTheme,theme}=useContext(MainContext)


  return (
    <MenuContainer>
      
      <Title title="Blog Yönetim"  />

      <Items open={props.open} setopen={props.setopen} />

      <ThemeChanger>

        <Switch color={'default'}  checked={theme==='light' ? checked : false} onChange={()=>setTheme(theme=='light' ? 'dark' : 'light')} />
      
      </ThemeChanger>
      
    </MenuContainer>
    
  )

}

export default ListItems