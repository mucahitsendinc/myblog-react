
import {BlogTagList} from '../../Styles/User/BlogCard'

const TagList=(props)=> {
  
  return (

    <BlogTagList>

        {
          
          props.tags.map((element,index) => {

            return(
              
              <li key={props.name+index+element}>{'#'+element}</li>

            )

          })

        }
  
      </BlogTagList>

  )

}

export default TagList