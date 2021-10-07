import React,{useState,useRef,useEffect} from 'react'



import {AdminContent} from '../../../Styles/Admin/Content'

import ImageUpload from '../../../components/Admin/ImageUpload'

import { useHistory } from 'react-router-dom';



const CreateImage=(props)=>{

  const history=useHistory();

  return (
      
      <AdminContent>

        {/*  */}


        <div className="adminHr">

          <div className="hrText">
            Görsel Yükle
          </div>

          <div  className="goBack">
            <div onClick={()=>history.goBack()} className="goBackButton">
              Geri DÖn
            </div>
          </div>

        </div>

        <ImageUpload/>




      </AdminContent> 

  )

}

export default CreateImage