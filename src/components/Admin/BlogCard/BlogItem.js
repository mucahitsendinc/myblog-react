import React,{useState} from 'react'
import {  BlogItemContainer } from '../../Styles/User/BlogCard'

import Title from './Title'

import Description from './Description'

import Resource from './Resource'

import Date from './Date'

import CreateRecommended from './CreateRecommended'

const BlogItem=(props)=> {

  const {image,title,date,description} = props.itemData

  const [remove,setRemove]=useState(false)
 
  return (

    <BlogItemContainer status={remove} >

        <Resource image={image}  />

        <Title title={title}  />

        <Description desc={description} />

        <Date date={date} /> 

        {
          props.proces=='CreateRecommended' ? 
          <CreateRecommended setremove={setRemove} id={props.itemData.uid} />
          :
          <React.Fragment/>
        }

    </BlogItemContainer>

  )

}

export default BlogItem