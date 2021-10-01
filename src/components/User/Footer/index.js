import React from 'react'

import {FooterContainer} from "../../Styles/User/Footer";


import { MainContext,useContext } from '../../../Context'

const Foot=()=>{

  const {maindata}=useContext(MainContext)

  const year=(new Date()).getFullYear()+" "

  return (
  
    <FooterContainer>
    
      <h1>

        {

          maindata[7].info

        }

      </h1>
    
      <h2>
      
        {
          year
        } 

        &copy; Tüm hakları saklıdır.
        
      </h2>
    
    </FooterContainer>
  
  )

}

export default Foot