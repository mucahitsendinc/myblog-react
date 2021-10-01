import styled from "styled-components";

const HeaderContainer=styled.div`
  position:fixed;
  height:100vh;
  width:25vw;
  z-index:100;
  left:${(props)=> props.open==true ? '0vw' : '-22vw' };
  background-color:${({theme})=>theme.backgroundColor};
  border-right:${(props)=> props.open==true ? ({theme})=>theme.menuBorderColor : '0px'};
  transform:rotateY(${(props)=> props.open==true ? '0' : '-180deg'});
  transition:600ms all; 
  @media only screen and (max-width:750px){
    width:${(props)=> props.open==true ? '100vw' : '0vw' };
  }
`

const CloseHeader=styled.div`
  position:fixed;
  width:50px;
  height:50px;
  left:${(props)=> props.open==true ? '25vw' : '0vw' };
  background-color:${({theme})=>theme.backgroundColor};
  top:0;
  display:flex;justify-content:center;align-items:center;
  cursor:pointer;
  transition:600ms all;
  z-index:200;
  svg{
    color:#eee;
    font-size:35px;
  }
  @media only screen and (max-width:750px){
    left:${(props)=> props.open==true ? '85vw' : '0vw' };
  }
`

const MenuContainer=styled.div`
  width:100%;
`

const TitleContainer=styled.div`
  width:100;
  background-color:${({theme})=>theme.AdminHeaderTitleBackground};
  margin-top:50px;
  position:relative;
  display:flex;
  padding:10px 0px;
  align-items:center;
  justify-content:center;
  a{
    position:absolute;
    left:10px;
    text-decoration:none;
    color:#000;
    transition:300ms all;
    cursor:pointer;
    img{
      transition:500ms all;
      height:34px;
      &:hover{
        opacity:40%;
      }      
    }
  }
`

const TitleText=styled.div`
  font-weight:bold;
  font-size:20px;
  font-family:Roboto,sans-serif;
`

const MenuItemList=styled.div`
  width:100%;
  margin-top:50px;
  ul{
    width:100%;
    display:flex;
    flex-direction:column;
    list-style:none;
    padding-inline-start:0;
  }
`

const MenuItem=styled.li` 
  width:100%;
  position:relative;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top:3px;
  background-color:${({theme})=>theme.AdminMenuItemBackground};
  background-color: ${(props)=>props.active==true || props.drop==true ? 'rgba(255,255,255,.3)' : ({theme})=>theme.AdminMenuItemBackground };
  &>a{
    display:block;
    width:100%;
    padding:5px 5px 5px 20%;
    color:#fff;
    text-decoration:none;
    border-left:${(props)=>props.active==true  || props.drop==true ? '3px solid #eee' : '0px' };
    &:hover-within{
      border-left:3px solid #eee;
      color:#eee;
      background-color:rgba(255,255,255,.3);
    }
  }
  &:hover{
    border-left:3px solid #eee;
    color:#eee;
    background-color:rgba(255,255,255,.3);
  }
  div{
    display:block;
    cursor:pointer;
    padding:5px 5px 5px 20%;
    width:100%;
    background-color: ${(props)=>props.active==true || props.drop==true ? 'rgba(255,255,255,.3)' : 'transparent' };
    border-left:${(props)=>props.active==true  || props.drop==true ? '3px solid #eee' : '0px' };
    color:#fff;
    &:hover-within{
      border-left:3px solid #eee;
      color:#eee;
      background-color:rgba(255,255,255,.3);
    }
    svg{
      position:absolute;
      right:10px;
      top:10px;
      transition:600ms all ease;
      transform:rotate(${(props)=>props.drop==true ? '180deg' : '0deg'});
    }
  }
  ul{
    width:100%;
    display:flex;
    position:relative;
    transition: .6s all;
    overflow:hidden;
    max-height:${(props)=>props.drop==true ? 'auto' : '0'};
    transform:rotateY(${(props)=>props.drop==true ? '0' : '180deg'}) scale(${(props)=>props.drop==true ? '1' : '.5'});
    justify-content:center;
    align-items:center;
  }
  
  &>svg{
    color:#fff;
    position:absolute;
    left:10px;
    cursor:pointer;
    top:10px;
    
    
  }
  svg:hover-within{
    border-left:3px solid #eee;
    color:#eee;
    background-color:rgba(255,255,255,.3);
  }
  
`

const SubMenu=styled.li`
  width:100%;
  display:flex;justify-content:center;align-items:center;
  a{
    display:block;
    color:#fff;
    padding:5px 5px 5px 20%;
    background-color: ${(props)=>props.activeSub==true ? 'rgba(255,255,255,.3)' : 'transparent' };
    border-left:${(props)=>props.activeSub==true  ? '3px solid #eee' : '0px' };
    width:100%;
    text-decoration:none;
    &:hover{
      border-left:3px solid #eee;
      color:#eee;
      background-color:rgba(255,255,255,.3);
    }
  }
  
`

const AddItemButton=styled.div`
  position:absolute;
  svg{
    font-size:35px;
    transition:600ms background-color;
    border-radius:100%;
    cursor:pointer;
    color:${({theme})=>theme.PlusbuttonColor};
    padding:5px;
    &:hover{
      background-color:${({theme})=>theme.PlusbuttonHoverBackground};
      color:#fff;
    }
  }

`

const LogOut=styled.div`
  position:absolute;
  bottom:12vh;
  width:100%;
  text-align:center;
  color:#fff;
  cursor:pointer;
  padding:10px 0px;
  &:after{
    content:'  Çıkış Yap '
  }
  &:hover{
    background-color:rgba(255,255,255,.3);
  }
  svg{
    font-size:18px;
    color:#fff;
  }
`

export {

  HeaderContainer,

  CloseHeader,

  MenuContainer,

  TitleContainer,

  TitleText,

  MenuItemList,

  MenuItem,

  SubMenu,

  AddItemButton,
  
  LogOut,

}