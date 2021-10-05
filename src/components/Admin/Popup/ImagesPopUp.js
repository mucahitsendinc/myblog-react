import {useState,useLayoutEffect} from 'react'
import { faTimes, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react' 

import {PopUp} from '../../Styles/Admin/PopUp'
import axios from 'axios'
const ImagesPopUp=(props)=>{  

  const [images,setImages]=useState(null)
  
  const getImages=async()=>{
    const token=await localStorage.getItem('token')
    axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_ALL_IMAGES,{},
    {headers:{'Content-Type':'application/json','Authorization':"Bearer "+token}})
    .then(function (results) { 
      setImages(results.data)
    }).catch((e)=>{
    })
  }

  useLayoutEffect(() => {
    getImages()
  }, [])

  return (
    <PopUp>
    
      <div className="content">
        
        <div className="closer">
          <FontAwesomeIcon onClick={()=>props.closer(false)} icon={faWindowClose} />
        </div>

        {
          images!=null ?
          images.map((e,index)=>{
            return(
              <img key={'image-'+index} style={{cursor:'pointer',margin:20}} onClick={()=>props.selector(e.path)} height="150" width="150" src={e.path} /> 
            )
          })
          :
          <></>
        }

      </div>

    </PopUp>
  )

}

export default ImagesPopUp