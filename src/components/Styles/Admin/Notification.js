import styled from 'styled-components';

import posed from 'react-pose';

const NotifyAnimator=posed.div({
  visible: {
    opacity:1,
    applyAtStart:{
      display:'block',
    }
  },
  hidden: {
    opacity:0,
    applyAtEnd:{
      display:'none'
    }
  },
})

const NotifyContainer=styled(NotifyAnimator)`
  transition:600ms all;
  width:300px;
  padding:10px 5px;
  background-color:${(props)=>props.status=='error' ? '#eb4d4b' : '#6ab04c'};
  color:${(props)=>props.status=='error' ? '#fff' : '#000'};
  position:fixed;
  z-index:200;
  top:20px;
  right:20px;
  .closeNotify{
    position:absolute;
    right:3px;
    top:0;
    svg{
      cursor:pointer;
      transition:500ms all;
      &:hover{
        color:${(props)=>props.status!='error' ? '#fff' : '#000'};
      }
    }
  }
`
export {

  NotifyContainer

}