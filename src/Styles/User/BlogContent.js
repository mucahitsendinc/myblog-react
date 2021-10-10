import styled from "styled-components";

const BlogContent=styled.div`
  display:flex;
  flex-wrap:wrap;
`

const BlogContentContainer=styled.div`
  width:${(props)=>props.open==true ? '55vw' : '80vw'};
  position:relative;
  transition:600ms all;
  padding:50px 0px;
  margin:50px 0px;
  background-color:${({theme})=>theme.blogContainerBackground};
  margin-left:1.5vw;
  @media only screen and (max-width:750px){
    width:97vw;
  }
`

const BlogRouter=styled.div`
  margin:50px 0px;
  width:15vw;
  margin-left:1.5vw;
  background-color:${({theme})=>theme.blogContainerBackground};
  @media only screen and (max-width:750px){
    width:97vw;
  }
`

const BlogContentTitle=styled.div`
  width:100%;
  padding:0px 20px;
  font-size:22px;
  font-weight:bold;
`

const BlogTagContentList=styled.ul`
  list-style:none;
  padding-inline-start: 0px;
  margin:0;
  display:flex;
  flex-wrap:wrap;
  padding-left:10px;
  border-bottom:.4px solid #ddd;
  li{
    padding:.5% 1%;
    font-size:11px;
    color:${({theme})=>theme.blogCardTagColor};
    background-color:${({theme})=>theme.blogCardTagBackground};
    margin:.5%;
    cursor:pointer;
    transition:400ms all;
    &:hover{
      background-color:transparent;
    }
  }
  
`

const BlogItemContainer=styled.div`
  width:95%;
  margin:2.5%;
  background-color:${({theme})=>theme.blogCard};
  position:relative;
  padding-bottom:20px;
  
  transition:600ms all;
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
  
  
`

const BlogImage=styled.img`
  width:100%;
  cursor:pointer;
  transition:600ms all;
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
`

const CommentContainer= styled.div`
  width:100%;
  form{
    padding:5vh 0px;
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    position:relative;
    background-color:${({theme})=>theme.formBackgroundColor};
    button{
      width:60%;  
      padding:10px 2.5%;
      margin:20px 5%;
      color:${({theme})=>theme.formInputTextColor};  
      background-color:${({theme})=>theme.formInput};
      transition:500ms all;
      &:hover{
        background-color:transparent;
        transform:scale(1.5);
        color:${({theme})=>theme.formInputButtonHoverColor};
        font-weight:bold;
      }
    }
  }
  @media only screen and (max-width:750px){
    form{
      width:100vw;
    }
  }
`

const Comment=styled.div`
  width:100%;
  padding:20px;
  background-color:${({theme})=>theme.formBackgroundColor};
  position:relative;
  margin:10px 0px;
`

const CommentDate=styled.div`
  position:absolute;
  right:20px;
  top:20px;
  font-size:12px;
  cursor:pointer;
`

const CommentName=styled.div`
  font-weight:bold;
`

const CommentContent=styled.div``

const GoBackButton=styled.button`
  position:absolute;
  top:10px;
  right:10px;
  padding:10px 40px;
` 

const Content=styled.div`
  padding:20px;
  overflow:scroll!important;
  pre code{
    ::-webkit-scrollbar{
      width: 7px;
      height: 7px;
    }
    ::-webkit-scrollbar-thumb{
      background: #B3AFB3;
      border-radius: 0px;
    }
    ::-webkit-scrollbar-thumb:hover{
      background: #B3AFB3;
    }
    ::-webkit-scrollbar-track{
      background: #F0F0F0;
      border-radius: 0px;
      box-shadow: inset 0px 0px 0px 0px #F0F0F0;
      -ms-user-select:all!important;
      user-select:all!important;
      -webkit-user-drag: all!important;
      -khtml-user-drag: all!important;
      -moz-user-drag: all!important;
      -o-user-drag: all!important;
      user-drag: all!important;
      -moz-user-select: all!important;
      -khtml-user-select: all!important;
      -webkit-user-select: all!important;
      user-select:all !important;
    }
    .code-badge {
      cursor:pointer;
      padding: 8px !important;
      background: #ccc !important;
      color: black !important;
     
    }
    .code-badge-copy-icon {
      font-size: 1.3em !important;
    }
  
  }
  .copysvg{
  }
  .copysvg:before{
    content: 'Kopyala';
    color:#fff;
    font-size:10px;
  }
  .copyedsvg{
  }
  .copyedsvg:before{
    content: 'Kopyalandı';
    color:#fff;
    font-size:10px;
  }
`

export {

  GoBackButton,

  Comment,

  CommentDate,

  CommentName,

  CommentContent,

  CommentContainer,

  BlogTagContentList,

  BlogContentTitle,

  BlogRouter,

  BlogContentContainer,

  BlogContent,

  BlogItemList,

  GoBlogText,

  BlogDescription,

  BlogTagList,

  BlogImage,

  BlogItemContainer,

  BlogTitle,

  BlogDate,

  Content
  
}