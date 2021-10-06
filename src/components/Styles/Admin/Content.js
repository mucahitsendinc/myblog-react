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
  .errorArea,.successArea{
    width:100%;
    padding:10px 5px;
    display:flex;justify-content:center;align-items:center;
    margin:10px 0px;
  }
  .errorArea{
      background-color:rgba(255,0,0,.4);
      color:#fff;
  }
  .successArea{
      background-color:rgba(0,255,9,1);
      color:#000;
  }
`

const ImageUpload=styled.div`
  margin:5vh 0px;
  padding:5vh 0px;
  label{
    width:80%;
    cursor:pointer;
    transition:600ms all;
    -webkit-box-shadow: ${(props)=>props.success!=0 ? '0px 0px '+props.success+'px 0px  rgba(0,255,9,1)' : (props.error!=0 ? '0px 0px '+props.error+'px 0px  rgba(255,0,0,1)' : '0px')};
    -moz-box-shadow:${(props)=>props.success!=0 ? '0px 0px '+props.success+'px 0px  rgba(0,255,9,1)' : (props.error!=0 ? '0px 0px '+props.error+'px 0px  rgba(255,0,0,1)' : '0px')};
    box-shadow:${(props)=>props.success!=0 ? '0px 0px '+props.success+'px 0px  rgba(0,255,9,1)' : (props.error!=0 ? '0px 0px '+props.error+'px 0px  rgba(255,0,0,1)' : '0px')};
    margin-left:10%;
    background-color:rgba(0,0,0,.1);
    height:150px;
    display:flex;
    justify-content:center;
    align-items:center;
    .eText{
      font-weight:bold;
      color:rgba(255,0,0,.4);
    }
    .sText{
      font-weight:bold;
      color:#27ae60;
    }
  }
`

const Settings=styled.div`
  width:100%;
  padding:50px 0px;
  .SettingsFormButton{
    width:49%;
    margin-left:29%;
    input,textarea{
      padding:2.5%;
      transition:600ms all;
      width:100%;
    }
    input:hover,textarea:hover{
      background-color:#27ae60;
      color:#fff;
    }
  }
  .SettingsFormGroup{
    width:70%;
    margin-left:15%;
    margin-bottom:20px;
    position:relative;
    display:flex;
    .Images{
      position:absolute;
      right:12%;
      top:30%;
      font-size:22px;
      cursor:pointer;
      color:#000;
      transition:300ms all;
      &:hover{
        color:#ddd;
      }
    }
    label{
      width:20%;
      text-align:right;
      padding:2.5% 1.5%;

    }
    input,textarea{
      padding:2.5%;
      padding-right:5%;
      width:70%;
    }
    textarea{
      resize: none;
      height:450px;
      white-space: nowrap;
      padding: 15px;
      overflow-y: scroll;
      overflow-x: scroll;
    }
  }
  
  @media only screen and (max-width:750px){
    .SettingsFormGroup{
      width:95%;
      margin-left:2.5%;
      .Images{
        right:12%;
        top:20%;
      }
      input,textarea{
        width:60%;
        padding-right:10%;
      }
      label{
        width:30%;
      }
    }
  }
`

export {

  AdminContent,

  ImageUpload,

  Settings

}