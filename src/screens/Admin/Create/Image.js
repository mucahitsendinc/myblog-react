import React,{useState,useRef,useEffect} from 'react'

import axios from 'axios'

import {AdminContent,ImageUpload} from '../../../components/Styles/Admin/Content'

import { useHistory } from 'react-router-dom';
import ActivityIndicator from 'react-activity-indicator'

const CreateImage=(props)=>{

  const [success,setSuccess]=useState(0)

  const [error,setError]=useState(0)

  const [post,setPost]=useState(false)

  const [file,setFile]=useState(null)

  const history=useHistory();

  const uploadForm=useRef()

  const uploadInput=useRef()

  const onFileChange=(e)=>{
    setFile(e.target.result)
    let files=e.target.files || e.dataTransfer.files
    createImage(files[0])
  }

  useEffect(() => {
    setTimeout(() => {
      setError(0)
      setSuccess(0)
    }, 2500);
  }, [success,error])

  const createImage=(file)=>{

    try {
      let reader = new FileReader();

      reader.onload = (e) => {

        setFile(e.target.result)

      };

      reader.readAsDataURL(file);
    } catch (error) {
      console.log(error)
    }

  }

  const onFileUpload=()=>{
    setPost(true)
    const formData = {file: file}

    axios.post(process.env.REACT_APP_PROXY_URL+''+process.env.REACT_APP_API_SEND_IMAGE,
    {formData},
    {headers:{'Content-Type':'application/json','Authorization':"Bearer "+localStorage.getItem('token')}})
    .then(function (results) { 
      setPost(false)
      setError(0)
      setSuccess(59)
    }).catch((e)=>{
      setPost(false)
      setSuccess(0)
      setError(59)
      console.log(e)
    })
    
  }
  
  useEffect(() => {
    if(file!=null){
      onFileUpload()
    }
  }, [file])

  const showFileManager=()=>{
    if(post==false){
      uploadInput.current.click()
    }
  }

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

        <ImageUpload success={success} errorr={error}>
          <form ref={uploadForm}  method="POST" onSubmit={(e)=> e.preventDefault()} enctype="multipart/form-data">
            <input ref={uploadInput} type="file" hidden onChange={onFileChange} />
            <label className="fileManager" onClick={showFileManager}>

              {
                post==true? 
                <ActivityIndicator
                    number={3}
                    diameter={28}
                    borderWidth={3}
                    duration={60}
                    activeColor="#fff"
                    borderColor="#ccc"
                    borderRadius="100%" 
                />
                :
                <>
                Görsel yüklemek için tıkla!
                </>
              }
              
            </label>
          </form>
        </ImageUpload>




      </AdminContent>

  )

}

export default CreateImage