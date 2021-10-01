import styled from 'styled-components'

import {CloseHeader} from '../Admin/Header'

const Menu = styled.div`
  width:25vw;
  background-color:${({theme})=>theme.backgroundColor}!important;
  border-right:${({theme})=>theme.menuBorderColor};
  position:relative;
  left:${(props)=> props.open==true ? '0vw' : '-25vw'};
  transform:scale(${(props)=> props.open==true ? '1' : '.1'});
  height:100%;
  z-index:10;
  transition:1200ms all;
  @media only screen and (max-width:750px){
    overflow:none;
    width:100vw;
    height:100%;
    border-right:0px;
    left:${(props)=>props.open==true ? '0vw' : '-100vw'};
  }
`

const HamburgerMenu = styled.div`
  display:none;
  position:fixed;
  top:0;left:0;
  height:50px;width:50px;
  background-color:#eee;
  z-index:10;
  cursor:pointer;
  
  transition:600ms all;
  &:hover{
    background-color:#ddd;
  }
  div{
    width:25px;
    margin-left:10px;
    margin-top:0px;
  }
  font-size:32px;
  @media only screen and (max-width:750px){
    display:block;
  }
`

const ResponsiveMenu = styled.div`
  display:${(props)=>props.status==true ? "block" : "none"};
  width:100vw;height:100vh;background-color:${({theme})=>theme.backgroundColor};
  position:fixed;
  background-image:${({theme})=>theme.menuBackgroundImage};
  background-size:cover;
  top:0;
  left:0;
  right:0;
  z-index:10;
  @media only screen and (max-width>750px){
    display:none;
  }
`

const MenuCloser = styled.div`
  position:fixed;
  width:50px;height:50px;
  right:0;top:0;
  background-color:#eee;
  z-index:10;
  cursor:pointer;
  div{
    width:25px;
    margin-left:15px;
  }
  font-size:32px;
  transition:600ms all;
  &:hover{
    background-color:#ddd;
  }
  @media only screen and (max-width:750px){
    display:block;
  }
`

const SetMenu=styled.div`
  height:100vh;
`

const MenuContainer = styled.div`
  width:25vw;
  @media only screen and (max-width:750px){
    border-right:0px;
    width:100vw;
  }
`

const MenuImage = styled.div`
  position:absolute;
  color:#eee;
  width:100%;
  top:150px;
  height:250px;
  text-align:center;
  font-weight:bold;
  img{
    margin-bottom:10px;
    width:10vw;
    border-radius:10vw;
    transition:204000ms all;
    cursor:pointer;
    &:hover{
      border:3px solid #fff;
      transform:scale(1.1) rotate(-100505deg);
    }
  }
  @media only screen and (max-width:750px){
    margin-top:5vh;
    width:100vw;
    img{
      width:20vw;
      border-radius:20vw;
    }
  }
`

const MenuItem=styled.li`
  width:25vw;
  text-align:center;
  display:flex;justify-content:center;align-items:center;
  a{
    font-family:Roboto,sans-serif;
    width:40%;
    text-align:center;
    text-decoration:none;
    color:#fff;
    padding:5px;
    font-size:13px;
    transition:400ms all;
    background-color: ${(props)=>props.active==true ? 'rgba(255,255,255,.3)' : 'transparent' };
    border-left:${(props)=>props.active==true ? '3px solid #eee' : '0px' };
    &:hover{
      border-left:3px solid #eee;
      color:#eee;
      background-color:rgba(255,255,255,.3);
    }
  }
  @media only screen and (max-width:750px){
    width:100vw;
    a{
      width:40vw;
      font-size:17px;
    }
  }
`

const MenuItemList=styled.ul`
  list-style:none;
  height:40vh;
  max-height:40vh;
  position:absolute;
  left:0;
  bottom:4vh;
  display:flex;
  padding-inline-start: 0px;

  flex-direction:column;
  @media only screen and (max-width:750px){
    top:50vh;
    width:100vw;
  }
`

const SocialList=styled.div`
  position:absolute;
  top:75vh;
  width:25vw;
  display:flex;
  justify-content:center;align-items:center;
  div{
    cursor:pointer;
    text-decoration:none;
    color:#fff;
    padding:5px 10px;
    border-radius:20vw;
    transition:500ms all;
    &:hover{
      background-color:rgba(255,255,255,.3);
      color:#222; 
    }
  }
  @media only screen and (max-width:750px){
    width:100vw;
  }
`

const ThemeChanger=styled.div`
  position:absolute;
  bottom:5vh;
  width:25vw;
  background-color:rgba(255,255,255,.1);
  display:flex;justify-content:center;align-items:center;
  @media only screen and (max-width:750px){
    width:100vw;
  }
`

export  {
  HamburgerMenu,

  ResponsiveMenu,

  Menu,

  MenuCloser,
  
  MenuContainer,
  
  MenuImage,
  
  MenuItem,
  
  MenuItemList,
  
  SocialList,

  ThemeChanger,
  
  CloseHeader,
  
  SetMenu

}