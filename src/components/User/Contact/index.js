
import {useState,useEffect} from 'react'

import {ContactForm} from '../../../Styles/User/Contact'

import {FormItems} from './Form'

const ContactItems=(props)=>{

  const [shakedeg,setShakedeg]=useState(-20)

  useEffect(() => {

    setShakedeg(20)

  }, [])

  setTimeout(() => {

    setShakedeg(shakedeg==20 ? -20 : 20)

  }, 10000);
  
  return (

    <ContactForm shakedeg={props.message!=undefined  ?  0 : shakedeg}>
  
      <FormItems postid={props.postid}  text={props.message!=undefined ? props.message : undefined} />

    </ContactForm>
    
  )

}
 
export default ContactItems