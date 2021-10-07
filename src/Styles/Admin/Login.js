import styled from 'styled-components'

const LoginContainer=styled.div`
  width:100vw;
  height:100vh;
  background-color:${({theme})=>theme.backgroundColor};
  display:flex;
  align-items:center;
  justify-content:center;
  form{
    display:flex;
    background:rgba(255,255,255,.2);
    border-radius:20px;
    padding:20px;
    width:20%;
    flex-direction:column;
    input,button{
      width:100%;
      margin-top:10px;
      height:50px;
      padding:10px;
      font-size:20px;
      transition:500ms all;
    }
    input:hover,input:focus{
    }
    button:hover{
      color:${({theme})=>theme.spesificColor};
      background-color:transparent;
    }
  }

`

const LoginErrorMessage=styled.div`
  padding:5px;
  background-color:#e74c3c;
  font-size:12px;
  color:#fff;
  border:1px solid #c0392b;
`

const PostLoadingArea=styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:10px;
  padding:10px;
`

export {

  LoginContainer,

  LoginErrorMessage,

  PostLoadingArea 
  
}