import React from 'react'

import ContactItems  from '../../components/User/Contact'

import {Helmet} from "react-helmet";

const Contact=(props)=>{

  return (
    <>
  
    <Helmet>
        <title>İletişim</title>
        <link rel="canonical" href="https://www.mucahitsendinc.com/iletisim" />
        <meta name="title" content="Mücahit sendinç'e ulaşmın" />
        <meta name="description" content="Mücahit Sendinç'e ulaşmak için bu sayfada bulunan iletişim formunu düzgün bir biçimde geçerli ve doğru veriler ile doldurduğunuz takdirse size geri dönüş şahsım tarafından muhakkak yapılacaktır." />
        <meta name="keywords" content="Mücahit Sendinç iletişim, bana ulaş, forum doldur ve ulaş"/>
    </Helmet>
    <ContactItems/>
    </>
  )

}

export default Contact 