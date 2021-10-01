import React,{useState,useRef,useEffect} from 'react'

import axios from 'axios'

import {AdminContent,Settings} from '../../components/Styles/Admin/Content'

import { useHistory } from 'react-router'

import { MainContext,useContext } from '../../Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faImages } from '@fortawesome/free-solid-svg-icons';

const MainSettings=(props)=>{

  const history=useHistory()

  const {maindata,setMainData}=useContext(MainContext)
  
  const [user,setUser]=useState(maindata[0].info)
  const [profileImage,setProfileImage]=useState(maindata[1].info)
  const [favicon,setFavicon]=useState(maindata[2].info)
  const [degree,setDegree]=useState(maindata[3].info)
  const [location,setLocation]=useState(maindata[4].info)
  const [email,setEmail]=useState(maindata[5].info)
  const [phone,setPhone]=useState(maindata[6].info)
  const [copyright,setCopyright]=useState(maindata[7].info)
  const [github,setGithub]=useState(maindata[8].info)
  const [linkedin,setLinkedin]=useState(maindata[9].info)
  const [instagram,setInstagram]=useState(maindata[10].info)

  return (
      
      <AdminContent>

        <div className="adminHr">

          <div className="hrText">
            Genel Ayarlar
          </div>

          <div  className="goBack">
            <div onClick={()=>history.goBack()} className="goBackButton">
              Geri DÖn
            </div>
          </div>

        </div>

      
      <Settings>

        <form method="POST" onSubmit={(e)=> e.preventDefault()}>

          <div className="SettingsFormGroup">
            <label>Blog Sahibi </label>
            <input type="text" value={user} placeholder={maindata[0].info} onChange={(e)=>setUser(e.target.value)} />
          </div>

          <div className="SettingsFormGroup">
            <label>Profil Görseli </label>
            <input type="text" value={profileImage} placeholder={maindata[1].info} onChange={(e)=>setProfileImage(e.target.value)}  />
            <div className="Images">
              <FontAwesomeIcon icon={faImages}/>
            </div>
          </div>

          <div className="SettingsFormGroup">
            <label>Sayfa Görseli </label>
            <input type="text" value={favicon} placeholder={maindata[2].info} onChange={(e)=>setFavicon(e.target.value)}  />
            <div className="Images">
              <FontAwesomeIcon icon={faImages}/>
            </div>
          </div>
          <div className="SettingsFormGroup">
            <label>Blog Sahip Ünvanı</label>
            <input type="text"  value={degree} placeholder={maindata[3].info} onChange={(e)=>setDegree(e.target.value)}  />
          </div>
          <div className="SettingsFormGroup">
            <label>Konum</label>
            <input type="text"  value={location} placeholder={maindata[4].info} onChange={(e)=>setLocation(e.target.value)}/>
          </div>
          <div className="SettingsFormGroup">
            <label>E Posta </label>
            <input type="text" value={email} placeholder={maindata[5].info} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="SettingsFormGroup">
            <label>Telefon</label>
            <input type="text" value={phone} placeholder={maindata[6].info} onChange={(e)=>setPhone(e.target.value)}/>
          </div>
          <div className="SettingsFormGroup">
            <label>Telif Hakkı Yazısı</label>
            <input type="text" value={copyright} placeholder={maindata[7].info} onChange={(e)=>setCopyright(e.target.value)}/>
          </div>
          <div className="SettingsFormGroup">
            <label>Github Adresi</label>
            <input type="text"  value={github} placeholder={maindata[8].info} onChange={(e)=>setGithub(e.target.value)}/>
          </div>
          <div className="SettingsFormGroup">
            <label>Linkedin Adresi</label>
            <input type="text"  value={linkedin} placeholder={maindata[9].info} onChange={(e)=>setLinkedin(e.target.value)} />
          </div>
          <div className="SettingsFormGroup">
            <label>Instagram Adresi</label>
            <input type="text"  value={instagram} placeholder={maindata[10].info} onChange={(e)=>setInstagram(e.target.value)} />
          </div>
          
          <div className="SettingsFormButton">
            
            <input type="submit"  value="Kaydet" />
          </div>

        </form>

      </Settings>



      </AdminContent>

  )

}

export default MainSettings