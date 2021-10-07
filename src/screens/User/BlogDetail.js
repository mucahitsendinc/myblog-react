import React from 'react'

import BlogContent from '../../components/User/BlogContent'

import {useParams} from 'react-router-dom'

const BlogDetail=(props)=> {

  const params=useParams()

  return (

    <BlogContent blogname={params.blog} open={props.open} />

  )

}

export default BlogDetail 