import styled from 'styled-components'

const FooterContainer=styled.div`
  width:100%;
  background-color:${({theme})=>theme.backgroundColor};
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center; 
  color:#fff;
    h1{
    font-size:9px;
  }
  h2{
    font-size:8px;
  }
  padding:10px 0px;
  font-family:Azeret,sans-serif;
  @media only screen and (max-width:750px){
    width:100vw;
  }
`

export {
  
  FooterContainer

} 