import React,{useState,useRef,useEffect} from 'react'

import axios from 'axios'

import {AdminContent,Settings} from '../../Styles/Admin/Content'

import { useHistory } from 'react-router'
import { AdminContext,useContext } from './AdminContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faImages } from '@fortawesome/free-solid-svg-icons';
import ActivityIndicator from 'react-activity-indicator';
const AdminSettings=(props)=>{

  const {setNotify} = useContext(AdminContext)

  const [popup,setPopup]=useState(false);
  const [post,setPost]=useState(false);
  const history=useHistory()


 
  const updateSettings=async(e)=>{
    e.preventDefault()
    if(post==false ){
      //setPost(true)
      // axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_UPDATE_MAIN_INFO, 
      // {
      //   user:user,
      //   profile_image:selectedProfileImage!=null ? selectedProfileImage : profileImage,
      //   favicon_logo:selectedFavicon!= null ? selectedFavicon : favicon,
      //   degree:degree,
      //   location:location,
      //   email:email,
      //   phone:phone,
      //   copyright:copyright,
      //   social_github:github,
      //   social_linkedin:linkedin,
      //   social_instagram:instagram
      // },
      // {headers:{'Content-Type':'application/json','Access-Control-Allow-Origin' : '*','Authorization':'Bearer '+localStorage.getItem('token')}})
      // .then(function (results) {
      //   setNotify(null)
      //   setNotify({status:'success',message:results.data.message})
       
      //   setPost(false)
      // }).catch(function(results){
      //   setNotify(null)
      //   setNotify({status:'success',message:results.response.data.message})
      //   setPost(false)
      // })
    }

  }

  return (
      
      <>
        
        <AdminContent>

          <div className="adminHr">

            <div className="hrText">
              Yönetici Ayarları
            </div>

            <div  className="goBack">
              <div onClick={()=>history.goBack()} className="goBackButton">
                Geri DÖn
              </div>
            </div>

          </div>

        
        <Settings>

          <form method="POST" onSubmit={updateSettings}>

            <div className="SettingsFormGroup">
              <label>Sayfa Görseli </label>
              <input type="text" value={favicon} placeholder={maindata[2].info} onChange={(e)=>setFavicon(e.target.value)}  />
              <div className="Images">
                <FontAwesomeIcon onClick={()=>{
                  setSelector('page');
                  setPopup(true);
                }} icon={faImages}/>
              </div>
            </div>
            

          </form>

        </Settings>

        </AdminContent>
      </>
  )

}

export default AdminSettings