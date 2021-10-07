import React,{useState} from 'react'

import {ContactInput,FormGroup,FormBigGroup,ContactTextArea,Error,Success} from '../../../Styles/User/Contact'

import {Triangels} from './Triangels'

import {useLocation} from 'react-router-dom'

import ActivityIndicator from 'react-activity-indicator'

import axios from 'axios'

const FormItems=(props)=>{
  
  const [name,setName]=useState('')
  
  const [surname,setSurname]=useState('')
  
  const [email,setEmail]=useState('')
  
  const [message,setMessage]=useState('')
  
  const [post,setPost]=useState(false)
  
  const [error,setError]=useState(null)
  
  const [success,setSuccess]=useState(null)
  
  const location=useLocation()
  
  const submitContact=(e)=>{
  
    e.preventDefault()
  
    setPost(true)
  
    const path=location.pathname
  
    let post=props.postid
  
    let url=""
  
    if(path.indexOf('blogum')!=-1){
  
      url=process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_SEND_COMMENT
  
    }else{
  
      url=process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_SEND_CONTACT
  
    }

    axios.post(url, {name:name,surname:surname,email:email,message:message,comment:message,post:post},{headers:{'Content-Type':'application/json'}})
    .then(function (response) {

        if(response.data.status=="error"){
  
          setError(response.data.message)
  
        }else{
  
          setError(null)
  
          setName("");
  
          setSurname("")
  
          setEmail("")
  
          setMessage("")
  
          setSuccess(response.data.message)
  
        }
  
        setPost(false)

      }).catch(function (error) { console.log(error) })
  }

  return(
    
      <form method="POST" onSubmit={submitContact}>

        {

          props.status!='comment' ? <Triangels  /> : <React.Fragment/>
        
        }
 
        <FormGroup>

          <ContactInput type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Ad" />

        </FormGroup>

        <FormGroup>

          <ContactInput type="text" value={surname} onChange={(e)=>setSurname(e.target.value)} placeholder="Soyad" />

        </FormGroup>

        <FormBigGroup>

          <ContactInput type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="E Posta" />

        </FormBigGroup>

        <FormBigGroup>
          
          <ContactTextArea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Mesaj" ></ContactTextArea>

        </FormBigGroup>
          
          {
              post==true ? 
              
              <FormBigGroup style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              
              <ActivityIndicator
                    number={3}
                    diameter={28}
                    borderWidth={3}
                    duration={60}
                    activeColor="#fff"
                    borderColor="#ccc"
                    borderRadius="100%" 
                />
              
              </FormBigGroup>
              
            :
            <>
          
              {
                
                error!=null ? 
                
                <FormBigGroup>
                
                  <Error>

                    {error}

                  </Error>
                
                </FormBigGroup>
                
                :
                
                success!=null ? 
                
                <FormBigGroup>
                  
                  <Success>

                    {success}

                  </Success>
                
                </FormBigGroup>
                
                :

                <React.Fragment/>

              }

              <button type="submit">

                Gönder
                
              </button>
            
            </>

          }

      </form>

  )

}

export {FormItems}