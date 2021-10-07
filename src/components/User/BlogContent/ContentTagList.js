
import {BlogTagContentList} from '../../../Styles/User/BlogContent'

const ContentTagList=(props)=> {
  
  return (

    <BlogTagContentList>

        {
          
          props.tags.map((element,index) => {

            return(

              <li key={'comment-tag-'+index+element.id}>

                {'#'+element.tag}

              </li>

            )

          })

        }
  
      </BlogTagContentList>

  )

}
 
export default ContentTagList