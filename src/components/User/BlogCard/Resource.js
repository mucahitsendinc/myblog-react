

import {BlogImage} from '../../Styles/User/BlogCard'

import { Link } from 'react-router-dom'

const Resource=(props)=> {
  
  return (
    
    <Link to={props.link}>

      <BlogImage src={props.image} />
    
    </Link>

  )

}

export default Resource