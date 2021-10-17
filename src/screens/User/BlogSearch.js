import React from 'react'

import BlogCard from '../../components/User/BlogCard'

import {Helmet} from "react-helmet"

import {useParams} from 'react-router-dom'

const BlogSearch=(props)=> {

  const params=useParams()



  return ( 
    <>
    
    <Helmet>
        <title>Arama Sonuçları - Blog Paylaşımlarım</title>
        <meta name="title" content="Arama Sonuçları - Mücahit sendinç'in blog içerikleri" />
        <meta name="description" content={`Mücahit Sendinç'in üretmiş olduğu kişisel web sayfası içeriklerinde yapılan ${params.searchtext} ile ilgili arama kriterlerine uyan sonuçlar bu sayfada yer almaktadır.`} />
        <meta name="keywords" content="mücahit sendinç blogları, blog araması, arama sonuçları"/>
        <meta property="og:title" content="Mücahit sendinç'in blog içerikleri" />
        <meta property="og:description" content={`Mücahit Sendinç'in üretmiş olduğu kişisel web sayfası içeriklerinde yapılan ${params.searchtext} ile ilgili arama kriterlerine uyan sonuçlar bu sayfada yer almaktadır.`} />
        <link rel="canonical" href={process.env.REACT_APP_PUBLIC_URL+"/blogum/ara/"+params.searchtext} />
    </Helmet>
    <BlogCard searching={params.searchtext}  />
    </>
  )
  
}

export default BlogSearch 