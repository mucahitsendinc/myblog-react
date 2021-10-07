import ContentTagList from './ContentTagList'

import { BlogContentTitle } from '../../../Styles/User/BlogContent'

import GoBack from './GoBack'

const ContentHeader=(props)=>{

  return (

    <>
      
      <GoBack/>
        
      <BlogContentTitle>
    
        {

          props.title

        }
    
      </BlogContentTitle>
    
      <ContentTagList tags={props.tags}/>
    
    </>

  )
 
}

export default ContentHeader