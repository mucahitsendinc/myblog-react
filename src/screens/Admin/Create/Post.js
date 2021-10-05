import React,{useState,useEffect,useRef} from 'react'

import {AdminContent,Settings} from '../../../components/Styles/Admin/Content'

import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faImages } from '@fortawesome/free-solid-svg-icons';

import ImagesPopUp from '../../../components/Admin/Popup/ImagesPopUp'

const CreatePost=()=>{
  const history=useHistory();
  const smallImage=useRef()
  const [popup,setPopup]=useState(false);
  const [selectedImage,setSelectedImage]=useState(null);
  useEffect(() => {
    if(selectedImage!=null){
      setPopup(false)
      smallImage.current.value=selectedImage
    }
  }, [selectedImage])
  return (
      
      <>
      {
        popup==true  ? 
        <ImagesPopUp closer={setPopup} selector={setSelectedImage} />
        :
        <React.Fragment/>
      }
      <AdminContent>


        <div className="adminHr">

          <div className="hrText">
            Yeni Paylaşım
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
            <label>Başlık </label>
            <input type="text" />
          </div>

          <div className="SettingsFormGroup">
            <label>Açıklama </label>
            <input type="text"  />
          </div>

          <div className="SettingsFormGroup">
            <label>Küçük Fotoğraf </label>
            <input type="text" ref={smallImage} />
            <div className="Images" onClick={()=>setPopup(!popup)}>
              <FontAwesomeIcon icon={faImages}/>
            </div>
          </div>
          <div className="SettingsFormGroup">
            <label>İçerik</label>
            <textarea ></textarea>
          </div>
          
          
          <div className="SettingsFormButton">
            
            <input type="submit"  value="Paylaş" />
          </div>

        </form>

      </Settings>




      </AdminContent>
      </>


  )

}

export default CreatePost