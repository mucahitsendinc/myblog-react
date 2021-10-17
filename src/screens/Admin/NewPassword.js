import React,{useState,useEffect} from 'react'

import {LoginContainer,LoginErrorMessage,PostLoadingArea} from '../../Styles/Admin/Login'

import {Link, useHistory} from 'react-router-dom'

import ActivityIndicator from 'react-activity-indicator'

import { MainContext,useContext } from '../../Context'

import axios from 'axios'
import {useParams} from 'react-router-dom'

const NewPassword=(props)=>{
  const params=useParams()
  
  const history = useHistory()

  const [password,setPassword]=useState('')
  const [rpassword,setRPassword]=useState('')

  const [post,setPost]=useState(false)

  const [error,setError]=useState('')

  const {login,setLogin}=useContext(MainContext)

  var md5 = require("md5"); 
  
  if(localStorage.getItem('login')=="true"){
    history.push('/yonetici')
  }


  const loginIn=async(e)=>{
    e.preventDefault()

     if(password!=rpassword){
       setError('Parolalar eşleşmiyor')
     }else if(password.length<10){
       setError('Parolanız çok kısa')
     }else if(password.length>30){
       setError('Parolanız çok uzun')
     }else {
      axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_RESET_PASSWORD
      , {token:params.token,newaccess:md5(password),rnewaccess:md5(rpassword)}
      ,{headers:{'Content-Type':'application/json'}})
      .then(function (results) { 

          //console.log(results)

          setError('')  
          
          localStorage.removeItem('forgot')

          setLogin(true)

          localStorage.setItem('login','true')
  
          localStorage.setItem('token',results.data.token)

      })
      .catch(function(e){ 

          setPost(false) 
          //console.log(e.response)
          setError(e.response.data.message)
          
      })
     }
    
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

          <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder="Yeni Erişim Parolası"/>
          <input type="password" value={rpassword}  onChange={(e)=>setRPassword(e.target.value)} placeholder="Tekrar Yeni Erişim Parolası"/>

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
            <button type="submit" disabled={post}>Erişim Parolamı Güncelle</button>
            <div style={{textAlign:'center',marginTop:20}}>
              <Link title="Erişim parolamı unuttum" to={"/yonetici/giris"} style={{textDecoration:'none',color:'#fff'}} >Giriş Yap</Link>
            </div>
            </>
          }

        </form>

      </LoginContainer>

  )
  
}

export default NewPassword