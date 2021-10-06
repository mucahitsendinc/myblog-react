import {useEffect,useLayoutEffect,useState} from 'react'

import Comments from './Comments'

import { BlogContentContainer,Content } from '../../Styles/User/BlogContent'

import ContentHeader from './ContentHeader'

import RecommedItems from './RecommedItems'

import {useLocation} from 'react-router-dom'

import {AboutLoading} from '../../Styles/User/About'

import ActivityIndicator from 'react-activity-indicator'

import axios from 'axios'

const ContentItem=(props)=>{

  const location=useLocation()

  const [data,setData]=useState(null)

  const [recommendeds,setRecommendeds]=useState(null)
  
  useLayoutEffect(() => {

    axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_RECOMMENDED, {},{headers:{'Content-Type':'application/json'}}).then(function (response) { console.log(response); setRecommendeds(response.data.data) }) .catch(function (error) { console.log(error); });
    
  }, [])

  useEffect(() => {

    setData(null)
    
    axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_BLOG_DETAIL, { url:location.pathname.replace('/blogum/','') },{headers:{'Content-Type':'application/json'}}).then(function (response) {  setData(response.data.data) }) .catch(function (error) { console.log(error) }) 
  }, [location.pathname])

  return (

    <>

      {
        data!=null && recommendeds!=null ?

        <>

          <BlogContentContainer open={props.open}>

            <ContentHeader title={data.detail.title} tags={data.tags} />
          
            <Content dangerouslySetInnerHTML={{__html:(data.detail.content)}}></Content>

            <Comments postid={data.detail.id} comments={data.comments} />
            
          
          </BlogContentContainer>

          <RecommedItems itemData={recommendeds}  />
        
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

export default ContentItem