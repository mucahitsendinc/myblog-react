import React,{useState,useEffect,useLayoutEffect} from 'react'

import {LoginContainer,LoginErrorMessage,PostLoadingArea} from '../../Styles/Admin/Login'

import {Link, useHistory} from 'react-router-dom'

import ActivityIndicator from 'react-activity-indicator'

import { MainContext,useContext } from '../../Context'

import axios from 'axios'

const AdminPasswordReset=(props)=>{
  
  const history = useHistory()

  const [password,setPassword]=useState('')

  const [post,setPost]=useState(false)

  const [error,setError]=useState('')
  const [success,setSuccess]=useState(localStorage.getItem('forgot')=='send' ? true : false)

  
  const [random,setRandom]=useState(null)
  const [random2,setRandom2]=useState(null)
  const [secure,setSecure]=useState(null)
  

  const seting=async()=> {
    const set=await setRandom((Math.floor(Math.random()*50)+25))
    const seter=await setRandom2(Math.floor(Math.random()*25))
  }
  useEffect(async() => {
    seting()
  }, [])
  var md5 = require("md5"); 
  
  if(localStorage.getItem('login')=="true"){
    history.push('/yonetici')
  }
  


  const loginIn=async(e)=>{
    e.preventDefault()
    setPost(true)
    if(password==random){
      
      axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_FORGOT_PASSWORD
      , {}
      ,{headers:{'Content-Type':'application/json'}})
      .then(function (results) { 

          setSuccess(true)

          localStorage.setItem('forgot','send')

      })
      .catch(function(e){ 

          setPost(false) 

          setError(e.response.data.message)
          
      })
    }else{
      setError('Güvenlik anahtarı yanlış!')
      setPassword('')
      seting()
      setPost(false)
    }
    
    /*
      
     
     */
    
  }

  
  
  return (

      <LoginContainer>
          
        {
          random!=null & random2!=null ? 
          <form onSubmit={loginIn}>
          <center>
            <img onClick={()=>history.push('/')} style={{cursor:'pointer'}} src="https://mucahitsendinc.com/logo512.png" height="170" width="170" />
          </center>
          
          {
            success==true ? 
            <h1 style={{fontSize:15,textAlign:'center',color:'#fff'}}>E Posta hesabınıza parola sıfırlama isteği gönderildi</h1>
            :
            <>
              {
            
              error!=''  ? 
              
              <LoginErrorMessage>
              
              {error}
              
              </LoginErrorMessage>
              
              :
              
              <React.Fragment/>
            }

            <input type="text" value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder={""+random-random2+"+"+random2+"=?"} />

            {

              post==true ? 
              
              <PostLoadingArea>
              
                <ActivityIndicator
                    number={5}
                    diameter={10}
                    borderWidth={2}
                    duration={60}
                    activeColor="#fff"
                    borderColor="#fff"
                    borderRadius="100%" 
                />
              
              </PostLoadingArea>
              
              :
              
              <>
              <button type="submit" disabled={post}>Sıfırlama bağlantısı gönder</button>
              <div style={{textAlign:'center',marginTop:20}}>
                <Link to={"giris"} style={{textDecoration:'none',color:'#fff'}} >Giriş Yap</Link>
              </div>
              </>
            }
            </>
          }
          
        </form>
        :
        <React.Fragment/>
        }

      </LoginContainer>

  )
  
}

export default AdminPasswordReset