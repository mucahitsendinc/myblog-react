import styled from 'styled-components'

const PopUp=styled.div`
  position:fixed;
  background-color:rgba(0,0,0,.4);
  z-index:9999;
  width:100vw;
  height:100vh;
  padding:0;
  margin:0;
  top:0;
  left:0;
  display:flex;
  justify-content:center;
  align-items:center;
  .content{
    width:70%;
    padding: 20px 0px;
    background-color:#fff;
    position:relative;
    .closer{
      position:absolute;
      right:0px;
      top:0px;
      padding:5px;
      svg{
        cursor:pointer;
        font-size:25px;
        transition:600ms all;
        &:hover{
          color:red;
        }
      }
    }
  }
`

export {

  PopUp

}