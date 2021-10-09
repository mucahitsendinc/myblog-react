import React,{useState,useEffect,useLayoutEffect} from 'react'

import axios from 'axios'

import {AdminContent,Settings} from '../../Styles/Admin/Content'

import { useHistory } from 'react-router'

import { AdminContext,useContext } from './AdminContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faImages } from '@fortawesome/free-solid-svg-icons';
import { AboutLoading } from '../../Styles/User/About'
import ActivityIndicator from 'react-activity-indicator';
const AdminSettings=(props)=>{

  const {setNotify} = useContext(AdminContext)
  var md5 = require("md5"); 
  const [popup,setPopup]=useState(false)

  const [post,setPost]=useState(false)

  const [data,setData]=useState(null)

  const [access,setAccess]=useState('')
  const [newAccess,setNewAccess]=useState('')

  const [contact,setContact]=useState(null)
  const [comment,setComment]=useState(null)
  const [createPost,setCreatePost]=useState(null)
  const [createRecommended,setCreateRecommended]=useState(null)
  const [uploadImage,setUploadImage]=useState(null)
  const [deleteImage,setDeleteImage]=useState(null)
  const [search,setSearch]=useState(null)


  const history=useHistory()

  useLayoutEffect(() => {
    
    axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_GET_SETTINGS
    , {contact:contact==true ? 'enable' : 'disable'}
    ,{headers:{'Content-Type':'application/json','Authorization':'Bearer '+localStorage.getItem('token')}})
    .then(function (results) { 
      setContact(results.data[0].option=='enable' ? true : false)
      setComment(results.data[1].option=='enable' ? true : false)
      setCreatePost(results.data[2].option=='enable' ? true : false)
      setCreateRecommended(results.data[3].option=='enable' ? true : false)
      setUploadImage(results.data[4].option=='enable' ? true : false)
      setDeleteImage(results.data[5].option=='enable' ? true : false)
      setSearch(results.data[6].option=='enable' ? true : false)
      setData(results.data)
    })
    .catch(function(results){ 

        console.log(results.response)
    })
  }, [])

  const settingUpdate=async (e)=>{

    console.log(e.target.className)
    let data={}
    if(e.target.className=="contact"){
      data=await {
        contact:contact!=true ? 'enable' : 'disable'
      }
    }else if (e.target.className=="comment") {
      data=await {
        comment:comment!=true ? 'enable' : 'disable'
      }
    }else if (e.target.className=="post") {
      data=await {
        post:createPost!=true ? 'enable' : 'disable'
      }
    }else if (e.target.className=="recommended") {
      data=await {
        recommended:createRecommended!=true ? 'enable' : 'disable'
      }
    }else if (e.target.className=="uploadimage") {
      data=await {
        imageupload:uploadImage!=true ? 'enable' : 'disable'
      }
    }else if (e.target.className=="deleteimage") {
      data=await {
        imagedelete:deleteImage!=true ? 'enable' : 'disable'
      }
    }else if (e.target.className=="search") {
      data=await {
        search:search!=true ? 'enable' : 'disable'
      }
    }
    if(contact!=null){
      axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_UPDATE_ADMIN_SETTINGS
      ,data
      ,{headers:{'Content-Type':'application/json','Authorization':'Bearer '+localStorage.getItem('token')}})
      .then(function (results) { 
        setNotify(null)
        if (data.contact!=undefined) {
          setContact(!contact)
        }else if (data.comment!=undefined) {
          setComment(!comment)
        }else if( data.post!=undefined){
          setCreatePost(!createPost)
        }else if( data.recommended!=undefined){
          setCreateRecommended(!createRecommended)
        }else if( data.imageupload!=undefined){
          setUploadImage(!uploadImage)
        }else if( data.imagedelete!=undefined){
          setDeleteImage(!deleteImage)
        }else if( data.search!=undefined){
          setSearch(!search)
        }
        setNotify({status:'success',message:results.data.message})
      })
      .catch(function(results){ 
        e.preventDefault()
        setNotify(null)
        setNotify({status:'error',message:results.response.data.message})

      })
    }
    
  }
  


  const changeAccess=async(e)=>{
    e.preventDefault()
    if(post==false ){
      setPost(true)
      axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_PASSWORD_CHANGE, 
      {
        access:md5(access),
        newaccess:md5(newAccess)
      },
      {headers:{'Content-Type':'application/json','Access-Control-Allow-Origin' : '*','Authorization':'Bearer '+localStorage.getItem('token')}})
      .then(function (results) {
        setNotify(null)
        setNotify({status:'success',message:results.data.message})
        setAccess('')
        setNewAccess('')
        localStorage.setItem('token',results.data.token)
        setPost(false)
      }).catch(function(results){
        setNotify(null)
        setNotify({status:'error',message:results.response.data.message})
        setPost(false)
      })
    }

  }

  return (
      
      <>
        
        {
          data!=null ?
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

            <form method="POST" className="smallform" onSubmit={(e)=>e.preventDefault()}>

              <div className="SettingsFormGroup ">
                <label>İletişim formu </label>
                <label className="switch">
                <input type="checkbox" className="contact" checked={contact}  onChange={settingUpdate} />
                <span className="slider round"></span>
                </label>
              </div>

              <div className="SettingsFormGroup">
                <label>Yorum formu </label>
                <label className="switch">
                <input type="checkbox" className="comment" checked={comment}   onChange={settingUpdate} />
                <span className="slider round"></span>
                </label>
              </div>

              <div className="SettingsFormGroup">
                <label>İçerik Paylaşma </label>
                <label className="switch">
                <input type="checkbox" className="post" checked={createPost}   onChange={settingUpdate} />
                <span className="slider round"></span>
                </label>
              </div>

              <div className="SettingsFormGroup">
                <label>Öneri Paylaşma </label>
                <label className="switch">
                <input type="checkbox" className="recommended" checked={createRecommended}   onChange={settingUpdate} />
                <span className="slider round"></span>
                </label>
              </div>

              <div className="SettingsFormGroup">
                <label>Fotoğraf Yükleme </label>
                <label className="switch">
                <input type="checkbox" className="uploadimage" checked={uploadImage}   onChange={settingUpdate} />
                <span className="slider round"></span>
                </label>
              </div>

              <div className="SettingsFormGroup">
                <label>Fotoğraf Silme </label>
                <label className="switch">
                <input type="checkbox" className="deleteimage" checked={deleteImage}   onChange={settingUpdate} />
                <span className="slider round"></span>
                </label>
              </div>

              <div className="SettingsFormGroup">
                <label>Arama Yapma </label>
                <label className="switch">
                <input type="checkbox" className="search" checked={search}  onChange={settingUpdate} />
                <span className="slider round"></span>
                </label>
              </div>
              

            </form>

            <form method="POST" className="smallform" onSubmit={changeAccess}>
              
              <div className="SettingsFormGroup">
                <label>Eski Parola </label>
                <input type="password" value={access} onChange={(e)=>setAccess(e.target.value)} placeholder="Eski Erişim Parolası" />
              </div>

              <div className="SettingsFormGroup">
                <label>Yeni Parola </label>
                <input type="password" value={newAccess} onChange={(e)=>setNewAccess(e.target.value)} placeholder="Yeni Erişim Parolası" />
              </div>

              <div className="SettingsFormButton">
                {
                (
                    post==true ? 
                    <center>
                      <ActivityIndicator 
                        number={3}
                        diameter={28}
                        borderWidth={3}
                        duration={60}
                        activeColor="#ccc"
                        borderColor="#ccc"
                        borderRadius="100%" 
                        />
                      </center>
                    :
                    <input type="submit"  value="Kaydet" disabled={post} />
                  )
              }
              </div>

            </form>

          </Settings>

          </AdminContent>
          :
          <AboutLoading>
            <ActivityIndicator 
                        number={3}
                        diameter={28}
                        borderWidth={3}
                        duration={60}
                        activeColor="#ccc"
                        borderColor="#ccc"
                        borderRadius="100%" 
                        />
          </AboutLoading>
        }
        
      </>
  )

}

export default AdminSettings