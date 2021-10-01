import {UserTitle} from './UserTitle'

import {Contact} from './Contact'

import Items from './Items'

import { MainContext,useContext } from '../../../Context'

const AboutItems=()=>{
  
  const {aboutData,maindata}=useContext(MainContext)

  const contactData={

    location:maindata[4].info,

    email:maindata[5].info,

    phone:maindata[6].info

  }
  console.log(maindata)
  return(
    
    <>

    <UserTitle  title={maindata[0].info} degree={maindata[3].info} />

    <Contact data={contactData} />

    <Items about={aboutData} />

    </>

  )

}

export default AboutItems