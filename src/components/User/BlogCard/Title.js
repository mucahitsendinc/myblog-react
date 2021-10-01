

import {  BlogTitle } from '../../Styles/User/BlogCard'

import { Link } from 'react-router-dom'

const Title=(props)=>{

  return(

    <Link to={props.link}>
      
      <BlogTitle>

        {props.title}
      
      </BlogTitle>

    </Link>

  )

}

export default Title