import {UserInfos} from '../../../Styles/User/About'

import { faMapMarkerAlt,faEnvelope,faPhone   } from '@fortawesome/free-solid-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Contact=(props)=>{
  
  const {location,email,phone} = props.data

  return(

    <>

      <UserInfos>

        <div>

          <FontAwesomeIcon  icon={faMapMarkerAlt} /> 

          {

            location
          
          }

        </div>

        <div>

          <FontAwesomeIcon  icon={faEnvelope} /> 

          {
 
            email
          
          }

        </div>

        <div>

          <FontAwesomeIcon  icon={faPhone} /> 

          {

            phone
          
          }

        </div>

      </UserInfos>

    </>

  )

}

export {Contact}