import {useState,useLayoutEffect} from 'react'
import { faTimes, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react' 
import ActivityIndicator from 'react-activity-indicator';

import {PopUp} from '../../Styles/Admin/PopUp'
import axios from 'axios'
import ImageUpload from '../ImageUpload';
const ImagesPopUp=(props)=>{  

  const [images,setImages]=useState(null)
  
  const getImages=async()=>{
    const token=await localStorage.getItem('token')
    axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_ALL_IMAGES,{},
    {headers:{'Content-Type':'application/json','Authorization':"Bearer "+token}})
    .then(function (results) { 
      console.log(results.data.length)
      if(results.data.length>0){
        setImages(results.data)
      }else{
        setImages('bos')
      }
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
        <ImageUpload selector={props.selector} />
        {
          images!=null ?
          (
            images=='bos' ? 
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:50,fontSize:25}}>Hiç görsel bulunamadı!</div>
            :
            <div className="imageList">
              {
                images.map((e,index)=>{
                  return(
                    <img key={'image-'+index}  onClick={()=>props.selector(e.path)} height="150" width="150" src={e.path} /> 
                  )
                })
              }
            </div>
          )
          :
          <div className="popUp-loading">
             <ActivityIndicator
                number={3}
                diameter={28}
                borderWidth={3}
                duration={60}
                activeColor="#ccc"
                borderColor="#ccc"
                borderRadius="100%" 
              /> 
          </div>
        }

      </div>

    </PopUp>
  )

}

export default ImagesPopUp