import styled from "styled-components"

const ContactForm=styled.div`
  padding:20vh 0px;
  display:flex;
  justify-content:center;
  align-items:center;
  overflow:hidden;
  form{
    transform:rotate(${(props)=>props.shakedeg}deg);
    padding:5vh 0px;
    width:60%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    position:relative;
    transition:10s all;
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

const FormGroup=styled.div`
  display:flex;
  flex-direction:column;
  width:30%;
  margin:0px 2.5%;
  padding:0px 2.5%;
`

const FormBigGroup=styled.div`
  display:flex;
  flex-direction:column;
  width:65%;
  margin:0px 2.5%;
  padding:0px 2.5%;
  margin-top:15px;
`

const ContactInput=styled.input`
  border-radius:20px;
  padding:5px 10px;
  transition:700ms all;
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
  background-color:${({theme})=>theme.formInput};  
  color:${({theme})=>theme.formInputTextColor};  
  &::placeholder{
    color:${({theme})=>theme.formInputPlaceHolderColor}
  }
  &:focus{
    border-radius:0;
    outline:${({theme})=>theme.formInputFocusBorderColor};
  }
  &:hover{
    border-radius:0;
  }
`

const ContactTextArea=styled.textarea`
  border-radius:20px;
  resize:none;
  padding:15px;
  transition:700ms all;
  height:20vh;
  color:${({theme})=>theme.formInputTextColor};  
  background-color:${({theme})=>theme.formInput};
  &::placeholder{
    color:${({theme})=>theme.formInputPlaceHolderColor}
  }
  &:focus{
    outline:${({theme})=>theme.formInputFocusBorderColor};
    border-radius:0;
  }
  &:hover{
    border-radius:0;
  }
`

const ContactTriangelTop=styled.div`
  position:absolute;
  background-color:transparent;
  border-color:  ${({theme})=>theme.backgroundColor} transparent transparent transparent;
  border-style: solid;
  border-width: 20px;
  width: 0px;
  height: 0px;
  right:0;top:0;
`

const ContactTriangelBottom=styled.div`
  position:absolute;
  background-color:transparent;
  border-color: transparent  transparent  ${({theme})=>theme.backgroundColor}  transparent;
  border-style: solid;
  border-width: 20px;
  width: 0px;
  height: 0px;
  right:0;bottom:0;
`

const ContactTriangelText=styled.div`
  position:absolute;
  right:-2.5vw;
  font-size:20px;
  transform:rotate(90deg);
`

const Error=styled.div`
  padding:5px;
  background-color:rgba(194, 54, 22,.70);
  border-radius:7px;
  color:#ddd;
`

const Success=styled.div`
  padding:5px;
  background-color:rgba(68, 189, 50,.41);
  border-radius:7px;
  color:#ddd;
`

export {
  
  ContactForm,
  
  FormGroup,
  
  ContactInput,
  
  FormBigGroup,
  
  ContactTextArea,
  
  ContactTriangelTop,

  ContactTriangelBottom,

  ContactTriangelText,

  Error,
   
  Success

}