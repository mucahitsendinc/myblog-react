import styled from "styled-components";

const Container = styled.div`
  width:100vw;
  display:flex;
  height:100%;
`

const Content = styled.div`
  position:absolute;
  left:${(props)=>props.open==true ? '25vw' : '3vw'};
  top:50px;
  overflow-x:hidden;
  height:100%;
  transition:600ms all;
  width:${(props)=>props.open==true ? '75vw' : '97vw'};
  color:${({theme})=>theme.textColor};
  @media only screen and (max-width:750px){
    top:50px;
    width:100vw;
    left:0;
  }
`
export {

  Content,

  Container
  
} 