import {BlogImage} from '../../Styles/User/BlogContent'

import { Link } from 'react-router-dom'

const Resource=(props)=> {
  
  return (
    
    <Link to={props.link}>

      <BlogImage src={props.image} />
    
    </Link>

  )

}

export default Resource