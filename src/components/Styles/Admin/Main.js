import styled from "styled-components";

const Container = styled.div`
  width:100vw;
  background-color:#555;
  position:relative;
`

const Content = styled.div`
  position:absolute;
  overflow-x:hidden;
  width:75vw;
  right:0;
  top:0;
  color:${({theme})=>theme.textColor};
  @media only screen and (max-width:750px){
    width:100vw;
    top:50px;
  }
`

export {

  Content,

  Container
  
}