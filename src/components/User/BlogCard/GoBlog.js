import {  GoBlogText } from '../../Styles/User/BlogCard'

import { Link } from 'react-router-dom'

const GoBlog=(props)=>{

  return(

    <Link to={props.link}>
      
      <GoBlogText>
            
        {
        
          props.text
        
        }
        
      </GoBlogText>
      
    </Link>

  )

}

export default GoBlog