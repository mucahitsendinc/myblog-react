

import {  BlogTitle } from '../../Styles/User/BlogContent'

import { Link } from 'react-router-dom'

const Title=(props)=>{

  return(

    <Link to={props.link}>
      
      <BlogTitle>

        {

          props.title
          
        }
      
      </BlogTitle>

    </Link>

  )

}

export default Title