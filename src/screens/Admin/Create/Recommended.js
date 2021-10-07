import React,{useLayoutEffect,useState} from 'react'

import axios from 'axios'
import BlogItem from '../../../components/Admin/BlogCard/index'
import {AboutLoading} from '../../../Styles/User/About'

import ActivityIndicator from 'react-activity-indicator'
const CreateRecommended=()=>{

  const [data,setData]=useState(null)
  
  useLayoutEffect(() => {
    axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_GET_POST_WITHOUT_RECOMMENDEDS,
    {data:123},
    {headers:{'Content-Type':'application/json','Access-Control-Allow-Origin' : '*','Authorization':'Bearer '+localStorage.getItem('token')}})
    .then(function (results) { 
      setData(results.data.data)
    }).catch(function(results){
      console.log(results)
      console.log(results.response)
    })
  }, [])


  return (
  
    <>
  
      {
        data!=null ?
        (
              <BlogItem itemData={data} proces="CreateRecommended" />
        )
        
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

export default CreateRecommended