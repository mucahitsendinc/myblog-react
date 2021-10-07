
import {BlogTagList} from '../../../Styles/User/BlogContent'

const TagList=(props)=> {
  
  return (

    <BlogTagList>

      {
        
        props.tags.map((element,index) => {
          return(

            <li key={'tag-list-'+index+element.id}>

              {'#'+element.tag}
              
            </li>

          )

        })

      }
  
    </BlogTagList>

  )

}

export default TagList 