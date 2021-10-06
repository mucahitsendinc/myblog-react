import React from 'react'

import axios from 'axios'

const CreateRecommended=()=>{
  
    axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_LOCAL_API_GET_POST_WITHOUT_RECOMMENDEDS, {},{headers:{'Content-Type':'application/json','Access-Control-Allow-Origin' : '*','Authorization':'Bearer '+localStorage.getItem('token')}}).then(function (results) { console.log(results) })


  return (
  
    <>
  
      create Recommend
      
    </>
  
  )

}

export default CreateRecommended