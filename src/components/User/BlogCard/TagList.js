
import {BlogTagList} from '../../../Styles/User/BlogCard'

const TagList=(props)=> {
  
  return (

    <BlogTagList>

        {
          
          props.tags.slice(0,3).map((element,index) => {
            return(
              
              <li key={props.name+index+element.id+element.tag}>{'#'+element.tag}</li>

            )

          })

        }
  
      </BlogTagList>

  )

}

export default TagList 