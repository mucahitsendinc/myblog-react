import React from 'react'

import AboutItems from '../../components/User/About'

import {Helmet} from "react-helmet"

const Home=(props)=>{
  
  return (
    <>
    
    <Helmet>
        <title>Hakkımda</title>
        <link rel="canonical" href="https://www.mucahitsendinc.com/hakkimda" />
        <meta name="title" content="mücahit sendinç kimdir" />
        <meta name="description" content="Mücahit Sendinç kimdir ve bilgi projeleri nelerdir. Bu soruların yanıtları bu sayfada yer almaktadır. Liste şeklinde kendimi kısa ve öz şekilde anlatan bir içerik bu sayfada yer almaktadır." />
        <meta name="keywords" content="mücahit sendinç Blogları, kişisel paylaşımlarım, blog içerikleri"/>
    </Helmet>
    <AboutItems/>
    </>
  )

}

export default Home 