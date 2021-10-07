import { MenuContainer,MenuImage,MenuItemList,ThemeChanger } from '../../../Styles/User/Header'

import React,{useState} from 'react'

import Social from './Social'

import ListItems from './ListItems'

import {Switch} from '@material-ui/core';

import {Link} from 'react-router-dom'

import { MainContext,useContext } from '../../../Context';

const Items=(props)=>{

  const {theme,setTheme}= useContext(MainContext)

  const [checked,setChecked]=useState(true)

  const getSetChecked=()=>{
    setTheme(theme=='light' ? 'dark' : 'light')
  }
  const Image = React.memo(function Image({ src }) {
    return <img src={props.profile_image} alt="Profil fotografi" className="spinner" />;
  });
  return(
    
    <MenuContainer >

      <MenuImage>

        <Link to="/yonetici/giris">
          
          <Image src={"spinner"} />
        
        </Link>
        
        <br/>
         
        {

          props.user

        }
      
      </MenuImage>

      <MenuItemList>
      
        <ListItems/>

      </MenuItemList>
      
      
      <Social github={props.github} linkedin={props.linkedin} instagram={props.instagram} />

      <ThemeChanger>

        <Switch color={'default'}  checked={theme==='light' ? checked : false} onChange={()=>getSetChecked()} />
      
      </ThemeChanger>

    </MenuContainer>

  )

}

export default Items