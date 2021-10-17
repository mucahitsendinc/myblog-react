import React from 'react'

import AboutItems from '../../components/User/About'

import {Helmet} from "react-helmet"

const Home=(props)=>{
  
  return (
    <>
    
    <Helmet>
        <title>Hakkımda - Mücahit Sendinç</title>
        <meta name="title" content="mücahit sendinç kimdir" />
        <meta name="description" content="Mücahit Sendinç kimdir ve bilgi projeleri nelerdir. Bu soruların yanıtları bu sayfada yer almaktadır. Liste şeklinde kendimi kısa ve öz şekilde anlatan bir içerik bu sayfada yer almaktadır." />
        <meta name="keywords" content="mücahit sendinç Blogları,mücahit sendinç kimdir, kişisel paylaşımlarım, blog içerikleri"/>
        <meta property="og:title" content="mücahit sendinç kimdir" />
        <meta property="og:description" content="Mücahit Sendinç kimdir ve bilgi projeleri nelerdir. Bu soruların yanıtları bu sayfada yer almaktadır. Liste şeklinde kendimi kısa ve öz şekilde anlatan bir içerik bu sayfada yer almaktadır." />
        <link rel="canonical" href={process.env.REACT_APP_PUBLIC_URL+"/hakkimda"} />
    </Helmet>
    <AboutItems/>
    </>
  )

}

export default Home 