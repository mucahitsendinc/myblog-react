import styled from 'styled-components'

const AdminContent=styled.div`
  padding:50px 5px;
  margin:25px;
  width:calc(100%-25px);
  background-color:${({theme})=>theme.AdminContentBackground};
  .adminHr{
    width:100%;
    display:flex;
    color:${({theme})=>theme.spesificColor};
    background-color: ${({theme})=>theme.backgroundColor};
  }
  .hrText,.goBack{
    width:50%;
    padding:5px;
    height:50px;
    position:relative;
  }
  .hrText{
    display:flex;
    align-items:center;
    padding:30px;
  }
  .goBackButton{
    position:absolute;
    text-align:center;
    right:10px;
    width:100px;
    top:10px;
    padding:5px 10px;
    background-color:${({theme})=>theme.blogCardGoBlogBackground};
    color: ${({theme})=>theme.formInputButtonHoverColor};
    cursor:pointer;
  }
`

const ImageUpload=styled.div`
  margin:5vh 0px;
  padding:5vh 0px;
  label{
    width:80%;
    cursor:pointer;
    transition:600ms all;
    -webkit-box-shadow: ${(props)=>props.success!=0 ? '0px 0px '+props.success+'px 0px  rgba(0,255,9,1)' : (props.error!=0 ? '0px 0px '+props.success+'px 0px  rgba(255,0,0,1)' : '0px')};
    -moz-box-shadow:${(props)=>props.success!=0 ? '0px 0px '+props.success+'px 0px  rgba(0,255,9,1)' : (props.error!=0 ? '0px 0px '+props.success+'px 0px  rgba(255,0,0,1)' : '0px')};
    box-shadow:${(props)=>props.success!=0 ? '0px 0px '+props.success+'px 0px  rgba(0,255,9,1)' : (props.error!=0 ? '0px 0px '+props.success+'px 0px  rgba(255,0,0,1)' : '0px')};
    margin-left:10%;
    background-color:rgba(0,0,0,.1);
    height:150px;
    display:flex;
    justify-content:center;
    align-items:center;
  }
`

export {

  AdminContent,

  ImageUpload

}