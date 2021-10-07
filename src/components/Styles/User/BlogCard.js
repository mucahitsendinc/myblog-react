import styled from "styled-components"

import {MainHr} from './About'

const BlogItemContainer=styled.div`
  display:${(props)=>props.status==true ? 'none' : 'block'};
  width:20%;
  margin:2.5%;
  background-color:${({theme})=>theme.blogCard};
  position:relative;
  padding-bottom:20px;
  -webkit-box-shadow: ${({theme})=>theme.blogCardwebkitBoxShadow};
  -moz-box-shadow: ${({theme})=>theme.blogCardmozBoxShadow};
  box-shadow: ${({theme})=>theme.blogCardBoxShadow};
  transition:600ms all;
  .recommedButton{
    width:100%;
    transition:600ms all;
    &:hover{
      background-color:${({theme})=>theme.itemHover};
      width:60&;
      color:#fff;
      border-radius:0;
    }
  }
  a{
    text-decoration:none;
    background-color:${({theme})=>theme.blogCard};
    color:${({theme})=>theme.blogTitleColor};
  }
  &:hover{
    img{
      border-radius:20px 20px 0px  0px;
    }
    button{
      border-bottom-right-radius:20px;
    }
    border-radius:20px;
  }
  @media only screen and (max-width:1180px){
    width:21vw;
  }
  @media only screen and (max-width:990px){
    width:33vw;
  }
  @media only screen and (max-width:860px){
    width:100vw;
  }
  
`

const BlogImage=styled.img`
  width:100%;
  cursor:pointer;
  transition:600ms all;
  background-color:#eee;
`

const BlogTitle=styled.div`
  padding:0px 5px;
  cursor:pointer;
  font-size:15px;
  
`

const BlogTagList=styled.ul`
  list-style:none;
  padding-inline-start: 0px;
  margin:0;
  display:flex;
  flex-wrap:wrap;
  li{
    padding:.5% 1%;
    font-size:11px;
    color:${({theme})=>theme.blogCardTagColor};
    background-color:${({theme})=>theme.blogCardTagBackground};
    margin:2%;
    cursor:pointer;
    transition:400ms all;
    &:hover{
      background-color:transparent;
    }
  }
`

const BlogDescription=styled.div`
  max-height:100px;
  font-size:10px;
  padding:10px;
`

const GoBlogText=styled.button`
  font-size:12px;
  float:right;
  height:20px;
  bottom:0px;
  position:absolute;right:0;
  color:${({theme})=>theme.blogCardGoBlogColor};
  background-color:${({theme})=>theme.blogCardGoBlogBackground};
  border-top-left-radius:5px;
  transition:500ms all;
  &:hover{
    //border-top-left-radius:35px;
  }
`

const BlogDate=styled.div`
  font-size:10px;
  float:left;
  height:20px;
  position:absolute;
  left:6px;;
  bottom:-5px;
  color:${({theme})=>theme.blogCardGoBlogColor};
  transition:500ms all;
  cursor:pointer
`

const BlogItemList = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  height:auto;
  width:100%;
  align-items:center;
`

const PageButtonList=styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  margin:40px 20px 200px 20px;
`

const PageButton=styled.button`
  margin:5px;
  font-size:18px;
  cursor:pointer;
  border-radius:40px;
  color:${({theme})=>theme.blogCardGoBlogColor};
  background-color:${({theme})=>theme.blogCard};
  transition:300ms all;
  padding:5px 15px;
  color:${(props)=>props.active==true ? ({theme})=>theme.blogCard : ({theme})=>theme.blogCardGoBlogColor};
  background-color:${(props)=>props.active==true ? ({theme})=>theme.blogTitleColor : ((props)=>props.disabled==true ? ({theme})=>theme.disabledBackground : ({theme})=>theme.blogCard)};
  &:hover{
    color:${({theme})=>theme.blogCard};
    background-color:${(props)=>props.disabled==false ? ({theme})=>theme.blogTitleColor : ({theme})=>theme.disabledBackground};
  }
`

export {

  PageButtonList,

  PageButton,

  BlogItemList,

  GoBlogText,

  BlogDescription,

  BlogTagList,

  BlogImage,

  BlogItemContainer,

  BlogTitle,

  BlogDate,

  MainHr
  
}