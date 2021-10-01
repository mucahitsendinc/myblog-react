import styled from 'styled-components'

const Title=styled.div`
  font-size:28px;
  padding:60px 60px 0px 60px;
`

const Degree=styled.div`
  font-size:18px;
  padding:20px 0px 0px 40px;
`

const UserInfos=styled.div`
  display:flex;
    flex-wrap:wrap;
  div{
    width:33%;
    font-size:17px;
    flex-wrap:wrap;
    display:flex;justify-content:center;align-items:center;
    svg{
      font-size:34px;
      margin:15px;
    }
  }
  @media only screen and (max-width:750px){
    div{
      width:100%;
    }
  }
`

const MainHr=styled.div`
  width:100%;
  background-color:${({theme})=>theme.backgroundColor};
  padding:20px 50px;
  font-weight:500;
  font-size:26px;
  margin-bottom:10px;
  color:${({theme})=>theme.spesificColor};
`

const InfoList=styled.div`
  width:100%;
  padding:20px 0px;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
`

const BigItem=styled.div`
  width:90%;
  font-size:17px;
  cursor:pointer;
  padding:20px 20px;
  transition:300ms all;
  &:hover{
    color:${({theme})=>theme.formInputTextColor};
    transform:scale(1.3);
    text-align:center;
    background-color:${({theme})=>theme.itemHover};
  }
`

const SmallItem=styled.div`
  width:45%;
  float:left;
  font-size:17px;
  cursor:pointer;
  padding:20px 20px;
  transition:300ms all;
  &:hover{
    transform:scale(1.4);
    text-align:center;
    color:${({theme})=>theme.formInputTextColor};
    background-color:${({theme})=>theme.itemHover};
  }
`

const AboutLoading=styled.div`
  width:100%;
  display:flex;justify-content:center;align-items:center;
  padding:20vh 0px;
`

export {

  Title,

  MainHr,

  Degree,

  UserInfos,

  InfoList,

  BigItem,

  SmallItem,

  AboutLoading
  
}