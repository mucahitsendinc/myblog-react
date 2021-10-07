import {CommentContainer,CommentName,Comment,CommentDate,CommentContent} from '../../../Styles/User/BlogContent'

import { MainHr } from '../../../Styles/User/About'

import {FormItems} from '../Contact/Form'

const Comments=(props)=>{
  
  return(
    
    <CommentContainer>

          {

            props.comments.length>0 ? 
            
            <>
            
              <MainHr>

                Yorumlar

              </MainHr>
            
                {
            
                  props.comments.map(function(comment){
                
                    return(

                      <Comment key={'comment-id-'+comment.id}>

                        <CommentName>{comment.name}</CommentName>

                        <CommentDate>{comment.date}</CommentDate>
 
                        <CommentContent>{comment.comment}</CommentContent>
                  
                    </Comment> 

                    )

                  })

                }

            </>

            :

            <Comment >
            
              <CommentContent style={{textAlign:'center'}}>
                
                Bu gönderiye ilk yorum yapan sen ol!

              </CommentContent>
            
            </Comment> 

          }

          <MainHr>Yorum Gönder</MainHr>

          <FormItems postid={props.postid} status="comment" />

    </CommentContainer>

  )

}

export default Comments