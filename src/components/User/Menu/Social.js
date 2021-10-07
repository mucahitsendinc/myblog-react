import { SocialList } from '../../../Styles/User/Header'

import { faGithub,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Social=(props)=>{

  return(

    <SocialList>

      <div onClick={()=>window.open(props.github,'_blank')}>

          <FontAwesomeIcon  icon={faGithub} />

      </div>

      <div onClick={()=>window.open(props.linkedin,'_blank')}>

          <FontAwesomeIcon  icon={faLinkedin} />

      </div>

      <div onClick={()=>window.open(props.instagram,'_blank')}>

          <FontAwesomeIcon  icon={faInstagram} />

      </div>

    </SocialList>

  )

}

export default Social 