import React,{useState,useEffect} from 'react'

import {LoginContainer,LoginErrorMessage,PostLoadingArea} from '../../Styles/Admin/Login'

import {useHistory} from 'react-router-dom'

import ActivityIndicator from 'react-activity-indicator'

import { MainContext,useContext } from '../../Context'

import axios from 'axios'

const Login=(props)=>{
  
  const history = useHistory()

  const [password,setPassword]=useState('')

  const [post,setPost]=useState(false)

  const [error,setError]=useState('')

  const {login,setLogin}=useContext(MainContext)

  var md5 = require("md5"); 
  
  if(localStorage.getItem('login')=="true"){
    history.push('/yonetici')
  }

  const loginIn=async(e)=>{
    e.preventDefault()

    axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_LOGIN
    , {password:md5(password)}
    ,{headers:{'Content-Type':'application/json'}})
    .then(function (results) { 

        setError('')  

        setLogin(true)

        localStorage.setItem('login','true')
 
        localStorage.setItem('token',results.data.token)

     })
    .catch(function(e){ 

        setPost(false)

        setError('Erişim parolası hatalı')
        
     })
    
  }

  useEffect(() => {

    if(login==true){
      
      history.push('/yonetici')

    }

  }, [login])
  
  return (

      <LoginContainer>
          
        <form onSubmit={loginIn}>
          <center>
            <img onClick={()=>history.push('/')} style={{cursor:'pointer'}} src="https://mucahitsendinc.com/logo512.png" height="170" width="170" />
          </center>
          {
          
            error!=''  ? 
            
            <LoginErrorMessage>
            
            {error}
            
            </LoginErrorMessage>
            
            :
            
            <React.Fragment/>
          }

          <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder="Erişim Parolası"/>

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
            
            <button type="submit" disabled={post}>Giriş Yap</button>
          }

        </form>

      </LoginContainer>

  )
  
}

export default Login