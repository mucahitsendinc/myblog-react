import React from 'react'

import {InfoList,SmallItem,MainHr,BigItem,AboutLoading} from '../../Styles/User/About'

import ActivityIndicator from 'react-activity-indicator'

const Items=(props)=>{

  const aboutData=props.about 

  return(

    <>
    
    {
    
      aboutData!=null ? 
      
      <>
      
      {
      
        aboutData.map((e,index)=>{
          return (

            <React.Fragment key={e.title.replace(" ","")+e.index}>
            
            <MainHr>
            
              {e.title}
            
            </MainHr>
            
            <InfoList>

            {
              
              JSON.parse(e.list).map((item,index)=>{
                return(

                  <React.Fragment key={item.replace(" ",)+index}>
                    {

                      JSON.parse(e.list).length>4 ? 
                      
                      <SmallItem>
                      
                        {item}
                      
                      </SmallItem>
                      
                      :
                      
                      <BigItem>
                        
                        {item}
                        
                      </BigItem>
                    
                    }

                  </React.Fragment>
                
                )

              })

            }

            </InfoList>
            
            </React.Fragment>
          )

        })

      }

      </>

      :
      
      <AboutLoading>

        <ActivityIndicator
            number={3}
            diameter={28}
            borderWidth={3}
            duration={60}
            activeColor="#fff"
            borderColor="#ccc"
            borderRadius="100%" 
        />
      
      </AboutLoading>
    
    }

    </>

  )

}

export default Items