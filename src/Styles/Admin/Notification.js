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
  color:${(props)=>props.status=='error' ? '#fff' : '#eee'};
  -webkit-box-shadow: 0px 0px 26px -6px ${(props)=>props.status=='error' ? 'rgba(255,0,0,1)' : 'rgba(0,255,0,1)'};
  -moz-box-shadow: 0px 0px 26px -6px ${(props)=>props.status=='error' ? 'rgba(255,0,0,1)' : 'rgba(0,255,0,1)'};
  box-shadow: 0px 0px 26px -6px ${(props)=>props.status=='error' ? 'rgba(255,0,0,1)' : 'rgba(0,255,0,1)'};
  border-radius: 5px 5px 5px 5px;
  -moz-border-radius: 5px 5px 5px 5px;
  -webkit-border-radius: 5px 5px 5px 5px;
  border: 1px solid ${(props)=>props.status=='error' ? '#ff0000' : '#2dff00'};
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