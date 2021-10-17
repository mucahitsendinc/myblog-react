import {useEffect,useLayoutEffect,useState} from 'react'

import Comments from './Comments'

import { BlogContentContainer,Content } from '../../../Styles/User/BlogContent'

import ContentHeader from './ContentHeader'

import RecommedItems from './RecommedItems'

import {useLocation} from 'react-router-dom'

import {AboutLoading} from '../../../Styles/User/About'

import ActivityIndicator from 'react-activity-indicator'

import axios from 'axios'

import {Helmet} from "react-helmet"


// import Prism from 'prismjs'
// import "prismjs/themes/prism.css"
// import 'prismjs/components/prism-php'
// import 'prismjs/components/prism-bash'
// import 'highlight.js/styles/monokai.css';
import 'highlight.js/styles/night-owl.css';
import 'highlightjs-badge/highlightjs-badge.min.js';
const ContentItem=(props)=>{

  const location=useLocation()
  const hljs = require('highlight.js');

  const [data,setData]=useState(null)
  const [content,setContent]=useState(null)
  const [recommendeds,setRecommendeds]=useState(null)
  
  useLayoutEffect(() => {

    axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_RECOMMENDED, {},{headers:{'Content-Type':'application/json'}}).then(function (response) {  setRecommendeds(response.data.data) }) .catch(function (error) { console.log(error); });
    
  }, [])
  
  useEffect(() => {
    setTimeout(() => {
      hljs.highlightAll();
    }, 10);
  }, [content])

  useEffect(() => {

    setData(null)
  
    axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_BLOG_DETAIL, { url:location.pathname.replace('/blogum/','') },{headers:{'Content-Type':'application/json'}}).then(function (response) {  setData(response.data.data); 
    // const detail=response.data.data.detail.content.replace('<pre class="ql-syntax" spellcheck="false">','<pre class="ql-syntax" spellcheck="false"><code class="language-javascript" spellcheck="false">')
    setContent(response.data.data.detail.content.replaceAll('<pre class="ql-syntax" spellcheck="false">','<pre class="ql-syntax" spellcheck="false"><code>').replaceAll('</pre>','</code></pre>'))
    setTimeout(() => {
      
      var pres = document.querySelectorAll("pre>code");
      for (var i = 0; i < pres.length; i++) {
        hljs.highlightBlock(pres[i]);
      }
      var options = {   copyIconClass: "copysvg",checkIconClass: "copyedsvg"};
      window.highlightJsBadge(options);
    }, 10);
  }) .catch(function (error) { console.log(error) }) 
  }, [location.pathname])

  return (

    <>

      {
        data!=null && recommendeds!=null ?
 
        <>
          <Helmet>
              <title>{data.detail.title}</title>
              <link rel="canonical" href={process.env.REACT_APP_PUBLIC_URL+location.pathname} />
              <meta name="title" content={data.detail.title} />
              <meta name="description" content={data.detail.description.substring(0,160)} />
              <meta name="keywords" content={data.detail.keywords==undefined ? 'mücahit sendinç, kişisel web sayfası, özgün içerikler' : data.detail.keywords} />
              <meta property="og:title" content={data.detail.title} />
              <meta property="og:description" content={data.detail.description.substring(0,160)} />
              <link rel="canonical" href={process.env.REACT_APP_PUBLIC_URL+location.pathname} />
          </Helmet>

          <BlogContentContainer open={props.open}>

            <ContentHeader title={data.detail.title} tags={data.tags} />

            <Content dangerouslySetInnerHTML={{__html:content}}></Content>
    
            <Comments postid={data.detail.id} comments={data.comments} />
           
          
          </BlogContentContainer>

          <RecommedItems itemData={recommendeds}  />
        
        </>
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

    </>
    
  )

}

export default ContentItem