import styled from "styled-components";

const SearchContainer=styled.div`
  margin-bottom:30px;
  form{
    width:100%;
    height:40px;
    display:flex;
    padding:30px 60px;
  }
`

const SearchInput=styled.div`
  width:90%;
  input{
    padding:20px 20px;
    height:40px;
    width:100%;
  }
`

const SearchButton=styled.div`
  width:10%;
  button{
    height:40px;
    width:100%;
    transition:600ms all;
    &:hover{
      background-color:#fff;
    }
  }
` 

export {

  SearchContainer,

  SearchInput,

  SearchButton,

} 