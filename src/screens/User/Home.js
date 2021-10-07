import React,{useState,useLayoutEffect} from 'react'

import axios from 'axios'
import { AboutLoading, MainHr } from '../../components/Styles/User/About'
import BlogItem from '../../components/User/BlogCard/BlogItem';
import { BlogItemList } from '../../components/Styles/User/BlogCard';
import  ActivityIndicator from 'react-activity-indicator';

const Home=(props)=>{

  const [recommendeds,setRecommendeds]=useState(null)
  const [posts,setPosts]=useState(null)

  useLayoutEffect(() => {

    axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_RECOMMENDED,
    {limit:4},
    {headers:{'Content-Type':'application/json'}})
    .then(function (response) { 
      setRecommendeds(response.data.data)
    }) 
    .catch(function (error) {
      console.log(error); 
    });

    axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_BLOGS,
    {limit:5},
    {headers:{'Content-Type':'application/json'}})
    .then(function (response) { 
      setPosts(response.data.data)
    }) 
    .catch(function (error) {
      console.log(error); 
    });

  }, [])

  return (

      <React.Fragment>

      {

        recommendeds!=null && posts!=null ?

        <div style={{marginTop:60}}>
          
          <MainHr>Son Önerilenler</MainHr>
          <BlogItemList>
          {
            recommendeds.map(function(e){
              return (
                <BlogItem key={e.unid} itemData={e} />
              )
            })
          }
          </BlogItemList>
          <MainHr>Son Paylaşımlar</MainHr>
          <BlogItemList>
          {
            posts.map(function(e){
              return (
                <BlogItem key={e.unid} itemData={e} />
              )
            })
          }
          </BlogItemList>
        </div>

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
      
      </React.Fragment>

  )
  
}

export default Home