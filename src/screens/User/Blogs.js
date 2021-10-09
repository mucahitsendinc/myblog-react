import React from 'react'

import BlogCard from '../../components/User/BlogCard'

import {Helmet} from "react-helmet"

const Blogs=(props)=> {

  return ( 
    <>
    
    <Helmet>
        <title>Blog Paylaşımlarım</title>
        <link rel="canonical" href="https://www.mucahitsendinc.com/blogum" />
        <meta name="title" content="Mücahit sendinç'in blog içerikleri" />
        <meta name="description" content="Mücahit Sendinç'in üretmiş olduğu kişisel web sayfası içerikleri. Yaptığım paylaşımlar bana ait olup günlük niteliğinde bilgi ve deneyimlerimi aktardığım yazılardır." />
        <meta name="keywords" content="mücahit sendinç Blogları, kişisel paylaşımlarım, blog içerikleri"/>
    </Helmet>
    <BlogCard />
    </>
  )
  
}

export default Blogs 