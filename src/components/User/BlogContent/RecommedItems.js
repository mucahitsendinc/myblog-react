import {  BlogItemContainer,BlogRouter } from '../../../Styles/User/BlogContent'

import Title from './Title'

import Description from './Description'

import GoBlog from './GoBlog'

import TagList from './TagList'

import Resource from './Resource'

import { MainHr } from '../../../Styles/User/About'

import Date from './Date'

const RecommedItems=(props)=> {
  
  return (
    <BlogRouter>

      <MainHr>
        
        Öneriler

      </MainHr>

      {
        
        props.itemData.map(function(recommed){
          
          const link=''+recommed.url
          
          const text="Devamını oku" 
          
          return(

              
              <BlogItemContainer key={recommed.unid}>
            
                  <Resource image={recommed.image} link={link} />

                  <Title title={recommed.title} link={link} />

                  <TagList tags={recommed.tags} />

                  <Description desc={recommed.description} />

                  <GoBlog text={text} link={link} />

                  <Date date={recommed.date} />
            
              </BlogItemContainer>
              
          
          )

        })

      }

    </BlogRouter>

  )

}

export default RecommedItems