import React from 'react'

import SearchBox from '../BlogCard/SearchBox'

import { BlogContent } from '../../../Styles/User/BlogContent'

import ContentItem from './ContentItem'

const Blog=(props)=> {
  
  const {open}=props
 
  return (

    <>

      <SearchBox/>

      <BlogContent >

        <ContentItem  open={open} />
      
      </BlogContent>
      
    </>

  )

}

export default Blog 