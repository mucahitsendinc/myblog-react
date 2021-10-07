import styled from "styled-components";

const Container = styled.div`
  width:100vw;
  display:flex;
  height:100%;
`

const Content = styled.div`
  position:absolute;
  left:${(props)=>props.open==true ? '25vw' : '0vw'};
  overflow-x:hidden;
  height:100%;
  transition:600ms all;
  width:${(props)=>props.open==true ? '75vw' : '100vw'};
  color:${({theme})=>theme.textColor};
  @media only screen and (max-width:750px){
    width:100vw;
    display:${(props)=>props.open==true ? 'none' : 'block'};
    top:50px;
  }
`

export {

  Content,

  Container
  
} 