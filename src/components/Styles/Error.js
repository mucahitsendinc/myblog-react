import styled from 'styled-components'

const ErrorContainer=styled.div`
  width:100vw;
  height:100vh;
  background-color:#e74c3c;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

const ErrorCode=styled.div`
  color:#fff;
  font-weight:bold;
  font-size:178px;
  text-align:center;
`

const ErrorMessage=styled.div`
color:#eee;
  font-weight:bold;
  font-size:38px;
`

const ErrorMessageContainer=styled.div`
  padding:30px;
  border-radius:30px;
  -webkit-box-shadow: 0px 0px 153px 0px rgba(255,255,255,1);
  -moz-box-shadow: 0px 0px 153px 0px rgba(255,255,255,1);
  box-shadow: 0px 0px 153px 0px rgba(255,255,255,1);
`

const CopyRight=styled.div`
  font-size:12px;
  font-weight:bold;
  text-align:center;
`

export {

  ErrorContainer,
  
  ErrorCode,
  
  ErrorMessage,
  
  ErrorMessageContainer,
  
  CopyRight

}