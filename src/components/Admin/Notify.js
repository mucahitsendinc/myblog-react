import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import {NotifyContainer} from '../../Styles/Admin/Notification'
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const Notify=(props)=>{

  return (
    <React.Fragment>
        {
          props.data!=null ? 
          <NotifyContainer pose={props.data!=undefined ? 'visible' : 'hidden'} status={props.data.status}>
            {
              props.data.message
            }
            <div className="closeNotify" >
              <FontAwesomeIcon onClick={()=>props.closer(null)} icon={faTimes} />
            </div>
          </NotifyContainer>
          :
          <React.Fragment/> 
        }
    </React.Fragment>
  )
}

export default Notify