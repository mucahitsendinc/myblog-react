import React from "react";

import { AdminContext,useContext } from "../../../screens/Admin/AdminContext";

import axios from 'axios'

const CreateRecommended=(props)=>{
  console.log(props)
  const {setNotify}=useContext(AdminContext)
  const create=()=>{

     axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_CREATE_RECOMMENDED,
     {post:props.id},
     {headers:{'Content-Type':'application/json','Access-Control-Allow-Origin' : '*','Authorization':'Bearer '+localStorage.getItem('token')}})
    .then(function (results) {
      console.log(results)
      setNotify(null)
      setNotify({status:'success',message:results.data.message})
      props.setremove(true)
    }).catch(function(results){
      console.log(results)
      setNotify(null)
      setNotify({status:'error',message:results.data.message})
    })

    

  }

      
  
  
  return(
    <React.Fragment>
      <button className="recommedButton" onClick={()=>create()} >Öne Çıkar</button>
    </React.Fragment>
  )

}

export default CreateRecommended