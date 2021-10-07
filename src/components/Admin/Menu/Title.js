import {TitleContainer,TitleText} from '../../../Styles/Admin/Header'

import {Link} from 'react-router-dom'

const Title=(props)=>{

  return (
    
    <TitleContainer>

      <Link to="/">

        <img src={process.env.REACT_APP_LOGO_PNG} />

      </Link>

      <TitleText>

        {props.title}
 
      </TitleText>

    </TitleContainer>
  )

}

export default Title