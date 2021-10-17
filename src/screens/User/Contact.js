import React from 'react'

import ContactItems  from '../../components/User/Contact'

import {Helmet} from "react-helmet";

const Contact=(props)=>{

  return (
    <>
  
    <Helmet>
        <title>İletişim</title>
        <meta name="title" content="Mücahit sendinç'e ulaşmın" />
        <meta name="description" content="Mücahit Sendinç'e ulaşmak için bu sayfada bulunan iletişim formunu düzgün bir biçimde geçerli ve doğru veriler ile doldurduğunuz takdirse size geri dönüş şahsım tarafından muhakkak yapılacaktır." />
        <meta name="keywords" content="Mücahit Sendinç iletişim, bana ulaş, forum doldur ve ulaş"/>
        <meta property="og:title" content="Mücahit sendinç'e ulaşmın" />
        <meta property="og:description" content="Mücahit Sendinç'e ulaşmak için bu sayfada bulunan iletişim formunu düzgün bir biçimde geçerli ve doğru veriler ile doldurduğunuz takdirse size geri dönüş şahsım tarafından muhakkak yapılacaktır." />
        <link rel="canonical" href={process.env.REACT_APP_PUBLIC_URL+"/iletisim"} />
    </Helmet>
    <ContactItems/>
    </>
  )

}

export default Contact 